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
  'const CANONICAL_PATH_REDIRECTS = new Map([["/pressao-alta", "/tratamento-hipertensao"], ["/dor-no-peito", "/dor-no-peito-quando-procurar-ajuda"], ["/consulta-com-cardiologista", "/contato"], ["/prevencao-cardiovascular", "/check-up-cardiologico"]])\n\n' +
  "function redirectToCanonical(url, pathname, shouldDeindex = false) {\n" +
  "  url.hostname = CANONICAL_HOST\n" +
  '  url.protocol = "https:"\n' +
  "  url.pathname = pathname\n" +
  '  url.search = ""\n' +
  "  const canonicalUrl = url.toString()\n" +
  "  const headers = {\n" +
  "    Location: canonicalUrl,\n" +
  '    Link: `<${canonicalUrl}>; rel="canonical"`,' + "\n" +
  '    "Cache-Control": "public, max-age=86400",' + "\n" +
  "  }\n" +
  "  if (shouldDeindex) {\n" +
  '    headers["X-Robots-Tag"] = "noindex, follow"\n' +
  "  }\n" +
  "  return new Response(null, {\n" +
  "    status: 301,\n" +
  "    headers,\n" +
  "  })\n" +
  "}\n\n" +
  "function getCanonicalPath(pathname) {\n" +
  '  if (pathname === "/eventos" || pathname.startsWith("/eventos/")) return "/"\n' +
  "  return CANONICAL_PATH_REDIRECTS.get(pathname) ?? pathname\n" +
  "}\n\n" +
  "export default {\n" +
  "  async fetch(request, env) {\n" +
  "    const url = new URL(request.url)\n\n" +
  "    const canonicalPath = getCanonicalPath(url.pathname)\n\n" +
  "    if (url.hostname === ROOT_HOST || canonicalPath !== url.pathname) {\n" +
  "      return redirectToCanonical(url, canonicalPath, canonicalPath !== url.pathname)\n" +
  "    }\n\n" +
  "    return env.ASSETS.fetch(request)\n" +
  "  },\n" +
  "}\n"

