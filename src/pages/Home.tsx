import { Link } from 'react-router-dom';
import {
  Heart,
  Activity,
  Stethoscope,
  Siren,
  Monitor,
  ArrowRight,
  Award,
  Users,
  Building2,
  Phone,
  Calendar,
  Clock,
  Shield,
  BookOpen,
  Trophy,
  FlaskConical,
} from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Anos de Experiência' },
  { icon: Users, value: '5000+', label: 'Pacientes Atendidos' },
  { icon: Building2, value: 'Dante', label: 'Formação Pazzanese' },
];

const services = [
  {
    icon: Heart,
    title: 'Cardiologia',
    description:
      'Diagnóstico e tratamento especializado de doenças cardiovasculares com as mais modernas técnicas.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Siren,
    title: 'Emergências',
    description:
      'Atendimento ágil e eficiente em situações críticas, com protocolos internacionais avançados.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Monitor,
    title: 'UTI',
    description:
      'Manejo completo de pacientes críticos em unidade de terapia intensiva com monitoramento contínuo.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Stethoscope,
    title: 'Clínica Médica',
    description:
      'Cuidado integral da saúde adulta, com foco em prevenção e tratamento de doenças complexas.',
    color: 'from-emerald-500 to-teal-600',
  },
];

const differentials = [
  {
    icon: Award,
    title: 'Formação de Excelência',
    description: 'Residência no renomado Instituto Dante Pazzanese de Cardiologia',
  },
  {
    icon: Clock,
    title: 'Atendimento Humanizado',
    description: 'Compromisso com o cuidado técnico e humano de excelência',
  },
  {
    icon: Shield,
    title: 'Evidências Científicas',
    description: 'Prática baseada nas mais recentes evidências científicas',
  },
];

const academicHighlights = [
  {
    icon: BookOpen,
    title: 'Publicações',
    description: '7+ trabalhos científicos publicados em congressos',
    link: '/publicacoes',
  },
  {
    icon: Trophy,
    title: 'Premiações',
    description: '2 prêmios por melhores trabalhos acadêmicos',
    link: '/perfil',
  },
  {
    icon: FlaskConical,
    title: 'Pesquisa',
    description: 'Projeto de pesquisa em UTI Neonatal',
    link: '/pesquisas',
  },
];

export function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-white-blue)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-teal" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/10"
            style={{ animation: 'pulse 8s ease-in-out infinite' }}
          />
          <div
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/10"
            style={{ animation: 'pulse 10s ease-in-out infinite reverse' }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative w-full section-padding py-32 lg:py-0">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Activity className="w-4 h-4" style={{ color: 'var(--color-emerald)' }} />
                <span className="text-sm font-medium">Cuidando do seu coração</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-title-contrast"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Dr. Vandui
              </h1>

              <p
                className="text-xl sm:text-2xl mb-6 text-title-contrast"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Cardiologia & Terapia Intensiva
              </p>

              <p className="text-lg mb-8 max-w-xl leading-relaxed" style={{ color: 'rgba(224, 247, 250, 0.85)' }}>
                Atendimento técnico e humano de excelência, pautado nas melhores
                evidências científicas e práticas médicas atuais.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl"
                  style={{ color: 'var(--color-teal)' }}
                >
                  <Calendar className="w-5 h-5" />
                  Agendar Consulta
                </a>
                <Link
                  to="/perfil"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  Conhecer Perfil
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--color-emerald)' }} />
                    <div
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative hidden md:block">
              <div className="relative">
                <div className="relative z-10" style={{ animation: 'float 6s ease-in-out infinite' }}>
                  <img
                    src="/hero-doctor.jpg"
                    alt="Dr. Vandui"
                    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-mint)' }}
                      >
                        <Award className="w-6 h-6" style={{ color: 'var(--color-emerald)' }} />
                      </div>
                      <div>
                        <p className="text-sm text-[#666]">Formação</p>
                        <p
                          className="font-semibold"
                          style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                        >
                          Dante Pazzanese
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-white/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}
            >
              Áreas de Atuação
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
            >
              Especialidades Médicas
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              Ofereço atendimento especializado nas principais áreas da medicina
              cardiovascular e terapia intensiva.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} to="/especialidades">
                <div className="group bg-white rounded-2xl p-6 h-full card-hover cursor-pointer">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">{service.description}</p>
                  <div
                    className="flex items-center gap-2 mt-5 font-medium text-sm group-hover:gap-3 transition-all"
                    style={{ color: 'var(--color-teal)' }}
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Highlights Section */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: 'var(--color-cyan-light)', color: 'var(--color-teal)' }}
            >
              Produção Acadêmica
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
            >
              Destaques Acadêmicos
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              Compromisso com a ciência, pesquisa e educação médica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {academicHighlights.map((item) => (
              <Link key={item.title} to={item.link}>
                <div
                  className="rounded-2xl p-6 text-center card-hover cursor-pointer h-full"
                  style={{ backgroundColor: 'var(--color-white-blue)' }}
                >
                  <div
                    className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--color-mint)' }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: 'var(--color-emerald)' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666]">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src="/about-doctor.jpg"
                  alt="Dr. Vandui"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                {/* Experience Badge */}
                <div
                  className="absolute -top-6 -right-6 rounded-2xl p-5 shadow-xl"
                  style={{ backgroundColor: 'var(--color-teal)' }}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      10+
                    </div>
                    <div className="text-sm text-white/80">Anos de Exp.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}
              >
                Sobre o Médico
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6"
                style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
              >
                Dr. Vandui da Silva dos Santos
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                Médico cardiologista, apaixonado por emergências clínicas, cardiológicas e terapia intensiva. 
                Comprometido em oferecer atendimento técnico e humano de excelência, sempre pautado nas 
                melhores evidências científicas e práticas médicas atuais.
              </p>
              <p className="text-[#666] leading-relaxed mb-8">
                Forjado por anos de residência em instituições de referência e por ampla experiência no 
                manejo de pacientes críticos e na execução de procedimentos invasivos, como intubação 
                orotraqueal, drenagem de tórax e passagem de acesso venoso central. Busco integrar e 
                colaborar com equipes de alta performance, dedicadas à melhoria contínua e à excelência assistencial.
              </p>

              {/* Differentials */}
              <div className="space-y-4 mb-8">
                {differentials.map((diff) => (
                  <div key={diff.title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-mint)' }}
                    >
                      <diff.icon className="w-5 h-5" style={{ color: 'var(--color-emerald)' }} />
                    </div>
                    <div>
                      <h4
                        className="font-semibold mb-1"
                        style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                      >
                        {diff.title}
                      </h4>
                      <p className="text-sm text-[#666]">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/perfil"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--color-teal)' }}
              >
                Ver Currículo Completo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-teal relative overflow-hidden">
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
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--color-title-contrast)' }} />
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 text-title-contrast"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Cuide do seu coração com quem entende do assunto
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgba(224, 247, 250, 0.85)' }}>
              Agende sua consulta hoje mesmo e dê o primeiro passo para uma vida
              mais saudável. Atendimento personalizado e humanizado.
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
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }
      `}</style>
    </main>
  );
}
