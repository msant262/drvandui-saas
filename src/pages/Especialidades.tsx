import { motion } from 'framer-motion';
import { usePageSEO } from '@/hooks/usePageSEO';
import { Link } from 'react-router-dom';
import {
  Heart,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  TrendingUp,
} from 'lucide-react';

const specialties = [
  {
    id: 'cardiologia',
    icon: Heart,
    title: 'Cardiologia',
    subtitle: 'Cuidado completo e especializado do coração',
    description:
      'A Cardiologia é a especialidade médica dedicada ao diagnóstico, tratamento e prevenção de doenças do coração e do sistema cardiovascular. Como cardiologista formado no renomado Instituto Dante Pazzanese de Cardiologia — uma das maiores referências do Brasil — ofereço atendimento especializado que alia tecnologia de ponta, medicina baseada em evidências e, acima de tudo, cuidado humano.',
    detailText:
      'Sei dos medos que um diagnóstico cardíaco traz. Por isso, aqui você não é apenas um paciente: é um parceiro de jornada. Juntos vamos entender sua condição, construir um plano de tratamento personalizado e garantir qualidade de vida duradoura.',
    image: '/especialidade-cardiologia.png',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-400',
    iconBgColor: 'bg-rose-100',
    iconColor: 'text-rose-600',
    features: [
      'Avaliação cardiológica completa',
      'Tratamento de hipertensão arterial',
      'Manejo de insuficiência cardíaca',
      'Tratamento de arritmias',
      'Prevenção cardiovascular primária e secundária',
      'Acompanhamento pós-infarto',
      'Controle de colesterol e triglicerídeos',
      'Avaliação de risco cardiológico',
    ],
    procedures: [
      'Eletrocardiograma (ECG)',
      'Holter 24h',
      'MAPA (Monitorização Ambulatorial de Pressão Arterial)',
      'Teste Ergométrico',
      'Ecocardiograma',
    ],
  },
  {
    id: 'prevencao',
    icon: Shield,
    title: 'Prevenção Cardiovascular',
    subtitle: 'Cuide do coração antes que o problema apareça',
    description:
      'A melhor estratégia contra doenças do coração é a prevenção. Com uma avaliação completa do seu risco cardiovascular — incluindo histórico familiar, estilo de vida, exames laboratoriais e funcionais — traçamos juntos um plano de ação para manter seu coração saudável por muitos anos.',
    detailText:
      'Muitas doenças cardíacas são silenciosas e evoluem sem sintomas por anos. A consulta preventiva pode identificar riscos antes que eles se tornem problemas graves.',
    image: '/especialidade-prevencao.png',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-400',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    features: [
      'Avaliação de risco cardiovascular global',
      'Controle de colesterol e triglicerídeos',
      'Prevenção do infarto do miocárdio',
      'Prevenção do AVC',
      'Orientação nutricional e de estilo de vida',
      'Acompanhamento de pacientes assintomáticos',
      'Rastreio de doenças silenciosas',
      'Checkup cardiológico completo',
    ],
    procedures: [
      'Eletrocardiograma (ECG)',
      'Teste Ergométrico',
      'Avaliação laboratorial completa',
      'Ecocardiograma',
      'MAPA (Holter de pressão)',
    ],
  },
  {
    id: 'clinica',
    icon: Stethoscope,
    title: 'Clínica Médica',
    subtitle: 'Cuidado integral para sua saúde adulta',
    description:
      'A Clínica Médica é a base da medicina interna: uma especialidade que enxerga o paciente como um todo, e não apenas seus sintomas isolados. Com residência sólida em Clínica Médica pelo Hospital Ipiranga, ofereço acompanhamento completo e humanizado para adultos, com ênfase em doenças crônicas e no envelhecimento com qualidade.',
    detailText:
      'Gerenciar doenças crônicas exige constância, planejamento e uma relação de confiança entre médico e paciente. Aqui você encontra isso: presença, escuta e um plano de cuidados que evolui junto com você.',
    image: '/especialidade-clinica.png',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-400',
    iconBgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    features: [
      'Avaliação clínica completa',
      'Manejo de diabetes mellitus',
      'Controle de hipertensão arterial',
      'Acompanhamento de doenças crônicas',
      'Medicina do envelhecimento saudável',
      'Diagnóstico diferencial complexo',
      'Encaminhamentos e coordenação de cuidados',
      'Medicina baseada em evidências',
    ],
    procedures: [
      'Consulta médica completa',
      'Avaliação pré-operatória',
      'Acompanhamento ambulatorial',
      'Solicitação de exames dirigidos',
      'Encaminhamentos especializados',
    ],
  },
  {
    id: 'cronicas',
    icon: TrendingUp,
    title: 'Doenças Crônicas',
    subtitle: 'Envelhecimento com saúde e qualidade de vida',
    description:
      'Doenças crônicas como hipertensão, diabetes e dislipidemia afetam milhões de brasileiros e exigem acompanhamento contínuo, personalizado e humanizado. Meu foco é garantir que essas condições sejam bem controladas, prevenindo complicações e assegurando que você viva com mais energia, autonomia e bem-estar.',
    detailText:
      'Conviver com uma doença crônica não significa abrir mão de qualidade de vida. Com o manejo correto, é possível viver bem, com mais disposição e segurança — e é isso que buscamos juntos.',
    image: '/especialidade-cronicas.png',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-400',
    iconBgColor: 'bg-violet-100',
    iconColor: 'text-violet-600',
    features: [
      'Controle de diabetes tipo 1 e 2',
      'Manejo da hipertensão arterial sistêmica',
      'Tratamento de dislipidemia',
      'Prevenção de complicações crônicas',
      'Orientações para estilo de vida saudável',
      'Acompanhamento de longo prazo',
      'Ajuste individualizado de medicamentos',
      'Suporte ao paciente e família',
    ],
    procedures: [
      'Consulta periódica de acompanhamento',
      'Monitoramento de glicemia e HbA1c',
      'Avaliação de órgão-alvo',
      'MAPA para controle pressórico',
      'Avaliação laboratorial periódica',
    ],
  },
];

