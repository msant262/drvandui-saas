#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const DEFAULT_ROOT = process.cwd()
const APP_BASE_URL = "https://www.drvandui.com.br"
const SEO_LOCAL_PATHS = [
  "/cardiologista-em-santos",
  "/cardiologista-em-santo-andre",
  "/cardiologista-vila-mariana",
]
const SEO_SERVICE_PATHS = [
  "/consulta-com-cardiologista",
  "/check-up-cardiologico",
  "/risco-cirurgico-cardiologico",
  "/tratamento-hipertensao",
  "/palpitacoes-arritmia",
  "/dor-no-peito-quando-procurar-cardiologista",
  "/colesterol-alto-cardiologista",
  "/prevencao-cardiovascular",
  "/clinica-medica",
]
const SEO_LANDING_PATHS = [...SEO_LOCAL_PATHS, ...SEO_SERVICE_PATHS]

export const SEO_ROUTES = [
  { route: "/", file: "dist/index.html", canonical: `${APP_BASE_URL}/` },
  { route: "/especialidades", file: "dist/especialidades/index.html", canonical: `${APP_BASE_URL}/especialidades` },
  { route: "/contato", file: "dist/contato/index.html", canonical: `${APP_BASE_URL}/contato` },
  ...SEO_LANDING_PATHS.map((route) => ({
    route,
    file: `dist/${route.slice(1)}/index.html`,
    canonical: `${APP_BASE_URL}${route}`,
  })),
]

export function readTextFile(filePath) {
  if (!existsSync(filePath)) {
    return null
  }

  return readFileSync(filePath, "utf8")
}

function read(projectRoot, filePath) {
  return readTextFile(path.resolve(projectRoot, filePath))
}

function readBuffer(projectRoot, filePath) {
  const absolute = path.resolve(projectRoot, filePath)
  if (!existsSync(absolute)) {
    return null
  }

  return readFileSync(absolute)
}

export function getTagAttribute(tag, name) {
  const regex = new RegExp(`\\b${name}=(["'])(.*?)\\1`, "i")
  const match = tag.match(regex)
  return match?.[2] ?? null
}

export function hasTag(html, tagName, attributes) {
  const tagRegex = new RegExp(`<${tagName}[^>]*>`, "gi")
  let match

  while ((match = tagRegex.exec(html)) !== null) {
    const tag = match[0]
    const isMatch = Object.entries(attributes).every(([attributeName, expected]) => {
      const value = getTagAttribute(tag, attributeName)
      if (value === null) {
        return false
      }

      if (expected instanceof RegExp) {
        return expected.test(value)
      }

      return value === expected
    })

    if (isMatch) {
      return true
    }
  }

  return false
}

export function hasJsonLdType(html, jsonLdType) {
  const escapedType = jsonLdType.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return new RegExp(`"@type"\\s*:\\s*[\"']${escapedType}[\"']`, "i").test(html)
}

export function parseRobotsUserAgentBlock(robots, userAgent = "*") {
  const target = userAgent.trim().toLowerCase()
  const lines = robots.split(/\r?\n/)
  const escapedUserAgent = target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const userAgentHeader = /^User-agent:\s*(.+)$/i
  const userAgentLine = new RegExp(`^User-agent:\\s*${escapedUserAgent}\\s*$`, "i")
  const allow = []
  const disallow = []
  let collecting = false
  let found = false

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      continue
    }

    if (userAgentHeader.test(trimmed)) {
      if (collecting) {
        break
      }

      collecting = userAgentLine.test(trimmed)
      found = found || collecting
      continue
    }

    if (!collecting) {
      continue
    }

    const allowMatch = trimmed.match(/^Allow:\s*(.*)$/i)
    if (allowMatch) {
      allow.push(allowMatch[1].trim())
      continue
    }

    const disallowMatch = trimmed.match(/^Disallow:\s*(.*)$/i)
    if (disallowMatch) {
      disallow.push(disallowMatch[1].trim())
    }
  }

  if (!found) {
    return null
  }

  return {
    allow,
    disallow,
  }
}

