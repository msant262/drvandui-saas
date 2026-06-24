import { Link, Navigate, useLocation } from 'react-router-dom'
import { ArrowRight, CalendarDays, CheckCircle2, MapPin, MessageCircle, Phone, ShieldCheck, Stethoscope } from 'lucide-react'

import { JsonLdSet } from '@/components/seo/JsonLd'
import {
  getSeoLandingPageByPath,
  getSeoLandingPageBySlug,
  seoLandingPages,
  SITE_BASE_URL,
  type SeoLandingPage,
} from '@/data/seoLandingPages'
import { usePageSEO } from '@/hooks/usePageSEO'

function whatsappHref(page: SeoLandingPage) {
  return `https://wa.me/5511976170971?text=${encodeURIComponent(page.whatsappText)}`
}

function mapsHref(page: SeoLandingPage) {
  if (!page.location) {
    return ''
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(page.location.mapQuery)}`
}

const PHYSICIAN_ENTITY_ID = `${SITE_BASE_URL}/#physician`
const MEDICAL_PRACTICE_ENTITY_ID = `${SITE_BASE_URL}/#medical-practice`
const CONTENT_LAST_MODIFIED = '2026-06-24'
const ONELIV_HREF = 'https://oneliv.com.br/profissional/vandui-santos'

function buildSchemas(page: SeoLandingPage) {
  const url = `${SITE_BASE_URL}/${page.slug}`
  const mapUrl = page.location ? mapsHref(page) : null
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.h1, item: url },
    ],
  }

  const physician = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': PHYSICIAN_ENTITY_ID,
    name: 'Dr. Vandui da Silva dos Santos',
    url: `${SITE_BASE_URL}/`,
    mainEntityOfPage: `${SITE_BASE_URL}/`,
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
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'CRM-SP 210328',
        credentialCategory: 'Registro profissional médico',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Conselho Regional de Medicina do Estado de São Paulo',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'RQE Cardiologia 146567',
        credentialCategory: 'Registro de Qualificação de Especialista em Cardiologia',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Conselho Regional de Medicina do Estado de São Paulo',
        },
      },
    ],
    telephone: '+55-11-97617-0971',
    email: 'contato@drvandui.com.br',
    medicalSpecialty: ['Cardiology', 'InternalMedicine'],
    knowsAbout: [
      'Cardiologia',
      'Prevenção cardiovascular',
      'Clínica médica',
      'Hipertensão arterial',
      'Arritmias e palpitações',
      'Check-up cardiológico',
      'Risco cirúrgico cardiológico',
    ],
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
      ONELIV_HREF,
      'https://instagram.com/vanduisantos.cardio',
      'https://www.linkedin.com/in/vandui-santos-181225137/',
    ],
  }

  const medicalPractice = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': MEDICAL_PRACTICE_ENTITY_ID,
    name: 'Dr. Vandui — Cardiologista',
    url: `${SITE_BASE_URL}/`,
    image: `${SITE_BASE_URL}/hero-doctor.jpg`,
    telephone: '+55-11-97617-0971',
    email: 'contato@drvandui.com.br',
    priceRange: '$$',
    medicalSpecialty: ['Cardiology', 'InternalMedicine'],
    areaServed: ['Santos, SP', 'Santo André, SP', 'Vila Mariana, São Paulo, SP'],
    employee: {
      '@type': 'Physician',
      '@id': PHYSICIAN_ENTITY_ID,
      name: 'Dr. Vandui da Silva dos Santos',
    },
    sameAs: [
      ONELIV_HREF,
      'https://instagram.com/vanduisantos.cardio',
      'https://www.linkedin.com/in/vandui-santos-181225137/',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_BASE_URL}/#website`,
    name: 'Dr. Vandui — Cardiologista',
    url: `${SITE_BASE_URL}/`,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Physician',
      '@id': PHYSICIAN_ENTITY_ID,
      name: 'Dr. Vandui da Silva dos Santos',
    },
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PHYSICIAN_ENTITY_ID,
    name: 'Dr. Vandui da Silva dos Santos',
    honorificPrefix: 'Dr.',
    jobTitle: 'Médico Cardiologista',
    url: `${SITE_BASE_URL}/dr-vandui-cardiologista`,
    image: `${SITE_BASE_URL}/hero-doctor.jpg`,
    worksFor: {
      '@type': 'MedicalBusiness',
      '@id': MEDICAL_PRACTICE_ENTITY_ID,
      name: 'Dr. Vandui — Cardiologista',
    },
    sameAs: [
      ONELIV_HREF,
      'https://instagram.com/vanduisantos.cardio',
      'https://www.linkedin.com/in/vandui-santos-181225137/',
    ],
  }

  const faq = {
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
  }

  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.h1,
    headline: page.h1,
    description: page.description,
    inLanguage: 'pt-BR',
    datePublished: CONTENT_LAST_MODIFIED,
    dateModified: CONTENT_LAST_MODIFIED,
    lastReviewed: CONTENT_LAST_MODIFIED,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_BASE_URL}/#website`,
      name: 'Dr. Vandui — Cardiologista',
    },
    author: {
      '@type': 'Physician',
      '@id': PHYSICIAN_ENTITY_ID,
      name: 'Dr. Vandui da Silva dos Santos',
    },
    reviewedBy: {
      '@type': 'Physician',
      '@id': PHYSICIAN_ENTITY_ID,
      name: 'Dr. Vandui da Silva dos Santos',
    },
    publisher: {
      '@type': 'MedicalBusiness',
      '@id': MEDICAL_PRACTICE_ENTITY_ID,
      name: 'Dr. Vandui — Cardiologista',
    },
    about: {
      '@type': 'MedicalCondition',
      name: page.h1,
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Pacientes adultos',
    },
  }

  const localBusiness = page.location
    ? {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: `${page.h1} — Dr. Vandui`,
        url,
        telephone: '+55-11-97617-0971',
        priceRange: '$$',
        medicalSpecialty: 'Cardiology',
        hasMap: mapUrl,
        areaServed: page.location.region,
        employee: {
          '@type': 'Physician',
          '@id': PHYSICIAN_ENTITY_ID,
          name: 'Dr. Vandui da Silva dos Santos',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: page.location.address,
          addressLocality: page.location.name === 'Vila Mariana' ? 'São Paulo' : page.location.name,
          addressRegion: 'SP',
          postalCode: page.location.postalCode,
          addressCountry: 'BR',
        },
      }
    : null

  const article =
    page.kind !== 'local'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: page.h1,
          description: page.description,
          datePublished: CONTENT_LAST_MODIFIED,
          dateModified: CONTENT_LAST_MODIFIED,
          lastReviewed: CONTENT_LAST_MODIFIED,
          author: {
            '@type': 'Physician',
            '@id': PHYSICIAN_ENTITY_ID,
            name: 'Dr. Vandui da Silva dos Santos',
          },
          reviewedBy: {
            '@type': 'Physician',
            '@id': PHYSICIAN_ENTITY_ID,
            name: 'Dr. Vandui da Silva dos Santos',
          },
          about: {
            '@type': 'Physician',
            '@id': PHYSICIAN_ENTITY_ID,
            name: 'Dr. Vandui da Silva dos Santos',
          },
          publisher: {
            '@type': 'MedicalBusiness',
            '@id': MEDICAL_PRACTICE_ENTITY_ID,
            name: 'Dr. Vandui — Cardiologista',
          },
          mainEntityOfPage: url,
        }
      : null

  const profilePage =
    page.kind === 'profile'
      ? {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          name: page.h1,
          url,
          datePublished: CONTENT_LAST_MODIFIED,
          dateModified: CONTENT_LAST_MODIFIED,
          mainEntity: {
            '@type': 'Physician',
            '@id': PHYSICIAN_ENTITY_ID,
            name: 'Dr. Vandui da Silva dos Santos',
          },
          about: {
            '@type': 'Physician',
            '@id': PHYSICIAN_ENTITY_ID,
            name: 'Dr. Vandui da Silva dos Santos',
          },
        }
      : null

  return [
    { id: `schema-${page.slug}-website`, data: website },
    { id: `schema-${page.slug}-person`, data: person },
    { id: `schema-${page.slug}-breadcrumb`, data: breadcrumb },
    { id: `schema-${page.slug}-medical-web-page`, data: medicalWebPage },
    { id: `schema-${page.slug}-physician`, data: physician },
    { id: `schema-${page.slug}-medical-practice`, data: medicalPractice },
    { id: `schema-${page.slug}-faq`, data: faq },
    ...(localBusiness ? [{ id: `schema-${page.slug}-medical-business`, data: localBusiness }] : []),
    ...(article ? [{ id: `schema-${page.slug}-article`, data: article }] : []),
    ...(profilePage ? [{ id: `schema-${page.slug}-profile-page`, data: profilePage }] : []),
  ]
}

