import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, Clock, Mic2, BookOpen, Star } from 'lucide-react';

const eventosCoordenacao = [
  {
    titulo: 'V SIMPÓSIO E CURSO INTRODUTÓRIO À LIGA ACADÊMICA DE PEDIATRIA',
    data: '12 e 13 de junho de 2017',
    ano: 2017,
    cargaHoraria: '15 horas',
    local: 'Uberaba - MG',
    tipo: 'Coordenação',
  },
  {
    titulo: 'III CURSO DE ATUALIZAÇÃO EM UTI PED/NEONATAL DO HC-UFTM',
    data: '15 de maio a 15 de julho de 2016',
    ano: 2016,
    cargaHoraria: '18 horas',
    local: 'Uberaba - MG',
    tipo: 'Coordenação',
  },
  {
    titulo: 'COMO EDUCAR: AS BASES DO DESENVOLVIMENTO INFANTIL SAUDÁVEL',
    data: '30 de junho de 2016',
    ano: 2016,
    cargaHoraria: '30 horas',
    local: 'Uberaba - MG',
    tipo: 'Coordenação',
  },
  {
    titulo: 'IV SIMPÓSIO E CURSO INTRODUTÓRIO À LIGA ACADÊMICA DE PEDIATRIA',
    data: '08 a 09 de dezembro de 2015',
    ano: 2015,
    cargaHoraria: '30 horas',
    local: 'Uberaba - MG',
    tipo: 'Coordenação',
  },
];

const eventosOuvinte = [
  {
    titulo: '28ª JORNADA DE PEDIATRIA DA SOCIEDADE REGIONAL DE PEDIATRIA VALE DO RIO GRANDE',
    data: '13 a 15 de junho de 2019',
    ano: 2019,
    cargaHoraria: '30 horas',
    local: 'Uberaba - MG',
    tipo: 'Ouvinte',
  },
  {
    titulo: 'II JORNADA DE CUIDADOS AO PREMATURO',
    data: '8 de dezembro de 2017',
    ano: 2017,
    cargaHoraria: '10 horas',
    local: 'Uberaba - MG',
    tipo: 'Ouvinte',
  },
  {
    titulo: 'II SIMPÓSIO DE CARDIOLOGIA - "SIMPÓSIO PROF. DR. SYLVIO PONTES PRATA"',
    data: '24 de novembro de 2017',
    ano: 2017,
    cargaHoraria: '10 horas',
    local: 'Uberaba - MG',
    tipo: 'Ouvinte',
  },
  {
    titulo: 'XIII SIMPÓSIO E CURSO INTRODUTÓRIO DA LIGA DE HIPERTENSÃO ARTERIAL DA UFTM',
    data: '17 a 18 de novembro de 2014',
    ano: 2014,
    cargaHoraria: '15 horas',
    local: 'Uberaba - MG',
    tipo: 'Ouvinte',
  },
  {
    titulo: 'X SIMPOSIO DE URGÊNCIAS TRAUMÁTICAS E XIII CURSO INTRODUTÓRIO À LIGA DE CIRURGIA E TRAUMA DA UFTM',
    data: '10 a 12 de abril de 2014',
    ano: 2014,
    cargaHoraria: '16 horas',
    local: 'Uberaba - MG',
    tipo: 'Ouvinte',
  },
  {
    titulo: 'III SIMPÓSIO E CURSO INTRODUTÓRIO À LIGA ACADÊMICA DE PEDIATRIA',
    data: '02 a 03 de junho de 2014',
    ano: 2014,
    cargaHoraria: '10 horas',
    local: 'Uberaba - MG',
    tipo: 'Ouvinte',
  },
];

const estatisticas = [
  { numero: '10+', label: 'Eventos Coordenados', icon: Mic2 },
  { numero: '100+', label: 'Horas de Coordenação', icon: Clock },
  { numero: '500+', label: 'Participantes', icon: Users },
];

export function Eventos() {
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
                Participação e Organização
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-title-contrast"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Eventos e Coordenação
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
                Atuação na organização e coordenação de eventos acadêmicos,
                além de participação contínua em congressos e simpósios na área da saúde.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 bg-white border-b border-[var(--color-cyan-light)]">
        <div className="section-padding">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {estatisticas.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-[var(--color-mint)] rounded-xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-[var(--color-emerald)]" />
                </div>
                <div
                  className="text-3xl font-bold text-[var(--color-teal)]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {stat.numero}
                </div>
                <div className="text-sm text-[#666]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos - Coordenação */}
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
              <Star className="w-4 h-4" />
              Coordenação
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Eventos Coordenados
            </h2>
            <p className="text-[#666] mt-4 max-w-2xl mx-auto">
              Experiência na organização e coordenação de eventos acadêmicos
              durante a graduação em medicina.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {eventosCoordenacao.map((evento, index) => (
              <motion.div
                key={evento.titulo}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border-l-4 border-[var(--color-emerald)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3
                    className="text-lg font-semibold text-[var(--color-teal)] flex-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {evento.titulo}
                  </h3>
                  <span className="px-3 py-1 bg-[var(--color-emerald)] text-white rounded-full text-xs font-medium">
                    {evento.tipo}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-[#666]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[var(--color-emerald)]" />
                    {evento.data}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[var(--color-emerald)]" />
                    {evento.cargaHoraria}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[var(--color-emerald)]" />
                    {evento.local}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos - Ouvinte */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-cyan-light)] text-[var(--color-teal)] rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Participação
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Eventos como Ouvinte
            </h2>
            <p className="text-[#666] mt-4 max-w-2xl mx-auto">
              Participação em congressos, simpósios e jornadas para
              atualização profissional contínua.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {eventosOuvinte.map((evento, index) => (
              <motion.div
                key={evento.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-white-blue)] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3
                    className="text-base font-semibold text-[var(--color-teal)]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {evento.titulo}
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-[#666]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[var(--color-teal)]" />
                    {evento.data}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[var(--color-teal)]" />
                    {evento.cargaHoraria}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[var(--color-teal)]" />
                    {evento.local}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-emerald relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Aprendizado Contínuo
            </h2>
            <p className="text-lg text-white/90 mb-8">
              A medicina exige constante atualização. Participo regularmente de
              eventos e congressos para oferecer o melhor atendimento baseado
              nas evidências mais recentes.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
