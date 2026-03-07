import { motion } from 'framer-motion';
import { usePageSEO } from '@/hooks/usePageSEO';
import { Link } from 'react-router-dom';
import { FileText, Award, BookOpen, ExternalLink, Calendar, Users } from 'lucide-react';

const publicacoes = [
  {
    titulo: 'EFETIVIDADE DO TRABALHO DE EQUIPE MULTIDISCIPLINAR NA REDUÇÃO DE REINTERNAÇÕES DE PREMATUROS EGRESSOS DE UTI',
    autores: 'Santos, V. S.; Silva, C. A. V.; Barbosa, K. C. K.; Crespo, Y. A.; Weffort, V. R. S.; Silva, I. A. V.',
    evento: '28ª Jornada de Pediatria da Sociedade Regional de Pediatria Vale do Rio Grande',
    data: '2 a 4 de outubro de 2019',
    ano: 2019,
    local: 'São Paulo - SP',
    premiado: false,
    categoria: 'UTI Neonatal',
  },
  {
    titulo: 'ANÁLISE DE PARÂMETROS CLÍNICOS E LABORATORIAIS RELACIONADOS À ATOPIA EM CRIANÇAS DA ZONA URBANA E RURAL',
    autores: 'Lima, J. S.; Araujo, C. A. M.; Arruda, L. K. P.; Junior, V. R.; Cunali, V. C. A.; Santos, V. S.',
    evento: '26ª Jornada de Pediatria da Sociedade Regional de Pediatria Vale do Rio Grande',
    data: '13 a 15 de junho de 2019',
    ano: 2019,
    local: 'Uberaba - MG',
    premiado: true,
    premio: 'Melhor trabalho',
    categoria: 'Pediatria',
  },
  {
    titulo: 'LIGA ACADÊMICA DE NEONATOLOGIA',
    autores: 'Porto, M. C. C.; Rodrigues, L. P.; Santos, V. S.; Cunali, V. C. A.',
    evento: '3ª Jornada Integrada de Ensino, Pesquisa e Extensão da UFTM',
    data: '30 de junho a 1 de julho de 2017',
    ano: 2017,
    local: 'Uberaba - MG',
    premiado: true,
    premio: 'Melhor trabalho',
    categoria: 'Extensão-Saúde',
  },
  {
    titulo: 'EDEMA AGUDO HEMORRÁGICO DA INFÂNCIA',
    autores: 'Caixeta, M. F.; Lima, J. S.; Cunali, V. C. A.; Santos, V. S.',
    evento: '1º edição REFACS 2017',
    data: '2017',
    ano: 2017,
    local: 'Uberaba - MG',
    premiado: false,
    categoria: 'Pediatria',
  },
  {
    titulo: 'LEVANTAMENTO EPIDEMIOLÓGICO SOBRE PREVALÊNCIA DA HEPATITE C EM REGIÃO DE MINAS GERAIS – BRASIL',
    autores: 'Gomide, G.; Molina, R. J.; Pereira, G. A.; Melo, C. B.; Salge, V. D.; Santos, V. S.; Cabral, S. C. O.; Camargo, F. C.; Barata, C. H.',
    evento: 'XXV Congresso Brasileiro de Hepatologia',
    data: '2016',
    ano: 2016,
    local: 'São Paulo - SP',
    premiado: false,
    categoria: 'Hepatologia',
  },
  {
    titulo: 'ANÁLISE DE PARÂMETROS CLÍNICOS E LABORATORIAIS RELACIONADOS À ATOPIA EM CRIANÇAS DA ZONA URBANA E RURAL',
    autores: 'Lima, J. S.; Araujo, C. A. M.; Arruda, L. K. P.; Junior, V. R.; Cunali, V. C. A.; Santos, V. S.',
    evento: '3º edição REFACS 2016',
    data: '2016',
    ano: 2016,
    local: 'Uberaba - MG',
    premiado: false,
    categoria: 'Pediatria',
  },
  {
    titulo: 'HIPERTIREOTROPINEMIA TRANSITÓRIA E ALTERAÇÕES DA 17-OH-PROGESTERONA EM LACTENTE NEUROPATA',
    autores: 'Lima, J. S.; Cunali, V. C. A.; Tubero, L. A.; Santos, V. S.',
    evento: '3º edição REFACS 2016',
    data: '2016',
    ano: 2016,
    local: 'Uberaba - MG',
    premiado: false,
    categoria: 'Pediatria',
  },
];

const estatisticas = [
  { numero: '7+', label: 'Publicações', icon: FileText },
  { numero: '2', label: 'Prêmios', icon: Award },
  { numero: '5', label: 'Áreas de Pesquisa', icon: BookOpen },
];

export function Publicacoes() {
  usePageSEO({
    title: 'Publicações Científicas — Trabalhos Acadêmicos Dr. Vandui',
    description:
      'Confira as publicações e trabalhos científicos do Dr. Vandui da Silva dos Santos: 7+ trabalhos em congressos de pediatria, cardiologia e terapia intensiva, com 2 premiações.',
    canonical: '/publicacoes',
    keywords:
      'publicações médicas, trabalhos científicos medicina, artigos cardiologia, pesquisa médica, Dr. Vandui publicações',
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
                Produção Acadêmica
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-title-contrast"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Publicações e Trabalhos
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
                Contribuições científicas em congressos e jornadas na área da saúde,
                com foco em pediatria, terapia intensiva e medicina preventiva.
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

      {/* Publicações */}
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
              Trabalhos Científicos
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--color-teal)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Publicações em Eventos
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {publicacoes.map((pub, index) => (
              <motion.article
                key={pub.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <span className="px-3 py-1 bg-[var(--color-cyan-light)] text-[var(--color-teal)] rounded-full text-xs font-medium">
                    {pub.categoria}
                  </span>
                  {pub.premiado && (
                    <span className="px-3 py-1 bg-[var(--color-mint)] text-[var(--color-emerald)] rounded-full text-xs font-medium flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {pub.premio}
                    </span>
                  )}
                </div>

                <h3
                  className="text-lg md:text-xl font-semibold text-[var(--color-teal)] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {pub.titulo}
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-[var(--color-emerald)] mt-0.5 flex-shrink-0" />
                    <span className="text-[#666]">{pub.autores}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[var(--color-emerald)] flex-shrink-0" />
                    <span className="text-[#666]">{pub.evento}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[var(--color-emerald)] flex-shrink-0" />
                    <span className="text-[#666]">
                      {pub.data || pub.evento.match(/\d{4}/)?.[0] || '2016-2019'}
                      {pub.local && ` • ${pub.local}`}
                    </span>
                  </div>
                </div>
              </motion.article>
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
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Interessado em colaborar?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Estou sempre aberto a novas parcerias em pesquisa e projetos acadêmicos
              na área da saúde.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-teal)] rounded-xl font-semibold hover:bg-[var(--color-cyan-light)] transition-all"
            >
              Entre em Contato
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
