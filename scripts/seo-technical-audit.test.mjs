import { strict as assert } from "node:assert"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import test from "node:test"

import {
  getTagAttribute,
  hasTag,
  parseRobotsUserAgentBlock,
  wildcardIndexationEnabled,
  hasJsonLdType,
  runSeoChecks,
  SEO_ROUTES,
} from "./seo-technical-audit.mjs"

const root = process.cwd()
const canonicalWorkerSource =
  'const ROOT_HOST = "drvandui.com.br"\n' +
  'const CANONICAL_HOST = "www.drvandui.com.br"\n\n' +
  "export default {\n" +
  "  async fetch(request, env) {\n" +
  "    const url = new URL(request.url)\n\n" +
  "    if (url.hostname === ROOT_HOST) {\n" +
  "      url.hostname = CANONICAL_HOST\n" +
  '      url.protocol = "https:"\n' +
  "      return Response.redirect(url.toString(), 301)\n" +
  "    }\n\n" +
  "    return env.ASSETS.fetch(request)\n" +
  "  },\n" +
  "}\n"

function createFixture({ blockAll = false } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "seo-audit-fixture-"))

  const distDir = path.join(root, "dist")
  const assetsDir = path.join(distDir, "assets")
  mkdirSync(assetsDir, { recursive: true })
  SEO_ROUTES.filter(({ route }) => route !== "/").forEach(({ route }) => {
    mkdirSync(path.join(distDir, route.slice(1)), { recursive: true })
  })
  mkdirSync(path.join(root, "public"), { recursive: true })
  mkdirSync(path.join(root, "src"), { recursive: true })

  const robots = blockAll
    ? `User-agent: *\nDisallow: /\nSitemap: https://www.drvandui.com.br/sitemap.xml\n`
    : `User-agent: *\nAllow: /\nSitemap: https://www.drvandui.com.br/sitemap.xml\n`

  writeFileSync(path.join(root, "public/robots.txt"), robots)
  writeFileSync(
    path.join(root, "public/sitemap.xml"),
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" +
      SEO_ROUTES.map(({ canonical }) => `  <url><loc>${canonical}</loc></url>`).join("\n") +
      "\n</urlset>",
  )
  writeFileSync(
    path.join(root, "public/_headers"),
    "X-Frame-Options: DENY\n" +
      "X-Content-Type-Options: nosniff\n" +
      "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload\n" +
      "Referrer-Policy: strict-origin-when-cross-origin\n" +
      "Permissions-Policy: camera=(), microphone=(), geolocation=()\n" +
      "Cross-Origin-Opener-Policy: same-origin\n" +
      "Cross-Origin-Resource-Policy: same-origin\n" +
      "Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src 'self' 'unsafe-inline'; connect-src 'self'; frame-src https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests\n" +
      "X-Robots-Tag: all\n\n/assets/*\nCache-Control: public, max-age=31536000, immutable\n\n/404.html\nX-Robots-Tag: noindex, nofollow",
  )
  writeFileSync(
    path.join(root, "public/_redirects"),
    "/eventos / 301\n" +
      "/eventos/* / 301\n" +
      "/cardiologista-na-vila-mariana /cardiologista-vila-mariana 301\n" +
      "/avaliacao-de-risco-cirurgico /risco-cirurgico-cardiologico 301\n" +
      "/avaliacao-risco-cirurgico /risco-cirurgico-cardiologico 301\n" +
      "/palpitacoes-arritmia /palpitacoes-e-arritmias 301\n" +
      "/dor-no-peito /dor-no-peito-quando-procurar-ajuda 301\n" +
      "/dor-no-peito-quando-procurar-cardiologista /dor-no-peito-quando-procurar-ajuda 301\n" +
      "/colesterol-alto-cardiologista /colesterol-alto 301\n" +
      "/pressao-alta /tratamento-hipertensao 301\n" +
      SEO_ROUTES.filter(({ route }) => route !== "/")
        .map(({ route }) => `${route} ${route}/index.html 200`)
        .join("\n"),
  )
  writeFileSync(
    path.join(root, "public/llms.txt"),
    "# Dr. Vandui\n\n- [Pagina inicial](https://www.drvandui.com.br/)\n- [Sitemap XML](https://www.drvandui.com.br/sitemap.xml)\n\n- CRM-SP: 210328\n- RQE Cardiologia: 146567\n",
  )
  writeFileSync(path.join(root, "public/.assetsignore"), "_worker.js\n")

  writeFileSync(
    path.join(root, "vite.config.ts"),
      "import { defineConfig } from 'vite'\\n" +
      "const seoLandingPages = []\\n" +
      "const staticRouteFallbacks = []\\n" +
      "const browserPrerenderRoutes = []\\n" +
      "export default defineConfig({\\n" +
      "  plugins: [\\n" +
      "    {\\n" +
      "      name: 'prerender',\\n" +
      "      routes: ['/', '/especialidades', '/contato'],\\n" +
      "    },\\n" +
      "  ],\\n" +
      "})",
  )
  writeFileSync(
    path.join(root, "wrangler.toml"),
    'name = "drvandui-saas"\ncompatibility_date = "2024-01-01"\nmain = "src/worker.js"\n\n[[routes]]\npattern = "www.drvandui.com.br"\ncustom_domain = true\n\n[[routes]]\npattern = "drvandui.com.br"\ncustom_domain = true\n\n[assets]\ndirectory = "./dist"\nbinding = "ASSETS"\nnot_found_handling = "single-page-application"\nrun_worker_first = true\n',
  )
  writeFileSync(path.join(root, "src/worker.js"), canonicalWorkerSource)

  const baseHtml = (canonical, title, schemaTypes) => {
    const normalizedSchemaTypes = Array.isArray(schemaTypes) ? schemaTypes : [schemaTypes]
    const schemaScripts = normalizedSchemaTypes
      .map(
        (schemaType) =>
          `<script type="application/ld+json">{"@context":"https://schema.org","@type":"${schemaType}"}</script>`,
      )
      .join("")

    return `<!doctype html><html><head>\n      <meta charset="UTF-8"/>\n      <title>${title}</title>\n      <meta name="robots" content="index,follow"/>\n      <link rel="canonical" href="${canonical}">\n      <meta name="description" content="CRM-SP 210328 e RQE Cardiologia 146567">\n      <script type="application/ld+json">{"@context":"https://schema.org","@type":"Physician","alumniOf":[{"name":"Universidade Federal do Triângulo Mineiro (UFTM)"},{"name":"Hospital Ipiranga"},{"name":"Instituto Dante Pazzanese de Cardiologia"}]}</script>\n      ${schemaScripts}\n    </head><body>CRM-SP 210328 RQE Cardiologia 146567 UFTM Hospital Ipiranga Instituto Dante Pazzanese de Cardiologia</body></html>`
  }

  writeFileSync(path.join(distDir, "index.html"), baseHtml("https://www.drvandui.com.br/", "Home", ["Physician", "MedicalBusiness"]))
  SEO_ROUTES.filter(({ route }) => route !== "/").forEach(({ route, file, canonical }) => {
    const schemaTypes =
      route === "/especialidades"
        ? ["BreadcrumbList"]
        : route === "/contato"
          ? ["FAQPage", "BreadcrumbList"]
          : [
                "/cardiologista-em-santos",
                "/cardiologista-em-santo-andre",
                "/cardiologista-vila-mariana",
              ].includes(route)
            ? ["Physician", "BreadcrumbList", "FAQPage", "MedicalBusiness"]
            : ["Physician", "BreadcrumbList", "FAQPage", "Article"]

    writeFileSync(path.join(root, file), baseHtml(canonical, route.slice(1), schemaTypes))
  })
  writeFileSync(
    path.join(assetsDir, "app.js"),
    "window.dispatchEvent(new Event('dr-vandui-prerender-ready'));\n/* dr-vandui-prerender-ready */",
  )

  return root
}