export function wildcardIndexationEnabled(robots) {
  const parsedBlock = parseRobotsUserAgentBlock(robots, "*")
  if (!parsedBlock) {
    return {
      hasBlock: false,
      allowsRoot: false,
      blocksRoot: false,
    }
  }

  const hasAllowRoot = parsedBlock.allow.some((line) => line === "/")
  const hasBlockRoot = parsedBlock.disallow.some((line) => line === "/")

  return {
    hasBlock: true,
    allowsRoot: hasAllowRoot,
    blocksRoot: hasBlockRoot,
  }
}

function fail(errors, message, condition) {
  if (condition) {
    console.log(`✅ ${message}`)
    return
  }

  errors.push(message)
  console.error(`❌ ${message}`)
}

function assertInSitemap(locs, url, errors, messagePrefix) {
  fail(errors, `${messagePrefix}: ${url}`, locs.includes(url))
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function checkJsAssets(projectRoot, maxBytes = 500 * 1024) {
  const assetsDir = path.resolve(projectRoot, "dist/assets")
  if (!existsSync(assetsDir)) {
    return null
  }

  const jsFiles = readdirSync(assetsDir).filter((file) => file.endsWith(".js"))
  const heavyFiles = jsFiles.filter((file) => {
    const stat = statSync(path.join(assetsDir, file))
    return stat.size > maxBytes
  })

  return {
    total: jsFiles.length,
    heavy: heavyFiles,
  }
}

function containsPrerenderEvent(projectRoot, marker = "dr-vandui-prerender-ready") {
  const assetsDir = path.resolve(projectRoot, "dist/assets")
  if (!existsSync(assetsDir)) {
    return false
  }

  const jsFiles = readdirSync(assetsDir).filter((file) => file.endsWith(".js"))
  return jsFiles.some((file) => {
    const content = readBuffer(projectRoot, `dist/assets/${file}`)
    if (!content) {
      return false
    }

    return content.includes(marker)
  })
}

export function runSeoChecks(root = DEFAULT_ROOT) {
  const errors = []

  const robots = read(root, "public/robots.txt")
  if (robots) {
    fail(errors, "robots.txt define regra para User-agent: *", /User-agent:\s*\*/i.test(robots))
    const indexation = wildcardIndexationEnabled(robots)
    fail(errors, "robots.txt permite indexação geral da raiz", Boolean(indexation.hasBlock && indexation.allowsRoot))
    fail(errors, "robots.txt não bloqueia '/' para crawler genérico", indexation.hasBlock ? !indexation.blocksRoot : false)
    fail(errors, "robots.txt aponta para sitemap correto", /Sitemap:\s*https:\/\/www\.drvandui\.com\.br\/sitemap\.xml/i.test(robots))
  }

  const sitemap = read(root, "public/sitemap.xml")
  if (sitemap) {
    const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim())
    const expectedUrls = SEO_ROUTES.map((route) => route.canonical)

    fail(errors, "sitemap.xml contém estrutura <urlset>", /<urlset[\s\S]*?>/m.test(sitemap))
    fail(errors, `sitemap.xml inclui pelo menos ${expectedUrls.length} URLs`, locs.length >= expectedUrls.length)
    expectedUrls.forEach((url) => assertInSitemap(locs, url, errors, "sitemap.xml contém URL esperada"))
  }

  const llms = read(root, "public/llms.txt")
  if (llms) {
    fail(errors, "llms.txt possui H1 obrigatório", /^#\s+\S+/m.test(llms))
    fail(errors, "llms.txt contém links Markdown", /\[[^\]]+\]\(https:\/\/[^)]+\)/m.test(llms))
  }

  const headers = read(root, "public/_headers")
  if (headers) {
    const requiredHeaders = [
      "X-Frame-Options: DENY",
      "X-Content-Type-Options: nosniff",
      "Strict-Transport-Security:",
      "Referrer-Policy:",
      "Content-Security-Policy:",
      "Cross-Origin-Opener-Policy:",
      "Cross-Origin-Resource-Policy:",
      "X-Robots-Tag: all",
    ]

    requiredHeaders.forEach((header) => fail(errors, `_headers define ${header}`, new RegExp(header, "i").test(headers)))
    fail(errors, "_headers otimiza cache de /assets", /\/assets\/*[\s\S]*Cache-Control:\s*public,\s*max-age=31536000,\s*immutable/i.test(headers))
    fail(
      errors,
      "_headers mantém /404.html com noindex via header",
      /\/404\.html[\s\S]*X-Robots-Tag:\s*noindex,\s*nofollow/i.test(headers)
    )
  }

  const redirects = read(root, "public/_redirects")
  if (redirects) {
    fail(errors, "_redirects usa apenas URLs relativas aceitas pelo Cloudflare", !/(^|\s)https?:\/\//im.test(redirects))
    SEO_ROUTES.filter(({ route }) => route !== "/").forEach(({ route }) => {
      const slug = route.slice(1)
      const routeRegex = new RegExp(`${escapeRegExp(route)}\\s+/${escapeRegExp(slug)}/index\\.html\\s+200`, "i")
      fail(errors, `_redirects cobre rota ${route}`, routeRegex.test(redirects))
    })
  }

  const viteConfig = read(root, "vite.config.ts")
  if (viteConfig) {
    fail(
      errors,
      "vite.config.ts possui fallback estático das rotas SEO",
      viteConfig.includes("seoLandingPages") &&
        viteConfig.includes("staticRouteFallbacks") &&
        viteConfig.includes("browserPrerenderRoutes")
    )
  }

  for (const { route, file, canonical } of SEO_ROUTES) {
    const html = read(root, file)
    if (!html) {
      fail(errors, `${route}: arquivo HTML de build existe`, false)
      continue
    }

    fail(errors, `${route}: canonical correto definido`, hasTag(html, "link", { rel: "canonical", href: canonical }))
    fail(errors, `${route}: possui <title>`, /<title>/.test(html))
    fail(errors, `${route}: meta robots index, follow`, hasTag(html, "meta", { name: "robots", content: /index,\s*follow/i }))
  }

  const indexHtml = read(root, "dist/index.html")
  if (indexHtml) {
    fail(errors, "index.html (build) inclui JSON-LD Physician", hasJsonLdType(indexHtml, "Physician"))
    fail(errors, "index.html (build) inclui JSON-LD MedicalBusiness", hasJsonLdType(indexHtml, "MedicalBusiness"))
  }

  const espHtml = read(root, "dist/especialidades/index.html")
  if (espHtml) {
    fail(errors, "Especialidades (build) inclui JSON-LD BreadcrumbList", hasJsonLdType(espHtml, "BreadcrumbList"))
  }

  const contatoHtml = read(root, "dist/contato/index.html")
  if (contatoHtml) {
    fail(errors, "Contato (build) inclui JSON-LD FAQPage", hasJsonLdType(contatoHtml, "FAQPage"))
    fail(errors, "Contato (build) inclui JSON-LD BreadcrumbList", hasJsonLdType(contatoHtml, "BreadcrumbList"))
  }

  for (const { route, file } of SEO_ROUTES) {
    fail(errors, `Build gerou ${file} para ${route}`, existsSync(path.resolve(root, file)))
  }

  for (const route of SEO_LANDING_PATHS) {
    const file = `dist/${route.slice(1)}/index.html`
    const html = read(root, file)
    if (!html) {
      continue
    }

    fail(errors, `${route}: inclui JSON-LD Physician`, hasJsonLdType(html, "Physician"))
    fail(errors, `${route}: inclui JSON-LD BreadcrumbList`, hasJsonLdType(html, "BreadcrumbList"))
    fail(errors, `${route}: inclui JSON-LD FAQPage`, hasJsonLdType(html, "FAQPage"))

    if (SEO_LOCAL_PATHS.includes(route)) {
      fail(errors, `${route}: inclui JSON-LD MedicalBusiness`, hasJsonLdType(html, "MedicalBusiness"))
    }

    if (SEO_SERVICE_PATHS.includes(route)) {
      fail(errors, `${route}: inclui JSON-LD Article`, hasJsonLdType(html, "Article"))
    }
  }

  const jsAssetInfo = checkJsAssets(root)
  fail(errors, `Nenhum asset JS de build acima de 500KB no bundle (atual: ${jsAssetInfo?.heavy?.length ?? 0})`, jsAssetInfo && jsAssetInfo.heavy.length === 0)
  fail(errors, "bundle contém evento de sinal para prerender", containsPrerenderEvent(root))

  return {
    passed: errors.length === 0,
    errors,
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { errors, passed } = runSeoChecks()
  if (!passed) {
    console.error(`\nFalhas de SEO técnico: ${errors.length}`)
    process.exit(1)
  }

  console.log("\nSEO técnico validado com sucesso.")
}
