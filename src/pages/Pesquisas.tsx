import { motion } from 'framer-motion';
import { FlaskConical, GraduationCap, Award, Calendar, Users, BookOpen, Microscope, Target } from 'lucide-react';

const monitorias = [
  {
    disciplina: 'MONITOR DE BIOQUÍMICA E BIOFÍSICA',
    periodo: 'Setembro de 2016 a janeiro de 2017',
    ano: 2016,
    cargaHoraria: '180 horas',
    instituicao: 'UFTM',
    tipo: 'Bolsista',
  },
  {
    disciplina: 'MONITOR DE FISIOLOGIA I E II',
    periodo: 'Agosto a setembro de 2015',
    ano: 2015,
    cargaHoraria: '180 horas',
    instituicao: 'UFTM',
    tipo: 'Bolsista',
  },
  {
    disciplina: 'MONITOR DE BIOQUÍMICA E BIOFÍSICA',
    periodo: 'Março a Julho de 2015',
    ano: 2015,
    cargaHoraria: '180 horas',
    instituicao: 'UFTM',
    tipo: 'Bolsista',
  },
];

const pesquisas = [
  {
    titulo: 'EFETIVIDADE DO TRABALHO DE EQUIPE MULTIDISCIPLINAR NA REDUÇÃO DE REINTERNAÇÕES DE PREMATUROS EGRESSOS DA UTI',
    orientadores: [
      'Profª Drª Valéria Cardoso Alves Cunali',
      'Profª Kellen Cristina Kamimura Barbosa',
    ],
    duracao: 'Maio de 2017 a abril de 2018',
    financiamento: 'GEP/HC-UFTM',
    tipo: 'Bolsista',
    premiado: true,
    premio: 'Melhor trabalho - 26ª Jornada de Pediatria da SRPV',
  },
];

const estatisticas = [
  { numero: '540+', label: 'Horas de Monitoria', icon: GraduationCap },
  { numero: '1', label: 'Projeto de Pesquisa', icon: Microscope },
  { numero: '2', label: 'Premiações', icon: Award },
];

const areasPesquisa = [
  {
    titulo: 'Terapia Intensiva Neonatal',
    descricao: 'Foco em reinternações de prematuros egressos de UTI e cuidado multidisciplinar.',
    icon: Users,
  },
  {
    titulo: 'Pediatria',
    descricao: 'Pesquisa em atopia, doenças da infância e desenvolvimento infantil saudável.',
    icon: Target,
  },
  {
    titulo: 'Educação Médica',
    descricao: 'Monitoria em disciplinas básicas da medicina, contribuindo para formação de novos médicos.',
    icon: BookOpen,
  },
];

export function Pesquisas() {
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
                Atuação Acadêmica
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-title-contrast"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Pesquisas e Ensino
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
                Atuação como monitor em disciplinas médicas e pesquisador em projetos
                científicos durante a graduação, com premiações em eventos acadêmicos.
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

      {/* Áreas de Pesquisa */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[var(--color-mint)] text-[var(--color-emerald)] rounded-full text-sm font-medium mb-4">
              Foco de Atuação
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Áreas de Interesse
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {areasPesquisa.map((area, index) => (
              <motion.div
                key={area.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-cyan-light)] rounded-xl flex items-center justify-center">
                  <area.icon className="w-8 h-8 text-[var(--color-teal)]" />
                </div>
                <h3
                  className="text-lg font-semibold text-[var(--color-teal)] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {area.titulo}
                </h3>
                <p className="text-sm text-[#666]">{area.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pesquisa Científica */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-emerald)] text-white rounded-full text-sm font-medium mb-4">
              <FlaskConical className="w-4 h-4" />
              Pesquisa
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Projeto de Pesquisa
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {pesquisas.map((pesquisa, index) => (
              <motion.div
                key={pesquisa.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[var(--color-mint)] to-white rounded-2xl p-8 shadow-lg border border-[var(--color-emerald)]/20"
              >
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  {pesquisa.premiado && (
                    <span className="px-3 py-1 bg-[var(--color-emerald)] text-white rounded-full text-xs font-medium flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {pesquisa.premio}
                    </span>
                  )}
                  <span className="px-3 py-1 bg-[var(--color-teal)] text-white rounded-full text-xs font-medium">
                    {pesquisa.tipo}
                  </span>
                </div>

                <h3
                  className="text-xl font-semibold text-[var(--color-teal)] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {pesquisa.titulo}
                </h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-[var(--color-emerald)] mb-1">
                      Orientadores:
                    </p>
                    <ul className="space-y-1">
                      {pesquisa.orientadores.map((orientador) => (
                        <li key={orientador} className="text-sm text-[#666]">
                          {orientador}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--color-emerald)]/20">
                    <div className="flex items-center gap-2 text-sm text-[#666]">
                      <Calendar className="w-4 h-4 text-[var(--color-emerald)]" />
                      {pesquisa.duracao}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#666]">
                      <Target className="w-4 h-4 text-[var(--color-emerald)]" />
                      Financiamento: {pesquisa.financiamento}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitorias */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-cyan-light)] text-[var(--color-teal)] rounded-full text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4" />
              Ensino
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Monitorias Acadêmicas
            </h2>
            <p className="text-[#666] mt-4 max-w-2xl mx-auto">
              Atuação como monitor bolsista em disciplinas fundamentais do curso
              de medicina, contribuindo para a formação de colegas estudantes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {monitorias.map((monitoria, index) => (
              <motion.div
                key={`${monitoria.disciplina}-${monitoria.periodo}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3
                    className="text-lg font-semibold text-[var(--color-teal)]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {monitoria.disciplina}
                  </h3>
                  <span className="px-3 py-1 bg-[var(--color-mint)] text-[var(--color-emerald)] rounded-full text-xs font-medium">
                    {monitoria.tipo}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-[#666]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[var(--color-teal)]" />
                    {monitoria.periodo}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-[var(--color-teal)]" />
                    {monitoria.cargaHoraria}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[var(--color-teal)]" />
                    {monitoria.instituicao}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <Microscope className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ciência e Educação
            </h2>
            <p className="text-lg text-white/90 mb-8">
              A pesquisa científica e o ensino são pilares fundamentais para a
              evolução da medicina. Acredito na importância de compartilhar
              conhecimento e contribuir para a formação de novos profissionais.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