export function Especialidades() {
  usePageSEO({
    title: 'Especialidades — Cardiologia e Clínica Médica | Dr. Vandui',
    description:
      'Conheça as especialidades do Dr. Vandui: Cardiologia, Prevenção Cardiovascular, Clínica Médica e Doenças Crônicas. Atendimento humanizado e especializado em Santos, Santo André e São Paulo.',
    canonical: '/especialidades',
    keywords:
      'cardiologia, prevenção cardiovascular, clínica médica, doenças crônicas, hipertensão, diabetes, cardiologista são paulo, Dr. Vandui especialidades',
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
                Áreas de Atuação
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-title-contrast"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Especialidades Médicas
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
                Foco em Cardiologia e Clínica Médica — cuidado especializado, humano e baseado nas melhores evidências científicas para você viver bem por muito mais tempo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.a
                key={specialty.id}
                href={`#${specialty.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 text-center card-hover cursor-pointer border-2 transition-colors hover:shadow-lg"
                style={{ borderColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add(specialty.borderColor);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove(specialty.borderColor);
                }}
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl ${specialty.iconBgColor} border-2 ${specialty.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <specialty.icon className={`w-10 h-10 ${specialty.iconColor}`} />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                >
                  {specialty.title}
                </h3>
                <p className="text-[#666] text-sm">{specialty.subtitle}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specialties */}
      {specialties.map((specialty, index) => (
        <section
          key={specialty.id}
          id={specialty.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : ''}`}
          style={{ backgroundColor: index % 2 === 1 ? 'var(--color-white-blue)' : 'white' }}
        >
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 ${specialty.bgColor} rounded-full mb-6`}
                  >
                    <specialty.icon
                      className="w-5 h-5"
                      style={{ color: 'var(--color-teal)' }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'var(--color-teal)' }}
                    >
                      {specialty.title}
                    </span>
                  </div>

                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-4"
                    style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {specialty.subtitle}
                  </h2>

                  <p className="text-[#666] leading-relaxed mb-4">
                    {specialty.description}
                  </p>

                  {specialty.detailText && (
                    <p className="text-[#666] leading-relaxed mb-8 italic border-l-4 pl-4" style={{ borderColor: 'var(--color-emerald)' }}>
                      {specialty.detailText}
                    </p>
                  )}

                  {/* Features */}
                  <div className="mb-8">
                    <h3
                      className="text-lg font-semibold mb-4"
                      style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                    >
                      Principais Serviços
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {specialty.features.map((feature, fIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: fIndex * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: 'var(--color-emerald)' }}
                          />
                          <span className="text-sm text-[#666]">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Procedures */}
                  <div className="mb-8">
                    <h3
                      className="text-lg font-semibold mb-4"
                      style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                    >
                      Procedimentos e Exames
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {specialty.procedures.map((procedure, pIndex) => (
                        <motion.span
                          key={procedure}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: pIndex * 0.05 }}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${specialty.bgColor}`}
                          style={{ color: 'var(--color-teal)' }}
                        >
                          {procedure}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all hover:scale-105"
                    style={{ backgroundColor: 'var(--color-teal)' }}
                  >
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Visual - Imagem */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className={`relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 ${specialty.borderColor}`}>
                    <img
                      src={specialty.image}
                      alt={specialty.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-teal relative overflow-hidden">
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
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--color-title-contrast)' }} />
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 text-title-contrast"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Pronto para cuidar da sua saúde?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
              Aqui você é tratado com empatia e excelência científica — agende sua consulta e sinta-se parte de uma jornada personalizada para um coração saudável.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-xl font-semibold transition-all hover:scale-105"
                style={{ color: 'var(--color-teal)' }}
              >
                <Phone className="w-5 h-5" />
                Agendar por WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Outras Formas de Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