function createCleanupFixture({ blockAll } = {}) {
  const fixture = createFixture({ blockAll })
  return {
    fixture,
    cleanup: () => rmSync(fixture, { recursive: true, force: true }),
  }
}

test("getTagAttribute preserva ordem de atributos invertida", () => {
  const tag = '<link href="https://www.drvandui.com.br/" rel="canonical" data-x="1">'
  assert.equal(getTagAttribute(tag, "rel"), "canonical")
  assert.equal(getTagAttribute(tag, "href"), "https://www.drvandui.com.br/")
})

test("hasTag detecta tags com ordem de atributos arbitrária", () => {
  const html = `<html>\n<head>\n  <link rel="canonical" href="https://www.drvandui.com.br/especialidades" />\n  <link href="https://www.drvandui.com.br/" rel="canonical" />\n</head>`

  assert.equal(hasTag(html, "link", { rel: "canonical", href: "https://www.drvandui.com.br/" }), true)
  assert.equal(hasTag(html, "link", { rel: "canonical", href: "https://www.drvandui.com.br/especialidades" }), true)
  assert.equal(hasTag(html, "link", { rel: "canonical", href: "https://www.example.com/" }), false)
})

test("parseRobotsUserAgentBlock entende allow/disallow da raiz", () => {
  const robots = `\nUser-agent: *\nDisallow: /admin\nAllow: /\nUser-agent: GPTBot\nDisallow: /\n`
  const block = parseRobotsUserAgentBlock(robots)
  assert.ok(block)
  assert.ok(block.allow.includes("/"))
  assert.equal(block.disallow.includes("/admin"), true)
})

test("wildcardIndexationEnabled valida permitir raiz sem bloquear /", () => {
  const allow = `\nUser-agent: *\nAllow: /\nDisallow: /admin\n`
  const deny = `\nUser-agent: *\nDisallow: /\nAllow: /blog\n`

  assert.deepEqual(wildcardIndexationEnabled(allow), {
    hasBlock: true,
    allowsRoot: true,
    blocksRoot: false,
  })

  assert.deepEqual(wildcardIndexationEnabled(deny), {
    hasBlock: true,
    allowsRoot: false,
    blocksRoot: true,
  })
})

test("hasJsonLdType encontra marcação estruturada independente de espaçamento", () => {
  const html = `\n<script type="application/ld+json">{\"@context\":\"https://schema.org\",\"@type\":\"Physician\"}</script>`
  assert.equal(hasJsonLdType(html, "Physician"), true)
  assert.equal(hasJsonLdType(html, "MedicalBusiness"), false)
})

test("runSeoChecks roda e retorna estrutura esperada", () => {
  const result = runSeoChecks(root)
  assert.equal(typeof result.passed, "boolean")
  assert.ok(Array.isArray(result.errors))
})

test("runSeoChecks valida projeto válido em fixture isolada", () => {
  const { fixture, cleanup } = createCleanupFixture()

  try {
    const result = runSeoChecks(fixture)
    assert.equal(result.passed, true)
    assert.equal(result.errors.length, 0)
  } finally {
    cleanup()
  }
})

test("runSeoChecks falha quando crawl da raiz está bloqueado", () => {
  const { fixture, cleanup } = createCleanupFixture({ blockAll: true })

  try {
    const result = runSeoChecks(fixture)
    assert.equal(result.passed, false)
    assert.ok(result.errors.length > 0)
    assert.match(result.errors[0], /permite indexação geral da raiz|não bloqueia '\/' para crawler genérico/)
  } finally {
    cleanup()
  }
})
