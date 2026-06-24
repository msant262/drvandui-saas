import { Link, Navigate, useLocation } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, ShieldCheck, Stethoscope } from 'lucide-react'

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
      'https://oneliv.com.br/profissional/vandui-santos',
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
      'https://oneliv.com.br/profissional/vandui-santos',
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
      'https://oneliv.com.br/profissional/vandui-santos',
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

  if (isMissingPage) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <JsonLdSet scripts={buildSchemas(page)} />
      <main className="pt-24 bg-white">
        <section className="relative overflow-hidden bg-gradient-teal py-16 sm:py-20">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
          <div className="section-padding relative">
            <div className="max-w-5xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-title-contrast">
                <Stethoscope className="h-4 w-4" />
                {page.eyebrow}
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-title-contrast sm:text-5xl lg:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref(page)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="click_whatsapp"
                  data-page={page.slug}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-[var(--color-teal)] shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  {page.ctaLabel}
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/25 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Ver unidades
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14" style={{ backgroundColor: 'var(--color-white-blue)' }}>
          <div className="section-padding">
            <div className="grid gap-4 md:grid-cols-3">
              {page.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--color-cyan-light)] bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mb-3 h-6 w-6 text-[var(--color-emerald)]" />
                  <p className="text-sm font-semibold leading-relaxed text-[var(--color-teal)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="section-padding">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-emerald)]">
                AEO / respostas objetivas
              </span>
              <h2 className="mt-3 text-2xl font-bold text-[var(--color-teal)] sm:text-3xl">
                Respostas diretas para pacientes
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#555]">
                Blocos curtos para ajudar pacientes, Google e mecanismos de IA a entenderem rapidamente a indicação da página.
              </p>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {page.faqs.slice(0, 3).map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-gray-100 bg-[#f8fcfc] p-5">
                  <h3 className="text-base font-bold text-[var(--color-teal)]">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#555]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="section-padding">
            <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
              <div className="space-y-10">
                {page.sections.map((section) => (
                  <section key={section.heading} className="border-b border-gray-100 pb-10 last:border-b-0">
                    <h2 className="text-2xl font-bold text-[var(--color-teal)] sm:text-3xl">{section.heading}</h2>
                    <p className="mt-4 text-base leading-relaxed text-[#555]">{section.body}</p>
                    {section.bullets && (
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3 rounded-xl bg-[#f0f9fa] p-4 text-sm font-semibold text-[var(--color-teal)]">
                            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-emerald)]" />
                            {bullet}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}

                <section>
                  <h2 className="text-2xl font-bold text-[var(--color-teal)] sm:text-3xl">Perguntas frequentes</h2>
                  <div className="mt-5 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white">
                    {page.faqs.map((faq) => (
                      <div key={faq.question} className="p-5">
                        <h3 className="font-bold text-[var(--color-teal)]">{faq.question}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#555]">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-5">
                <div className="rounded-3xl border border-[var(--color-cyan-light)] bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-[var(--color-teal)]">Autoridade médica</h2>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#555]">
                    <p>
                      <strong className="text-[var(--color-teal)]">Dr. Vandui da Silva dos Santos</strong>
                    </p>
                    <p>Médico Cardiologista</p>
                    <p>
                      <strong>CRM-SP 210328</strong>
                    </p>
                    <p>
                      <strong>RQE Cardiologia 146567</strong>
                    </p>
                    <p>Formação no Instituto Dante Pazzanese de Cardiologia, Hospital Ipiranga e UFTM.</p>
                    <p>
                      Revisão médica: conteúdo revisado pelo Dr. Vandui da Silva dos Santos. Última atualização: 24 de junho de 2026.
                    </p>
                    <a
                      href="https://oneliv.com.br/profissional/vandui-santos"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-event="click_agendamento"
                      data-page={page.slug}
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-cyan-light)] px-3 py-2 text-xs font-bold text-[var(--color-teal)] transition-colors hover:bg-[#f0f9fa]"
                    >
                      Ver agenda e prova social na OneLiv
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <p className="rounded-2xl bg-[#f0f9fa] p-3 text-xs text-[var(--color-teal)]">
                      Conteúdo educativo. Sintomas intensos, súbitos ou progressivos devem ser avaliados em serviço de urgência.
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl bg-[var(--color-teal)] p-6 text-white shadow-xl">
                  <Phone className="mb-4 h-7 w-7 text-emerald-200" />
                  <h2 className="text-xl font-bold text-white">Agendamento</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Envie uma mensagem com a cidade ou motivo da consulta. O atendimento retorna com orientações de agenda.
                  </p>
                  <a
                    href={whatsappHref(page)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="click_whatsapp"
                    data-page={page.slug}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-[var(--color-teal)]"
                  >
                    Chamar no WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {page.location && (
                  <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                    <div className="p-5">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-emerald)]" />
                        <div>
                          <h2 className="font-bold text-[var(--color-teal)]">{page.location.name}</h2>
                          <p className="mt-1 text-sm text-[#555]">{page.location.address}</p>
                          <p className="text-sm text-[#555]">{page.location.region}</p>
                          <p className="text-sm text-[#555]">CEP {page.location.postalCode}</p>
                        </div>
                      </div>
                      <a
                        href={localMapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-event="click_maps"
                        data-page={page.slug}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-cyan-light)] bg-[#f0f9fa] px-4 py-3 text-sm font-bold text-[var(--color-teal)] transition-colors hover:bg-[var(--color-cyan-light)]"
                      >
                        Abrir no Google Maps
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                    <iframe
                      title={`Mapa da unidade ${page.location.name}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(page.location.mapQuery)}&output=embed`}
                      loading="lazy"
                      className="h-64 w-full border-0"
                    />
                  </div>
                )}

                <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h2 className="font-bold text-[var(--color-teal)]">Páginas relacionadas</h2>
                  <div className="mt-4 space-y-2">
                    {relatedPages.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/${related.slug}`}
                        className="flex items-center justify-between rounded-xl bg-[#f0f9fa] px-4 py-3 text-sm font-semibold text-[var(--color-teal)] transition-colors hover:bg-[var(--color-cyan-light)]"
                      >
                        {related.h1}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
