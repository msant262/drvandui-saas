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
  "/palpitacoes-e-arritmias",
  "/dor-no-peito-quando-procurar-ajuda",
  "/colesterol-alto",
  "/prevencao-cardiovascular",
  "/clinica-medica",
]
const SEO_PROFILE_PATHS = [
  "/dr-vandui-cardiologista",
]
const SEO_ANSWER_PATHS = [
  "/palpitacoes-quando-se-preocupar",
  "/pressao-alta-quando-procurar-ajuda",
  "/colesterol-alto-e-risco-cardiaco",
  "/cardiologista-ou-clinico-geral",
]
const SEO_REDIRECTS = [
  { from: "/eventos", to: "/", status: 301 },
  { from: "/eventos/*", to: "/", status: 301 },
  { from: "/cardiologista-na-vila-mariana", to: "/cardiologista-vila-mariana", status: 301 },
  { from: "/avaliacao-de-risco-cirurgico", to: "/risco-cirurgico-cardiologico", status: 301 },
  { from: "/avaliacao-risco-cirurgico", to: "/risco-cirurgico-cardiologico", status: 301 },
  { from: "/palpitacoes-arritmia", to: "/palpitacoes-e-arritmias", status: 301 },
  { from: "/dor-no-peito", to: "/dor-no-peito-quando-procurar-ajuda", status: 301 },
  { from: "/dor-no-peito-quando-procurar-cardiologista", to: "/dor-no-peito-quando-procurar-ajuda", status: 301 },
  { from: "/colesterol-alto-cardiologista", to: "/colesterol-alto", status: 301 },
  { from: "/pressao-alta", to: "/tratamento-hipertensao", status: 301 },
]
const NON_CANONICAL_PATHS = SEO_REDIRECTS.map(({ from }) => from.replace("/*", ""))
const SEO_LANDING_PATHS = [...SEO_PROFILE_PATHS, ...SEO_LOCAL_PATHS, ...SEO_SERVICE_PATHS, ...SEO_ANSWER_PATHS]
const SEO_PRIORITY_INTERNAL_LINK_PATHS = [
  ...SEO_PROFILE_PATHS,
  ...SEO_LOCAL_PATHS,
  ...SEO_SERVICE_PATHS.filter((route) => route !== "/clinica-medica"),
]

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
    NON_CANONICAL_PATHS.forEach((route) => {
      fail(errors, `sitemap.xml não inclui alias não-canônico ${route}`, !locs.includes(`${APP_BASE_URL}${route}`))
    })
  }

  const llms = read(root, "public/llms.txt")
  if (llms) {
    fail(errors, "llms.txt possui H1 obrigatório", /^#\s+\S+/m.test(llms))
    fail(errors, "llms.txt contém links Markdown", /\[[^\]]+\]\(https:\/\/[^)]+\)/m.test(llms))
    fail(errors, "llms.txt linka página oficial de perfil médico", /https:\/\/www\.drvandui\.com\.br\/dr-vandui-cardiologista/i.test(llms))
    fail(errors, "llms.txt explicita CRM-SP 210328", /CRM-SP:\s*210328/i.test(llms))
    fail(errors, "llms.txt explicita RQE Cardiologia 146567", /RQE Cardiologia:\s*146567/i.test(llms))
    fail(errors, "llms.txt inclui respostas rápidas AEO", /## Respostas rapidas para pacientes/i.test(llms))
    ;[
      "Quando devo procurar um cardiologista?",
      "Cardiologista trata hipertensao?",
      "O que e prevencao cardiovascular?",
    ].forEach((question) => {
      fail(errors, `llms.txt responde: ${question}`, llms.includes(question))
    })
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
    SEO_REDIRECTS.forEach(({ from, to, status }) => {
      const redirectRegex = new RegExp(`${escapeRegExp(from)}\\s+${escapeRegExp(to)}\\s+${status}`, "i")
      fail(errors, `_redirects canonicaliza alias ${from} -> ${to}`, redirectRegex.test(redirects))
    })
    SEO_ROUTES.filter(({ route }) => route !== "/").forEach(({ route }) => {
      const slug = route.slice(1)
      const routeRegex = new RegExp(`${escapeRegExp(route)}\\s+/${escapeRegExp(slug)}/index\\.html\\s+200`, "i")
      fail(errors, `_redirects cobre rota ${route}`, routeRegex.test(redirects))
    })
  }

  const wranglerConfig = read(root, "wrangler.toml")
  if (wranglerConfig) {
    fail(errors, "wrangler.toml define Worker entrypoint para redirect canonico", /main\s*=\s*["']src\/worker\.js["']/i.test(wranglerConfig))
    fail(
      errors,
      "wrangler.toml roteia www.drvandui.com.br para o Worker",
      /pattern\s*=\s*["']www\.drvandui\.com\.br["'][\s\S]*?custom_domain\s*=\s*true/i.test(wranglerConfig)
    )
    fail(
      errors,
      "wrangler.toml roteia drvandui.com.br para o Worker",
      /pattern\s*=\s*["']drvandui\.com\.br["'][\s\S]*?custom_domain\s*=\s*true/i.test(wranglerConfig)
    )
    fail(errors, "wrangler.toml mantem assets em ./dist", /directory\s*=\s*["']\.\/dist["']/i.test(wranglerConfig))
    fail(errors, "wrangler.toml expoe assets como binding ASSETS", /binding\s*=\s*["']ASSETS["']/i.test(wranglerConfig))
    fail(errors, "wrangler.toml executa Worker antes dos assets para canonicalizacao", /run_worker_first\s*=\s*true/i.test(wranglerConfig))
  }

  const publicWorker = read(root, "public/_worker.js")
  fail(errors, "public/_worker.js nao existe como asset publico no wrangler deploy", !publicWorker)
  const publicAssetsIgnore = read(root, "public/.assetsignore")
  fail(errors, "public/.assetsignore documenta exclusao de _worker.js", /^_worker\.js$/m.test(publicAssetsIgnore))
  const distAssetsIgnore = read(root, "dist/.assetsignore")
  fail(errors, "dist/.assetsignore impede upload acidental de _worker.js pelo Wrangler", /^_worker\.js$/m.test(distAssetsIgnore))

  const worker = read(root, "src/worker.js")
  fail(errors, "src/worker.js existe para canonicalizacao de host no Cloudflare Workers", Boolean(worker))
  if (worker) {
    fail(errors, "src/worker.js reconhece host raiz drvandui.com.br", /ROOT_HOST\s*=\s*["']drvandui\.com\.br["']/i.test(worker))
    fail(errors, "src/worker.js define host canonico www.drvandui.com.br", /CANONICAL_HOST\s*=\s*["']www\.drvandui\.com\.br["']/i.test(worker))
    fail(errors, "src/worker.js emite redirect 301 para host canonico", /Response\.redirect\([\s\S]*,\s*301\)/i.test(worker))
    fail(errors, "src/worker.js canonicaliza /eventos antes dos assets", /pathname\s*===\s*["']\/eventos["'][\s\S]*startsWith\(["']\/eventos\/["']\)/i.test(worker))
    fail(errors, "src/worker.js canonicaliza alias /pressao-alta", /["']\/pressao-alta["']\s*,\s*["']\/tratamento-hipertensao["']/i.test(worker))
    fail(errors, "src/worker.js canonicaliza alias /dor-no-peito", /["']\/dor-no-peito["']\s*,\s*["']\/dor-no-peito-quando-procurar-ajuda["']/i.test(worker))
    fail(errors, "src/worker.js remove query string de URLs canonicas antigas", /url\.search\s*=\s*["']["']/i.test(worker))
    fail(errors, "src/worker.js preserva entrega de assets pelo Cloudflare", /env\.ASSETS\.fetch\(request\)/i.test(worker))
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

  const appSource = read(root, "src/App.tsx")
  if (appSource) {
    ;[
      "click_whatsapp",
      "click_agendamento",
      "click_phone",
      "click_email",
      "click_maps",
      "submit_contact_form",
    ].forEach((eventName) => fail(errors, `App rastreia evento de conversão ${eventName}`, appSource.includes(eventName)))
  }

  const authoritySources = [
    read(root, "src/pages/Home.tsx"),
    read(root, "src/sections/Navigation.tsx"),
    read(root, "src/sections/Footer.tsx"),
  ].filter(Boolean).join("\n")
  if (authoritySources) {
    fail(errors, "Home/header/footer exibem CRM-SP 210328", /CRM-SP\s*210328/i.test(authoritySources))
    fail(errors, "Home/header/footer exibem RQE 146567", /RQE(?:\s+Cardiologia)?\s*146567/i.test(authoritySources))
    fail(errors, "Home reforça formação completa", /Dante Pazzanese[\s\S]*Hospital Ipiranga[\s\S]*UFTM/i.test(authoritySources))
    fail(errors, "Home possui seção Formação e Experiência", /Formação e Experiência/i.test(authoritySources))
    fail(errors, "Home detalha UFTM, Hospital Ipiranga e Instituto Dante Pazzanese", /UFTM[\s\S]*Hospital Ipiranga[\s\S]*Instituto Dante Pazzanese/i.test(authoritySources))
    fail(errors, "Home apresenta Dr. Vandui como Médico Cardiologista com CRM e RQE", /Médico Cardiologista[\s\S]{0,120}CRM-SP\s*210328[\s\S]{0,120}RQE Cardiologia\s*146567/i.test(authoritySources))
    fail(errors, "Site possui página dedicada de perfil médico do Dr. Vandui", /dr-vandui-cardiologista/i.test(read(root, "src/data/seoLandingPages.ts") ?? ""))
    fail(errors, "Home possui bloco de perguntas rápidas AEO", /Perguntas rápidas[\s\S]*Respostas diretas sobre cardiologia/i.test(authoritySources))
    ;[
      "Quando devo procurar um cardiologista?",
      "Cardiologista trata hipertensão?",
      "O que é prevenção cardiovascular?",
    ].forEach((question) => {
      fail(errors, `Home responde AEO: ${question}`, authoritySources.includes(question))
    })
    fail(errors, "Home possui hub de links internos SEO", /Encontre a consulta certa[\s\S]*Páginas por intenção de busca/i.test(authoritySources))
    SEO_PRIORITY_INTERNAL_LINK_PATHS.forEach((route) => {
      fail(errors, `Home linka rota estratégica ${route}`, authoritySources.includes(route))
    })
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
    fail(errors, "index.html (build) consolida Physician com @id estavel", /"@id"\s*:\s*"https:\/\/www\.drvandui\.com\.br\/#physician"/i.test(indexHtml))
    fail(errors, "index.html (build) usa canonical home como url do Physician", /"url"\s*:\s*"https:\/\/www\.drvandui\.com\.br\/"/i.test(indexHtml))
    fail(errors, "index.html (build) conecta MedicalBusiness ao Physician", /"employee"\s*:\s*\{[\s\S]{0,160}"@id"\s*:\s*"https:\/\/www\.drvandui\.com\.br\/#physician"/i.test(indexHtml))
    fail(errors, "index.html (build) inclui hasCredential no Physician", /"hasCredential"\s*:\s*\[/i.test(indexHtml))
    fail(errors, "index.html (build) marca CRM-SP 210328 como credential", /"hasCredential"[\s\S]*CRM-SP 210328/i.test(indexHtml))
    fail(errors, "index.html (build) marca RQE Cardiologia 146567 como credential", /"hasCredential"[\s\S]*RQE Cardiologia 146567/i.test(indexHtml))
    fail(errors, "index.html (build) inclui knowsAbout no Physician", /"knowsAbout"\s*:\s*\[[\s\S]*Cardiologia[\s\S]*Prevenção cardiovascular/i.test(indexHtml))
    fail(errors, "index.html (build) explicita CRM-SP 210328", /CRM-SP[\s\S]{0,80}210328/i.test(indexHtml))
    fail(errors, "index.html (build) explicita RQE Cardiologia 146567", /RQE Cardiologia[\s\S]{0,80}146567/i.test(indexHtml))
    fail(errors, "index.html (build) explicita formação UFTM, Hospital Ipiranga e Dante Pazzanese", /UFTM[\s\S]*Hospital Ipiranga[\s\S]*Dante Pazzanese/i.test(indexHtml))
    fail(errors, "index.html (build) inclui alumniOf no JSON-LD Physician", /"alumniOf"\s*:/i.test(indexHtml))
    fail(errors, "index.html (build) inclui JSON-LD FAQPage da home", hasJsonLdType(indexHtml, "FAQPage"))
    ;[
      "Quando devo procurar um cardiologista?",
      "Cardiologista trata hipertensão?",
      "O que é prevenção cardiovascular?",
    ].forEach((question) => {
      fail(errors, `index.html (build) expõe resposta AEO: ${question}`, indexHtml.includes(question))
    })
    fail(errors, "index.html (build) inclui fallback noscript crawlável", /<noscript>[\s\S]*<\/noscript>/i.test(indexHtml))
    SEO_PRIORITY_INTERNAL_LINK_PATHS.forEach((route) => {
      fail(errors, `index.html noscript linka rota estratégica ${route}`, new RegExp(`<a\\s+href=["']${escapeRegExp(route)}["']`, "i").test(indexHtml))
    })
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
  fail(errors, "Build publica dist/.assetsignore para bloquear _worker.js", /^_worker\.js$/m.test(read(root, "dist/.assetsignore")))

  for (const route of SEO_LANDING_PATHS) {
    const file = `dist/${route.slice(1)}/index.html`
    const html = read(root, file)
    if (!html) {
      continue
    }

    fail(errors, `${route}: inclui JSON-LD Physician`, hasJsonLdType(html, "Physician"))
    fail(errors, `${route}: consolida Physician com @id estavel`, /"@id"\s*:\s*"https:\/\/www\.drvandui\.com\.br\/#physician"/i.test(html))
    fail(errors, `${route}: inclui hasCredential no Physician`, /"hasCredential"\s*:\s*\[/i.test(html))
    fail(errors, `${route}: inclui knowsAbout no Physician`, /"knowsAbout"\s*:\s*\[/i.test(html))
    fail(errors, `${route}: inclui JSON-LD BreadcrumbList`, hasJsonLdType(html, "BreadcrumbList"))
    fail(errors, `${route}: inclui JSON-LD FAQPage`, hasJsonLdType(html, "FAQPage"))
    fail(errors, `${route}: explicita CRM-SP 210328`, /CRM-SP[\s\S]{0,80}210328/i.test(html))
    fail(errors, `${route}: explicita RQE Cardiologia 146567`, /RQE Cardiologia[\s\S]{0,80}146567/i.test(html))
    fail(errors, `${route}: explicita formação médica no HTML`, /UFTM[\s\S]*Hospital Ipiranga[\s\S]*Dante Pazzanese/i.test(html))

    if (SEO_LOCAL_PATHS.includes(route)) {
      fail(errors, `${route}: inclui JSON-LD MedicalBusiness`, hasJsonLdType(html, "MedicalBusiness"))
      fail(errors, `${route}: schema local inclui hasMap`, /"hasMap"\s*:\s*"https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=/i.test(html))
      fail(errors, `${route}: schema local inclui areaServed`, /"areaServed"\s*:/i.test(html))
      fail(errors, `${route}: schema local conecta MedicalBusiness ao Physician`, /"employee"\s*:\s*\{[\s\S]{0,160}"@id"\s*:\s*"https:\/\/www\.drvandui\.com\.br\/#physician"/i.test(html))
    }

    if (SEO_PROFILE_PATHS.includes(route) || SEO_SERVICE_PATHS.includes(route) || SEO_ANSWER_PATHS.includes(route)) {
      fail(errors, `${route}: inclui JSON-LD Article`, hasJsonLdType(html, "Article"))
      fail(errors, `${route}: Article identifica Dr. Vandui como autor`, /"author"\s*:\s*\{[\s\S]{0,160}"@id"\s*:\s*"https:\/\/www\.drvandui\.com\.br\/#physician"/i.test(html))
      fail(errors, `${route}: Article identifica Dr. Vandui como revisor medico`, /"reviewedBy"\s*:\s*\{[\s\S]{0,160}"@id"\s*:\s*"https:\/\/www\.drvandui\.com\.br\/#physician"/i.test(html))
    }
  }

  const jsAssetInfo = checkJsAssets(root)
  fail(errors, `Nenhum asset JS de build acima de 500KB no bundle (atual: ${jsAssetInfo?.heavy?.length ?? 0})`, jsAssetInfo && jsAssetInfo.heavy.length === 0)
  fail(errors, "bundle contém evento de sinal para prerender", containsPrerenderEvent(root))

  const seoLandingSource = read(root, "src/pages/SEOLandingPage.tsx")
  if (seoLandingSource) {
    fail(errors, "Páginas locais possuem CTA Abrir no Google Maps", /Abrir no Google Maps/i.test(seoLandingSource))
    fail(errors, "Páginas locais usam URL rastreável do Google Maps", /google\.com\/maps\/search\/\?api=1&query=/i.test(seoLandingSource))
    fail(errors, "Páginas locais anotam clique de mapa para conversão", /data-event=["']click_maps["']/i.test(seoLandingSource))
    fail(errors, "Páginas locais carregam mapa incorporado com lazy loading", /<iframe[\s\S]*loading=["']lazy["']/i.test(seoLandingSource))
  }

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
