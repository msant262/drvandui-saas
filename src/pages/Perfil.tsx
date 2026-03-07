import { motion } from 'framer-motion';
import { usePageSEO } from '@/hooks/usePageSEO';
import {
  GraduationCap,
  Briefcase,
  Award,
  Stethoscope,
  Calendar,
  MapPin,
  CheckCircle2,
  Heart,
  Star,
  BookOpen,
  Trophy,
} from 'lucide-react';

const education = [
  {
    degree: 'Residência Médica em Cardiologia',
    institution: 'Instituto Dante Pazzanese de Cardiologia',
    period: '2024 - 2026',
    description:
      'Especialização em cardiologia clínica e intervencionista em uma das mais renomadas instituições cardiológicas do Brasil.',
    icon: Heart,
  },
  {
    degree: 'Residência Médica em Clínica Médica',
    institution: 'Hospital Ipiranga - UGA II',
    period: '2022 - 2024',
    description:
      'Formação em clínica médica com ênfase em emergências e cuidados intensivos.',
    icon: Stethoscope,
  },
  {
    degree: 'Graduação em Medicina',
    institution: 'Universidade Federal do Triângulo Mineiro (UFTM)',
    period: '2014 - 2020',
    description:
      'Formação médica completa com ênfase em medicina interna e cardiologia. Recebi diversas premiações e publiquei artigos durante o curso.',
    icon: GraduationCap,
  },
];

const experience = [
  {
    role: 'Médico Plantonista UTI',
    company: 'Hospital Maternidade Christovão da Gama',
    period: '2024 - Atual',
    description:
      'Atuação em unidade de terapia intensiva, manejo de pacientes críticos e procedimentos invasivos.',
  },
  {
    role: 'Médico Plantonista PSA',
    company: 'Hospital Maternidade Christovão da Gama',
    period: '2023 - 2024',
    description:
      'Atendimento em pronto-socorro adulto, gestão de emergências médicas e cardiológicas.',
  },
  {
    role: 'Médico Plantonista PSA',
    company: 'Hospital São Camilo Unidade Ipiranga',
    period: '2023 - 2024',
    description:
      'Pronto-atendimento em hospital de referência na região do Ipiranga.',
  },
  {
    role: 'Médico Plantonista Emergência',
    company: 'Centro Hospitalar Municipal de Santo André (CHM)',
    period: '2020 - 2023',
    description:
      'Atendimento em emergência médica, internação e regulação (NIR).',
  },
  {
    role: 'Médico Plantonista UTI',
    company: 'Hospital Anchieta - SBC',
    period: '2021 - 2023',
    description:
      'Unidade de terapia intensiva com foco em pacientes críticos.',
  },
  {
    role: 'Médico Visitador',
    company: 'Hospital Anchieta - SBC',
    period: '2020 - 2022',
    description: 'Acompanhamento de pacientes internados em enfermaria.',
  },
  {
    role: 'Médico Plantonista UTI',
    company: 'Hospital de Urgencias - SBC',
    period: '2021',
    description: 'UTI de hospital de urgências.',
  },
  {
    role: 'Médico Plantonista',
    company: 'Unidades de Pronto Atendimento (UPA) - ABC',
    period: '2020 - 2022',
    description: 'Atendimento em pronto-atendimento 24h.',
  },
];

const certifications = [
  {
    name: 'Revisão de Condutas em Urgências e Emergências (RESCUE)',
    institution: 'IMED / IDE',
    date: 'Novembro/2024',
  },
  {
    name: 'Suporte Avançado de Vida Cardiovascular AHA',
    institution: 'Curem',
    date: 'Setembro/2019 - Renovação: Fevereiro/2024',
  },
  {
    name: 'Curso de COVID-19 (45 horas)',
    institution: 'Manole',
    date: 'Agosto/2020',
  },
];

