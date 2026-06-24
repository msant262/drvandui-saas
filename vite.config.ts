import path from "path"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { createRequire } from "module"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import { SITE_BASE_URL, seoLandingPages, type SeoLandingPage } from "./src/data/seoLandingPages"
const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

const Renderer = vitePrerender.PuppeteerRenderer
const enableInspectAttrs = process.env.NODE_ENV !== 'production'
const puppeteerExecutablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ??
  (process.platform === 'darwin' ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : undefined)
const enableBrowserPrerender =
  process.env.SKIP_BROWSER_PRERENDER !== '1' &&
  process.env.CF_PAGES !== '1' &&
  (process.env.ENABLE_BROWSER_PRERENDER === '1' || process.platform === 'darwin' || Boolean(process.env.PUPPETEER_EXECUTABLE_PATH))

type StaticRouteFallback = {
  route: string
  title: string
  description: string
  keywords: string
  canonical: string
  schemas: Array<Record<string, unknown>>
}

function buildLandingPageSchemas(page: SeoLandingPage) {
  const url = `${SITE_BASE_URL}/${page.slug}`
  const schemas: Array<Record<string, unknown>> = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: page.h1, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr. Vandui da Silva dos Santos',
      url,
      image: `${SITE_BASE_URL}/hero-doctor.jpg`,
      description:
        'Médico Cardiologista, CRM-SP 210328 e RQE Cardiologia 146567, com formação pela UFTM, Hospital Ipiranga e Instituto Dante Pazzanese de Cardiologia.',
      identifier: [
        {
          '@type': 'PropertyValue',
          propertyID: 'CRM-SP',
          value: '210328',
        },
        {
          '@type': 'PropertyValue',
          propertyID: 'RQE Cardiologia',
          value: '146567',
        },
      ],
      telephone: '+55-11-97617-0971',
      email: 'contato@drvandui.com.br',
      medicalSpecialty: ['Cardiology', 'InternalMedicine'],
      areaServed: ['Santos, SP', 'Santo André, SP', 'Vila Mariana, São Paulo, SP'],
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Universidade Federal do Triângulo Mineiro (UFTM)',
        },
        {
          '@type': 'Hospital',
          name: 'Hospital Ipiranga',
        },
        {
          '@type': 'Hospital',
          name: 'Instituto Dante Pazzanese de Cardiologia',
        },
      ],
      sameAs: [
        'https://oneliv.com.br/profissional/vandui-santos',
        'https://instagram.com/vanduisantos.cardio',
        'https://www.linkedin.com/in/vandui-santos-181225137/',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ]

  if (page.location) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: `${page.h1} — Dr. Vandui`,
      url,
      telephone: '+55-11-97617-0971',
      priceRange: '$$',
      medicalSpecialty: 'Cardiology',
      address: {
        '@type': 'PostalAddress',
        streetAddress: page.location.address,
        addressLocality: page.location.name === 'Vila Mariana' ? 'São Paulo' : page.location.name,
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    })
  }

  if (page.kind !== 'local') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.description,
      author: {
        '@type': 'Person',
        name: 'Dr. Vandui da Silva dos Santos',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dr. Vandui — Cardiologista',
      },
      mainEntityOfPage: url,
    })
  }

  return schemas
}