function createFixture({ blockAll = false } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "seo-audit-fixture-"))

  const distDir = path.join(root, "dist")
  const assetsDir = path.join(distDir, "assets")
  mkdirSync(assetsDir, { recursive: true })
  writeFileSync(path.join(distDir, ".assetsignore"), "_worker.js\n")
  SEO_ROUTES.filter(({ route }) => route !== "/").forEach(({ route }) => {
    mkdirSync(path.join(distDir, route.slice(1)), { recursive: true })
  })
  mkdirSync(path.join(root, "public"), { recursive: true })
  mkdirSync(path.join(root, "src"), { recursive: true })
  mkdirSync(path.join(root, "src/pages"), { recursive: true })

  const robots = blockAll
    ? `User-agent: *\nDisallow: /\nSitemap: https://www.drvandui.com.br/sitemap.xml\n`
    : `User-agent: *\nAllow: /\nSitemap: https://www.drvandui.com.br/sitemap.xml\n`

  writeFileSync(path.join(root, "public/robots.txt"), robots)
  writeFileSync(
    path.join(root, "public/sitemap.xml"),
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" +
      SEO_ROUTES.map(({ canonical }) => `  <url><loc>${canonical}</loc><lastmod>2026-06-24</lastmod></url>`).join("\n") +
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
      "/colesterol-alto-cardiologista /check-up-cardiologico 301\n" +
      "/pressao-alta /tratamento-hipertensao 301\n" +
      "/consulta-com-cardiologista /contato 301\n" +
      "/colesterol-alto /check-up-cardiologico 301\n" +
      "/prevencao-cardiovascular /check-up-cardiologico 301\n" +
      "/clinica-medica /especialidades 301\n" +
      "/palpitacoes-quando-se-preocupar /palpitacoes-e-arritmias 301\n" +
      "/pressao-alta-quando-procurar-ajuda /tratamento-hipertensao 301\n" +
      "/colesterol-alto-e-risco-cardiaco /check-up-cardiologico 301\n" +
      "/cardiologista-ou-clinico-geral /especialidades 301\n" +
      SEO_ROUTES.filter(({ route }) => route !== "/")
        .map(({ route }) => `${route} ${route}/index.html 200`)
        .join("\n"),
  )
  writeFileSync(
    path.join(root, "public/llms.txt"),
    "# Dr. Vandui\n\n- [Pagina inicial](https://www.drvandui.com.br/)\n- [Perfil do Dr. Vandui](https://www.drvandui.com.br/dr-vandui-cardiologista)\n- [Sitemap XML](https://www.drvandui.com.br/sitemap.xml)\n\n- CRM-SP: 210328\n- RQE Cardiologia: 146567\n\n## Entidade oficial\n\n- Fonte principal: [www.drvandui.com.br](https://www.drvandui.com.br/)\n- A OneLiv funciona como canal auxiliar de agendamento e prova social, nao como substituto do site oficial.\n- URLs antigas ou nao canonicas, como /eventos, devem consolidar autoridade para a pagina inicial oficial.\n\n## Unidades e NAP local\n\n- Av. Ana Costa, 228\n- CEP: 11060-003\n- Av. Portugal, 1285\n- CEP: 09040-011\n- R. Domingos de Morais, 2781\n- CEP: 04035-001\n\n## Respostas rapidas para pacientes\n\n### Quando devo procurar um cardiologista?\n\nVoce deve procurar um cardiologista se tiver dor no peito.\n\n### Cardiologista trata hipertensao?\n\nSim. O cardiologista avalia pressao arterial.\n\n### Dor no peito e sempre problema cardiaco?\n\nNao. Dor no peito pode ter varias causas.\n",
  )
  writeFileSync(path.join(root, "public/.assetsignore"), "_worker.js\n")

  writeFileSync(
    path.join(root, "vite.config.ts"),
      "import { defineConfig } from 'vite'\\n" +
      "const seoLandingPages = []\\n" +
      "const staticRouteFallbacks = []\\n" +
      "const browserPrerenderRoutes = []\\n" +
      "function buildLandingPageStaticContent() { return '<main data-static-seo-route=\"fixture\"><h1>Fixture</h1><h2>Respostas diretas para pacientes</h2><a href=\"https://oneliv.com.br/profissional/vandui-santos\">OneLiv</a></main>' }\\n" +
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
      .map((schemaType) => {
        if (schemaType === "Article") {
          return '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","datePublished":"2026-06-24","dateModified":"2026-06-24","lastReviewed":"2026-06-24","author":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"},"reviewedBy":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"}}</script>'
        }

        if (schemaType === "MedicalBusiness") {
          return '<script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalBusiness","@id":"https://www.drvandui.com.br/#medical-practice","hasMap":"https://www.google.com/maps/search/?api=1&query=fixture","areaServed":"Fixture","address":{"@type":"PostalAddress","postalCode":"11060-003"},"employee":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"}}</script>'
        }

        if (schemaType === "MedicalWebPage") {
          return '<script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalWebPage","lastReviewed":"2026-06-24","isPartOf":{"@type":"WebSite","@id":"https://www.drvandui.com.br/#website"},"author":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"},"reviewedBy":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"}}</script>'
        }

        if (schemaType === "ItemList") {
          return '<script type="application/ld+json">{"@context":"https://schema.org","@type":"ItemList","itemListElement":[{"@type":"ListItem","url":"https://www.drvandui.com.br/cardiologista-em-santos"},{"@type":"ListItem","url":"https://www.drvandui.com.br/check-up-cardiologico"},{"@type":"ListItem","url":"https://www.drvandui.com.br/palpitacoes-quando-se-preocupar"}]}</script>'
        }

        if (schemaType === "ContactPage") {
          return '<script type="application/ld+json">{"@context":"https://schema.org","@type":"ContactPage","contactPoint":{"@type":"ContactPoint","contactType":"Agendamento de consulta cardiológica"}}</script>'
        }

        if (schemaType === "ProfilePage") {
          return '<script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","datePublished":"2026-06-24","dateModified":"2026-06-24","mainEntity":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"}}</script>'
        }

        return `<script type="application/ld+json">{"@context":"https://schema.org","@type":"${schemaType}"}</script>`
      })
      .join("")
    const noscriptLinks = SEO_ROUTES.filter(({ route }) =>
      [
        "/cardiologista-em-santos",
        "/cardiologista-em-santo-andre",
        "/cardiologista-vila-mariana",
        "/dr-vandui-cardiologista",
        "/consulta-com-cardiologista",
        "/check-up-cardiologico",
        "/risco-cirurgico-cardiologico",
        "/tratamento-hipertensao",
        "/palpitacoes-e-arritmias",
        "/dor-no-peito-quando-procurar-ajuda",
        "/colesterol-alto",
        "/prevencao-cardiovascular",
      ].includes(route),
    )
      .map(({ route }) => `<li><a href="${route}">${route}</a></li>`)
      .join("")

    return `<!doctype html><html><head>\n      <meta charset="UTF-8"/>\n      <title>${title}</title>\n      <meta name="robots" content="index,follow"/>\n      <link rel="canonical" href="${canonical}">\n      <meta name="description" content="CRM-SP 210328 e RQE Cardiologia 146567">\n      <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","@id":"https://www.drvandui.com.br/#website","publisher":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"}}</script>\n      <script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","@id":"https://www.drvandui.com.br/#physician","worksFor":{"@type":"MedicalBusiness","@id":"https://www.drvandui.com.br/#medical-practice"}}</script>\n      <script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalWebPage","lastReviewed":"2026-06-24","isPartOf":{"@type":"WebSite","@id":"https://www.drvandui.com.br/#website"},"author":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"},"reviewedBy":{"@type":"Physician","@id":"https://www.drvandui.com.br/#physician"}}</script>\n      <script type="application/ld+json">{"@context":"https://schema.org","@type":"Physician","@id":"https://www.drvandui.com.br/#physician","url":"https://www.drvandui.com.br/","hasCredential":[{"name":"CRM-SP 210328"},{"name":"RQE Cardiologia 146567"}],"knowsAbout":["Cardiologia","Prevenção cardiovascular"],"alumniOf":[{"name":"Universidade Federal do Triângulo Mineiro (UFTM)"},{"name":"Hospital Ipiranga"},{"name":"Instituto Dante Pazzanese de Cardiologia"}]}</script>\n      <script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Quando devo procurar um cardiologista?"},{"@type":"Question","name":"Cardiologista trata hipertensão?"},{"@type":"Question","name":"Dor no peito é sempre problema cardíaco?"}]}</script>\n      ${schemaScripts}\n    </head><body><div id="root"><main data-static-seo-route="fixture"><h1>${title}</h1><h2>Respostas diretas para pacientes</h2><a href="https://oneliv.com.br/profissional/vandui-santos">OneLiv</a></main>CRM-SP 210328 RQE Cardiologia 146567 UFTM Hospital Ipiranga Instituto Dante Pazzanese de Cardiologia Revisão médica: conteúdo revisado pelo Dr. Vandui da Silva dos Santos. Última atualização: 24 de junho de 2026. Sintomas intensos, súbitos ou progressivos devem ser avaliados em serviço de urgência. Quando devo procurar um cardiologista? Cardiologista trata hipertensão? Dor no peito é sempre problema cardíaco?</div><noscript><ul>${noscriptLinks}</ul></noscript></body></html>`
  }

  writeFileSync(path.join(distDir, "index.html"), baseHtml("https://www.drvandui.com.br/", "Home", ["Physician", "MedicalBusiness"]))
  SEO_ROUTES.filter(({ route }) => route !== "/").forEach(({ route, file, canonical }) => {
    const schemaTypes =
      route === "/especialidades"
        ? ["BreadcrumbList"]
        : route === "/contato"
          ? ["FAQPage", "BreadcrumbList", "Physician", "ContactPage", "MedicalBusiness", "ItemList"]
          : route === "/dr-vandui-cardiologista"
            ? ["Physician", "BreadcrumbList", "FAQPage", "Article", "ProfilePage", "ItemList"]
            : [
                "/cardiologista-em-santos",
                "/cardiologista-em-santo-andre",
                "/cardiologista-vila-mariana",
              ].includes(route)
            ? ["Physician", "BreadcrumbList", "FAQPage", "MedicalBusiness", "ItemList"]
            : ["Physician", "BreadcrumbList", "FAQPage", "Article", "ItemList"]

    const html = baseHtml(canonical, route.slice(1), schemaTypes)
    const routeHtml = route === "/contato"
      ? html.replace(
          "</body>",
          "Av. Ana Costa, 228 Av. Portugal, 1285 R. Domingos de Morais, 2781</body>",
        )
      : [
          "/cardiologista-em-santos",
          "/cardiologista-em-santo-andre",
          "/cardiologista-vila-mariana",
        ].includes(route)
        ? html.replace(
            "</head>",
            '<script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalBusiness","hasMap":"https://www.google.com/maps/search/?api=1&query=fixture","areaServed":"Fixture","address":{"@type":"PostalAddress","postalCode":"11060-003"}}</script></head>',
          )
        : html

    writeFileSync(path.join(root, file), routeHtml)
  })
  writeFileSync(
    path.join(root, "src/pages/SEOLandingPage.tsx"),
    '<h2>Respostas diretas para pacientes</h2><a href="https://www.google.com/maps/search/?api=1&query=fixture" data-event="click_maps">Abrir no Google Maps</a><a href="https://oneliv.com.br/profissional/vandui-santos" data-event="click_agendamento">OneLiv</a><iframe loading="lazy"></iframe>',
  )
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