export function SEOLandingPage() {
  const location = useLocation()
  const matchedPage = getSeoLandingPageByPath(location.pathname)
  const page = matchedPage ?? seoLandingPages[0]!
  const isMissingPage = !matchedPage

  usePageSEO({
    title: page.title,
    description: page.description,
    canonical: `/${page.slug}`,
    keywords: page.keywords,
    ogType: page.kind === 'local' ? 'website' : 'article',
  })

  const relatedPages = page.relatedSlugs
    .map((slug) => getSeoLandingPageBySlug(slug))
    .filter((item): item is SeoLandingPage => Boolean(item))
  const localMapHref = mapsHref(page)
  const kindLabel =
    page.kind === 'local'
      ? 'Página local'
      : page.kind === 'profile'
        ? 'Perfil médico'
        : page.kind === 'service'
          ? 'Serviço cardiológico'
          : 'Resposta médica objetiva'
  const primaryAnswers = page.faqs.slice(0, 3)
  const primarySections = page.sections.slice(0, 3)
  const secondarySections = page.sections.slice(3)

  if (isMissingPage) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <JsonLdSet scripts={buildSchemas(page)} />
      <main className="seo-shell overflow-hidden pt-20">
        <section className="seo-hero text-white">
          <div className="seo-hero-grid" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="section-padding relative py-16 sm:py-20 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div className="max-w-4xl">
                <div className="seo-kicker-dark">
                  <Stethoscope className="h-4 w-4" />
                  {kindLabel}
                  <span className="h-1 w-1 rounded-full bg-white/70" />
                  {page.eyebrow}
                </div>

                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-title-contrast sm:text-5xl lg:text-6xl">
                  {page.h1}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
                  {page.intro}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={ONELIV_HREF}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    data-event="click_agendamento"
                    data-page={page.slug}
                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-5 text-lg font-bold text-[var(--color-teal)] shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
                  >
                    <CalendarDays className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    Agendar Consulta
                  </a>
                  <a
                    href={whatsappHref(page)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="click_whatsapp"
                    data-page={page.slug}
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-semibold text-white shadow-[0_0_40px_rgba(37,211,102,0.25)] transition-all hover:bg-[#1ebe57] hover:shadow-[0_0_60px_rgba(37,211,102,0.4)]"
                  >
                    <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    Dúvidas
                  </a>
                </div>

                <div className="mt-8 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
                  {['CRM-SP 210328', 'RQE Cardiologia 146567', 'Revisado em 24/06/2026'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <div className="seo-card">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-emerald)]">Atendimento com critério médico</p>
                      <h2 className="mt-2 text-2xl font-bold leading-tight text-[var(--color-teal)]">
                        Informação clara, sinais de alerta e próximo passo.
                      </h2>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-mint)]">
                      <ShieldCheck className="h-6 w-6 text-[var(--color-emerald)]" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {page.highlights.map((item) => (
                      <div key={item} className="seo-token-card flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-emerald)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {page.location && (
                    <div className="seo-soft-panel mt-5">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-emerald)]" />
                        <div>
                          <h2 className="font-bold text-[var(--color-teal)]">{page.location.name}</h2>
                          <p className="seo-copy mt-1 text-sm leading-relaxed">{page.location.address}</p>
                          <p className="seo-copy text-sm leading-relaxed">{page.location.region}</p>
                          <p className="seo-copy text-sm leading-relaxed">CEP {page.location.postalCode}</p>
                        </div>
                      </div>
                      <a
                        href={localMapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-event="click_maps"
                        data-page={page.slug}
                        className="btn-primary mt-4 inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm"
                      >
                        Abrir no Google Maps
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-8 pb-12">
          <div className="section-padding">
            <div className="grid gap-4 md:grid-cols-3">
              {primaryAnswers.map((faq, index) => (
                <article key={faq.question} className="seo-card card-hover">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-mint)] text-sm font-bold text-[var(--color-teal)]">
                    0{index + 1}
                  </div>
                  <h2 className="text-lg font-bold leading-snug text-[var(--color-teal)]">{faq.question}</h2>
                  <p className="seo-copy mt-3 text-sm leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="section-padding">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-7">
                <div className="max-w-3xl">
                  <span className="seo-kicker">Conteúdo médico estruturado</span>
                  <h2 className="seo-section-title mt-4">
                    Informação útil antes de agendar
                  </h2>
                  <p className="seo-copy mt-4 text-base leading-relaxed">
                    Orientações diretas para entender quando procurar atendimento, o que observar e como chegar à consulta com dados que ajudam a decisão médica.
                  </p>
                </div>

                {primarySections.map((section, index) => (
                  <article key={section.heading} className="seo-card-lg card-hover">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-teal text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold leading-tight text-[var(--color-teal)]">{section.heading}</h2>
                        <p className="seo-copy mt-4 text-base leading-relaxed">{section.body}</p>
                        {section.bullets && (
                          <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {section.bullets.map((bullet) => (
                              <div key={bullet} className="seo-token-card flex items-start gap-3 bg-white">
                                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-emerald)]" />
                                {bullet}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}

                {secondarySections.length > 0 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {secondarySections.map((section) => (
                      <article key={section.heading} className="seo-card">
                        <h2 className="text-xl font-bold text-[var(--color-teal)]">{section.heading}</h2>
                        <p className="seo-copy mt-3 text-sm leading-relaxed">{section.body}</p>
                        {section.bullets && (
                          <div className="mt-4 space-y-2">
                            {section.bullets.map((bullet) => (
                              <p key={bullet} className="seo-token-card">
                                {bullet}
                              </p>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}

                <section className="seo-dark-panel">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-title-contrast">Perguntas frequentes</span>
                  <h2 className="mt-3 text-3xl font-bold text-title-contrast">Respostas diretas para pacientes</h2>
                  <div className="mt-6 divide-y divide-white/10">
                    {page.faqs.map((faq) => (
                      <article key={faq.question} className="py-5 first:pt-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
                <div className="seo-card">
                  <h2 className="text-xl font-bold text-[var(--color-teal)]">Autoridade médica</h2>
                  <div className="seo-copy mt-5 space-y-3 text-sm leading-relaxed">
                    <p><strong className="text-[var(--color-teal)]">Dr. Vandui da Silva dos Santos</strong></p>
                    <p>Médico Cardiologista</p>
                    <p><strong>CRM-SP 210328</strong></p>
                    <p><strong>RQE Cardiologia 146567</strong></p>
                    <p>Formação pela UFTM, Hospital Ipiranga e Instituto Dante Pazzanese de Cardiologia.</p>
                    <p>Revisão médica: conteúdo revisado pelo Dr. Vandui da Silva dos Santos. Última atualização: 24 de junho de 2026.</p>
                    <p className="seo-token-card text-xs">
                      Conteúdo educativo. Sintomas intensos, súbitos ou progressivos devem ser avaliados em serviço de urgência.
                    </p>
                  </div>
                </div>

                <div className="seo-dark-panel">
                  <Phone className="mb-4 h-7 w-7 text-title-contrast" />
                  <h2 className="text-2xl font-bold text-title-contrast">Agendamento</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Envie o motivo da consulta e a cidade de preferência. A equipe retorna com orientação de agenda.
                  </p>
                  <a
                    href={ONELIV_HREF}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    data-event="click_agendamento"
                    data-page={page.slug}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[var(--color-teal)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Agendar Consulta
                  </a>
                  <a
                    href={whatsappHref(page)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="click_whatsapp"
                    data-page={page.slug}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Dúvidas
                  </a>
                </div>

                {relatedPages.length > 0 && (
                  <div className="seo-card">
                    <h2 className="text-lg font-bold text-[var(--color-teal)]">Próximas páginas úteis</h2>
                    <div className="mt-4 space-y-2">
                      {relatedPages.map((related) => (
                        <Link
                          key={related.slug}
                          to={`/${related.slug}`}
                          className="seo-token-card flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <span>{related.h1}</span>
                          <ArrowRight className="h-4 w-4 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