const baseStaticRouteFallbacks: StaticRouteFallback[] = [
  {
    route: 'especialidades',
    title: 'Especialidades — Cardiologia e Clínica Médica em Santos, Santo André e Vila Mariana',
    description:
      'Cardiologia, Prevenção Cardiovascular, Clínica Médica e manejo de Doenças Crônicas com Dr. Vandui. Atendimento em Santos, Santo André e Vila Mariana.',
    keywords:
      'cardiologia santos, cardiologia santo andré, cardiologia vila mariana, prevenção cardiovascular, clínica médica, doenças crônicas, hipertensão, holter, MAPA, ecocardiograma',
    canonical: 'https://www.drvandui.com.br/especialidades',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.drvandui.com.br/' },
          { '@type': 'ListItem', position: 2, name: 'Especialidades', item: 'https://www.drvandui.com.br/especialidades' },
        ],
      },
    ],
  },
  {
    route: 'contato',
    title: 'Contato — Cardiologista em Santos, Santo André e Vila Mariana',
    description:
      'Agende sua consulta com o Dr. Vandui — Cardiologia, Prevenção Cardiovascular e Clínica Médica em Santos, Santo André e Vila Mariana. WhatsApp e agendamento online.',
    keywords:
      'agendar consulta cardiologista, cardiologista santos, cardiologista santo andré, cardiologista vila mariana, contato Dr. Vandui',
    canonical: 'https://www.drvandui.com.br/contato',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Como posso agendar uma consulta?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A unidade de Santo André tem agendamento online pela plataforma Oneliv. Para Santos e Vila Mariana, fale pelo WhatsApp (11) 9 7617-0971.',
            },
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.drvandui.com.br/' },
          { '@type': 'ListItem', position: 2, name: 'Contato', item: 'https://www.drvandui.com.br/contato' },
        ],
      },
    ],
  },
]

const seoStaticRouteFallbacks: StaticRouteFallback[] = seoLandingPages.map((page) => ({
  route: page.slug,
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  canonical: `${SITE_BASE_URL}/${page.slug}`,
  schemas: buildLandingPageSchemas(page),
}))

const staticRouteFallbacks = [...baseStaticRouteFallbacks, ...seoStaticRouteFallbacks]
const browserPrerenderRoutes = [
  '/',
  '/especialidades',
  '/especialidades/',
  '/contato',
  '/contato/',
  ...seoLandingPages.flatMap((page) => [`/${page.slug}`, `/${page.slug}/`]),
]

function replaceHeadTag(html: string, pattern: RegExp, replacement: string) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace('</head>', `${replacement}\n</head>`)
}

function applyRouteHead(html: string, route: StaticRouteFallback) {
  const schemaMarkup = route.schemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join('\n')

  let updated = html
  updated = replaceHeadTag(updated, /<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`)
  updated = replaceHeadTag(
    updated,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`,
  )
  updated = replaceHeadTag(
    updated,
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="keywords" content="${route.keywords}" />`,
  )
  updated = replaceHeadTag(
    updated,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${route.canonical}" />`,
  )
  updated = replaceHeadTag(
    updated,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${route.canonical}" />`,
  )
  updated = replaceHeadTag(
    updated,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`,
  )
  updated = replaceHeadTag(
    updated,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`,
  )
  updated = replaceHeadTag(
    updated,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`,
  )
  updated = replaceHeadTag(
    updated,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`,
  )

  return updated.replace('</head>', `${schemaMarkup}\n</head>`)
}

function staticRouteFallbackPlugin() {
  return {
    name: 'static-route-fallbacks',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(distDir, 'index.html')

      if (!existsSync(indexPath)) {
        return
      }

      const indexHtml = readFileSync(indexPath, 'utf8')

      for (const route of staticRouteFallbacks) {
        const outputDir = path.join(distDir, route.route)
        const outputPath = path.join(outputDir, 'index.html')

        if (existsSync(outputPath)) {
          continue
        }

        mkdirSync(outputDir, { recursive: true })
        writeFileSync(outputPath, applyRouteHead(indexHtml, route))
      }
    },
  }
}

const browserPrerenderPlugin = enableBrowserPrerender
  ? vitePrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: browserPrerenderRoutes,
      renderer: new Renderer({
        renderAfterDocumentEvent: 'dr-vandui-prerender-ready',
        skipThirdPartyRequests: true,
        ...(puppeteerExecutablePath ? { executablePath: puppeteerExecutablePath } : {}),
      }),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    })
  : null

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    enableInspectAttrs && inspectAttr(),
    react(),
    browserPrerenderPlugin,
    staticRouteFallbackPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined
          }

          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion"
          }

          if (id.includes("node_modules/recharts") || id.includes("node_modules/react-day-picker")) {
            return "charts-date"
          }

          if (
            id.includes("node_modules/lucide-react") ||
            id.includes("node_modules/@radix-ui") ||
            id.includes("node_modules/@floating-ui")
          ) {
            return "ui-kit"
          }

          return "vendor"
        },
      },
    },
  },
});