const premios = [
  {
    titulo: 'Melhor Trabalho',
    evento: '3ª Jornada Integrada de Ensino, Pesquisa e Extensão da UFTM',
    ano: '2017',
    trabalho: 'Análise de Parâmetros Clínicos e Laboratoriais Relacionados à Atopia em Crianças',
  },
  {
    titulo: 'Melhor Trabalho',
    evento: '26ª Jornada de Pediatria da Sociedade Regional de Pediatria Vale do Rio Grande',
    ano: '2019',
    trabalho: 'Efetividade do Trabalho de Equipe Multidisciplinar na Redução de Reinternações de Prematuros',
  },
];

const skills = [
  'Manejo de pacientes críticos',
  'Procedimentos invasivos',
  'Intubação orotraqueal',
  'Drenagem de tórax',
  'Acesso venoso central',
  'Suporte avançado de vida',
  'Cardiologia clínica',
  'Emergências cardiovasculares',
];

const systems = [
  'MV-PEP',
  'TASY',
  'Hygia',
  'SIS Online',
  'WinHosp',
  'Up To Date',
];

export function Perfil() {
  usePageSEO({
    title: 'Perfil Profissional — Dr. Vandui da Silva dos Santos',
    description:
      'Conheça o currículo completo do Dr. Vandui: Cardiologista com residência no Dante Pazzanese, experiência em UTI, Emergências e Clínica Médica. Premiações e publicações científicas.',
    canonical: '/perfil',
    ogType: 'profile',
    keywords:
      'currículo médico, Dr. Vandui currículo, cardiologista Dante Pazzanese, médico UTI, médico emergências, residência cardiologia',
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="py-16 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6" style={{ color: 'var(--color-title-contrast)' }}>
                Perfil Profissional
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-title-contrast"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Dr. Vandui da Silva dos Santos
              </h1>
              <p className="text-xl mb-8" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
                Médico Cardiologista | Terapia Intensiva | Emergências Médicas
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <Calendar className="w-4 h-4" />
                  31 anos
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <MapPin className="w-4 h-4" />
                  São Bernardo do Campo, SP
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <Award className="w-4 h-4" />
                  CRM-SP
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* História Pessoal */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-8 md:p-12"
              style={{ backgroundColor: 'var(--color-mint)' }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Texto */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[var(--color-emerald)] rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2
                      className="text-2xl font-bold text-[var(--color-teal)]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Minha História
                    </h2>
                  </div>
                  <div className="space-y-4 text-[#666] leading-relaxed">
                    <p>
                      Nascido em São Bernardo do Campo, estudante de{' '}
                      <strong className="text-[var(--color-teal)]">Escola Pública</strong>,
                      sempre tive o sonho de cursar{' '}
                      <strong className="text-[var(--color-teal)]">MEDICINA</strong>.
                      Com muito esforço e ajuda dos meus pais, passei no vestibular
                      para{' '}
                      <strong className="text-[var(--color-teal)]">
                        7 universidades Públicas
                      </strong>
                      , da qual escolhi a{' '}
                      <strong className="text-[var(--color-teal)]">
                        UFTM (Universidade Federal do Triângulo Mineiro)
                      </strong>
                      .
                    </p>
                    <p>
                      Durante o curso recebi{' '}
                      <strong className="text-[var(--color-emerald)]">
                        diversas premiações
                      </strong>
                      , publiquei diversos artigos e tive a oportunidade de realizar
                      um ótimo internato com excelentes instrutores, sempre me
                      dedicando ao máximo.
                    </p>
                    <p>
                      <strong className="text-[var(--color-teal)]">Médico cardiologista</strong>, apaixonado por emergências clínicas, cardiológicas e terapia intensiva.
                      Comprometido em oferecer atendimento técnico e humano de excelência, sempre pautado nas
                      melhores evidências científicas e práticas médicas atuais.
                    </p>
                    <p>
                      Forjado por anos de residência em instituições de referência e por ampla experiência no
                      manejo de pacientes críticos e na execução de procedimentos invasivos, como{' '}
                      <em>intubação orotraqueal, drenagem de tórax e passagem de acesso venoso central</em>.
                      Busco integrar e colaborar com equipes de alta performance, dedicadas à melhoria contínua e à excelência assistencial.
                    </p>
                  </div>
                </div>
                {/* Foto */}
                <div className="hidden lg:block">
                  <img
                    src="/perfil-doctor.jpg"
                    alt="Dr. Vandui"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premiações */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-emerald)] text-white rounded-full text-sm font-medium mb-4">
              <Trophy className="w-4 h-4" />
              Reconhecimentos
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Premiações
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {premios.map((premio, index) => (
              <motion.div
                key={premio.titulo + premio.ano}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border-l-4 border-[var(--color-emerald)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--color-mint)] rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-[var(--color-emerald)]" />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-[var(--color-emerald)] text-white rounded-full text-xs font-medium">
                      {premio.ano}
                    </span>
                  </div>
                </div>
                <h3
                  className="text-lg font-semibold text-[var(--color-teal)] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {premio.titulo}
                </h3>
                <p className="text-sm text-[var(--color-emerald)] font-medium mb-2">
                  {premio.evento}
                </p>
                <p className="text-sm text-[#666]">{premio.trabalho}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[var(--color-mint)] text-[var(--color-emerald)] rounded-full text-sm font-medium mb-4">
              Formação Acadêmica
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Trajetória Educacional
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
                style={{ backgroundColor: 'var(--color-white-blue)' }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-cyan-light)' }}
                  >
                    <item.icon className="w-7 h-7 text-[var(--color-teal)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3
                        className="text-xl font-semibold text-[var(--color-teal)]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {item.degree}
                      </h3>
                      <span
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: 'var(--color-mint)',
                          color: 'var(--color-emerald)',
                        }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p
                      className="font-medium mb-2"
                      style={{ color: 'var(--color-emerald)' }}
                    >
                      {item.institution}
                    </p>
                    <p className="text-[#666] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: 'var(--color-cyan-light)',
                color: 'var(--color-teal)',
              }}
            >
              Experiência Profissional
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Histórico de Atuação
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-7 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: 'var(--color-cyan-light)' }}
              />

              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={`${item.company}-${item.period}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Dot */}
                    <div
                      className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: 'var(--color-teal)' }}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 rounded-2xl p-6"
                      style={{ backgroundColor: 'white' }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3
                          className="text-lg font-semibold text-[var(--color-teal)]"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {item.role}
                        </h3>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: 'var(--color-mint)',
                            color: 'var(--color-emerald)',
                          }}
                        >
                          {item.period}
                        </span>
                      </div>
                      <p
                        className="font-medium text-sm mb-2"
                        style={{ color: 'var(--color-emerald)' }}
                      >
                        {item.company}
                      </p>
                      <p className="text-[#666] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: 'var(--color-mint)',
                color: 'var(--color-emerald)',
              }}
            >
              Certificações
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Formação Complementar
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                style={{ backgroundColor: 'var(--color-white-blue)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-cyan-light)' }}
                  >
                    <Award className="w-6 h-6 text-[var(--color-teal)]" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-[var(--color-teal)] mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-emerald)' }}>
                      {cert.institution}
                    </p>
                    <p className="text-sm text-[#666]">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{
                  backgroundColor: 'var(--color-cyan-light)',
                  color: 'var(--color-teal)',
                }}
              >
                Competências
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Habilidades Técnicas
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Clinical Skills */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'white' }}
              >
                <h3
                  className="text-xl font-semibold text-[var(--color-teal)] mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Habilidades Clínicas
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: 'var(--color-emerald)' }}
                      />
                      <span className="text-[#666]">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Systems */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'white' }}
              >
                <h3
                  className="text-xl font-semibold text-[var(--color-teal)] mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Sistemas e Informática
                </h3>
                <p className="text-[#666] mb-4">
                  Domínio básico dos principais sistemas hospitalares:
                </p>
                <div className="flex flex-wrap gap-2">
                  {systems.map((system, index) => (
                    <motion.span
                      key={system}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                      style={{
                        backgroundColor: 'var(--color-cyan-light)',
                        color: 'var(--color-teal)',
                      }}
                    >
                      {system}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
