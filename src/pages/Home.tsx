import { Link } from 'react-router-dom';
import { usePageSEO } from '@/hooks/usePageSEO';
import {
  Heart,
  Stethoscope,
  ArrowRight,
  Award,
  Users,
  Building2,
  CalendarDays,
  MessageCircle,
  Instagram,
  Shield,
  HeartHandshake,
  TrendingUp,
  FlaskConical,
  Microscope,
  BookOpen,
  Activity,
  Zap,
  HeartPulse,
  Pill,
  TestTubes,
  ActivitySquare,
  CheckCircle2,
  Apple,
  Dumbbell,
  Moon,
  CigaretteOff,
  AlertTriangle,
  Wind,
  Brain,
  Globe,
  Trophy,
  ShieldCheck,
  MapPin,
} from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Anos de Experiência' },
  { icon: Users, value: '5000+', label: 'Pacientes Atendidos' },
];

const services = [
  {
    icon: Heart,
    title: 'Cardiologia',
    description: 'Diagnóstico e tratamento de arritmias, insuficiência cardíaca e pós-infarto.',
    color: 'from-rose-500 to-pink-600',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'Prevenção Cardiovascular',
    description: 'Controle de colesterol, triglicerídeos e estratificação de risco a longo prazo.',
    color: 'from-blue-500 to-indigo-600',
    highlight: false,
  },
  {
    icon: Stethoscope,
    title: 'Clínica Médica',
    description: 'Cuidado integral do paciente adulto, com foco em prevenção e manejo de doenças do dia a dia.',
    color: 'from-emerald-500 to-teal-600',
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: 'Doenças Crônicas',
    description: 'Manejo intensivo de diabetes, hipertensão e dislipidemia com precisão técnica.',
    color: 'from-violet-500 to-purple-600',
    highlight: false,
  },
];

const differentials = [
  {
    icon: HeartHandshake,
    title: 'Tratamento como parceria',
    description: 'Aqui você não é um número. A base do tratamento é a escuta ativa.',
  },
  {
    icon: Award,
    title: 'Formação de Excelência',
    description: 'Instituto Dante Pazzanese de Cardiologia, referência absoluta na América Latina.',
  },
  {
    icon: Shield,
    title: 'Ciência + Empatia',
    description: 'Condutas alinhadas às diretrizes mais recentes (SBC/AHA 2025–2026), aplicadas com escuta e empatia.',
  },
];

const brazilStats = [
  { value: 'A cada 90s', label: '1 Morte no Brasil', sub: 'Por doença cardiovascular — a principal causa de mortalidade', color: 'from-orange-500 to-red-600', icon: HeartPulse },
  { value: '400 mil', label: 'Óbitos / ano', sub: 'Por doenças cardiovasculares', color: 'from-rose-500 to-pink-600', icon: Activity },
  { value: '38 milhões', label: 'De Hipertensos', sub: 'Grande parte sem controle adequado da pressão', color: 'from-blue-500 to-indigo-600', icon: ActivitySquare },
  { value: '30%', label: 'Das Mortes no País', sub: 'São causadas por doenças cardiovasculares', color: 'from-emerald-500 to-teal-600', icon: Globe },
  { value: '14 milhões', label: 'Com Colesterol Alto', sub: 'Maioria silenciosa e não diagnosticada', color: 'from-violet-500 to-purple-600', icon: TestTubes },
  { value: '80%', label: 'São Preveníveis', sub: 'Com hábitos saudáveis e diagnóstico precoce', color: 'from-[#09404A] to-[var(--color-teal)]', icon: ShieldCheck },
];

const warningSigns = [
  {
    icon: AlertTriangle,
    title: 'Dor no Peito',
    description: 'Sensação de aperto, peso ou queimação que pode irradiar para o pescoço ou braço.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Wind,
    title: 'Falta de Ar',
    description: 'Cansaço extremo ou dificuldade para respirar em repouso ou após pequenos esforços.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Activity,
    title: 'Palpitações',
    description: 'Batimentos acelerados, irregulares ou sensação de falhas no peito.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Brain,
    title: 'Desmaios',
    description: 'Perda súbita de consciência, fraqueza severa ou escurecimento da visão inexplicados.',
    color: 'from-orange-500 to-red-500',
  }
];

const healthyHabits = [
  {
    icon: Apple,
    title: 'Alimentação Balanceada',
    description: 'Priorize os vegetais in natura e evite os ultraprocessados para reduzir o sódio.',
  },
  {
    icon: Dumbbell,
    title: 'Exercício Regular',
    description: '150 minutos semanais de atividade fortalecem o seu músculo cardíaco.',
  },
  {
    icon: Moon,
    title: 'Sono de Qualidade',
    description: 'De 7 a 8 horas de sono ajudam a regular a sua pressão arterial.',
  },
  {
    icon: CigaretteOff,
    title: 'Atenção aos Vícios',
    description: 'O tabagismo e o álcool em excesso prejudicam diretamente seus vasos sanguíneos.',
  }
];

const quickAnswers = [
  {
    question: 'Quando devo procurar um cardiologista?',
    answer:
      'Você deve procurar um cardiologista se tiver dor no peito, falta de ar, palpitações, pressão alta, colesterol elevado, diabetes, histórico familiar de doença cardíaca ou quiser fazer uma avaliação preventiva.',
    link: '/consulta-com-cardiologista',
    linkLabel: 'Ver consulta cardiológica',
  },
  {
    question: 'Cardiologista trata hipertensão?',
    answer:
      'Sim. O cardiologista avalia pressão arterial, fatores de risco, exames, histórico familiar e pode orientar tratamento e acompanhamento para reduzir risco cardiovascular.',
    link: '/tratamento-hipertensao',
    linkLabel: 'Ver tratamento de hipertensão',
  },
  {
    question: 'O que é prevenção cardiovascular?',
    answer:
      'Prevenção cardiovascular é o acompanhamento de fatores como pressão, colesterol, diabetes, tabagismo, sedentarismo, alimentação e histórico familiar para reduzir o risco de infarto, AVC e outras doenças cardíacas.',
    link: '/prevencao-cardiovascular',
    linkLabel: 'Ver prevenção cardiovascular',
  },
];

const institutions = [
  {
    name: 'Universidade Federal do Triângulo Mineiro (UFTM)',
    role: 'Graduação em Medicina',
    period: 'Formação médica',
    highlight: 'Base médica sólida para avaliação clínica, raciocínio diagnóstico e cuidado integral do paciente adulto.',
    badge: 'Graduação',
    stats: ['Medicina', 'Formação clínica'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Hospital Ipiranga',
    role: 'Residência em Clínica Médica',
    period: 'Formação hospitalar',
    highlight: 'Treinamento em clínica médica para condução de pacientes complexos, doenças crônicas e cuidado longitudinal.',
    badge: 'Clínica Médica',
    stats: ['Paciente adulto', 'Doenças crônicas'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Instituto Dante Pazzanese de Cardiologia',
    role: 'Residência em Cardiologia',
    period: '2024 – 2026',
    highlight: 'Um dos maiores centros de cardiologia da América Latina, focado em alta complexidade e pesquisa de ponta.',
    badge: 'Cardiologia',
    stats: ['Alta complexidade', 'Prevenção cardiovascular'],
    color: 'from-rose-500 to-pink-600',
  },
];

const credentialHighlights = [
  {
    icon: ShieldCheck,
    title: 'Credenciais oficiais',
    description: 'CRM-SP 210328 e RQE Cardiologia 146567 aparecem no site oficial, no rodapé, nas páginas locais e nos dados estruturados.',
  },
  {
    icon: Stethoscope,
    title: 'Experiência clínica integrada',
    description: 'Atuação em Cardiologia, Clínica Médica, Prevenção Cardiovascular e acompanhamento de hipertensão, colesterol, arritmias e doenças crônicas.',
  },
  {
    icon: MapPin,
    title: 'Atendimento local consistente',
    description: 'Consultas em Santos, Santo André e Vila Mariana, com páginas locais dedicadas, endereço, CTA e FAQ por região.',
  },
];

const research2025 = [
  {
    icon: Microscope,
    year: '2025',
    title: 'Diretrizes de Hipertensão',
    summary: 'Novo alvo < 130/80 mmHg reduz de 30% em eventos maiores.',
    source: 'ACC / AHA',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: FlaskConical,
    year: '2025',
    title: 'GLP-1 e Prevenção',
    summary: 'Agonistas de GLP-1 reduzem risco cardíaco independentemente de DM2.',
    source: 'ESC / SBC',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: BookOpen,
    year: '2026',
    title: 'IA no Eletrocardiograma',
    summary: 'Predição de fibrilação atrial e disfunção silenciosa com 90% de taxa de acerto.',
    source: 'NEJM / Lancet',
    tagColor: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Heart,
    year: '2025',
    title: 'Síndrome Cardiorrenal',
    summary: 'Uso de iSGLT2 como primeira linha na disfunção conjunta de coração e rins.',
    source: 'SBC / SBD',
    tagColor: 'bg-rose-100 text-rose-700',
  },
];

export function Home() {
  usePageSEO({
    title: 'Cardiologista em Santos, Santo André e Vila Mariana — Dr. Vandui',
    description:
      'Dr. Vandui da Silva dos Santos, CRM-SP 210328 e RQE Cardiologia 146567 — Médico Cardiologista com formação no Dante Pazzanese, Hospital Ipiranga e UFTM.',
    canonical: '/',
    keywords:
      'cardiologista santos, cardiologista santo andré, cardiologista são paulo, Dr. Vandui, clínica médica, prevenção cardiovascular, cardiologia, doenças crônicas',
  });

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-white-blue)' }}>

      {/* ── SUPER HERO (Premium 2026) ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a192f]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041a1f] via-[#09404a] to-[#041a1f]" />

        {/* Orbs de fundo Premium */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-b from-[#14b8a6]/20 to-transparent blur-[120px] mix-blend-screen opacity-60 animate-pulse-slow" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-[#0ea5e9]/20 to-transparent blur-[100px] mix-blend-screen opacity-40" />
        </div>

        {/* Grade de fundo */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="section-padding relative w-full z-10 pt-32 pb-20">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">

            {/* Esquerda */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-white/90 tracking-wide">Excelência em Cardiologia</span>
              </div>

              <h1 className="font-bold mb-5 text-white leading-[1.02] tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="block text-6xl sm:text-7xl lg:text-[6.5rem]">
                  Dr. Vandui
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold mt-5 text-emerald-200/95 tracking-wide">
                  Cardiologista · Santos, Santo André e Vila Mariana
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-light mb-8 text-white/80 max-w-2xl leading-relaxed">
                Cardiologia e Clínica Médica com diagnóstico preciso, prevenção real e acompanhamento próximo — em todas as fases da vida.
              </p>
              <p className="max-w-2xl text-sm sm:text-base font-semibold text-emerald-200/95">
                CRM-SP 210328 · RQE Cardiologia 146567 · Formação no Instituto Dante Pazzanese, Hospital Ipiranga e UFTM.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10">
                <a
                  href="https://oneliv.com.br/profissional/vandui-santos"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold bg-white text-[var(--color-teal)] overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] text-lg"
                >
                  <CalendarDays className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Agendar Consulta
                </a>
                <a
                  href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-semibold bg-[#25D366] text-white hover:bg-[#1ebe57] transition-all text-lg shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:shadow-[0_0_60px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Dúvidas
                </a>
                <Link
                  to="/especialidades"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-semibold bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all text-lg"
                >
                  Conhecer Especialidades
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <a
                href="https://instagram.com/vanduisantos.cardio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Dr. Vandui — @vanduisantos.cardio"
                className="group mt-6 mx-auto lg:mx-0 flex w-fit items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center shadow-md shadow-pink-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <Instagram className="w-4 h-4 text-white" />
                </span>
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Siga no Instagram</span>
                  <span className="text-sm font-semibold">@vanduisantos.cardio</span>
                </span>
              </a>

              {/* Stats Bar Hero */}
              <div className="flex flex-wrap items-center gap-0 mt-16 w-full max-w-2xl rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex-1 min-w-[130px] px-8 py-6 text-center sm:text-left ${i < stats.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''
                      }`}
                  >
                    <div className="text-4xl font-bold text-white leading-none mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {s.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">
                      {s.label}
                    </div>
                  </div>
                ))}
                {/* Instituição */}
                <div className="flex-1 min-w-[160px] px-8 py-6 text-center sm:text-left border-t sm:border-t-0 sm:border-l border-white/10">
                  <div className="text-xl font-bold text-white leading-snug mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Dante<br />Pazzanese
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">Formação</div>
                </div>
              </div>
            </div>

            {/* Direita - Imagem */}
            <div className="lg:col-span-5 lg:col-start-8 relative mt-20 lg:mt-0">
              <div className="relative animate-float z-20 w-full max-w-[22rem] lg:max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-[40px] blur-2xl transform scale-110" />
                <img
                  src="/hero-doctor-768.jpg"
                  srcSet="/hero-doctor-480.jpg 480w, /hero-doctor-768.jpg 768w, /hero-doctor.jpg 1066w"
                  sizes="(min-width: 1024px) 28rem, 22rem"
                  width={1066}
                  height={1600}
                  alt="Dr. Vandui da Silva dos Santos — Cardiologista em Santos, Santo André e Vila Mariana"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative w-full rounded-[40px] shadow-2xl border border-white/10"
                />

                {/* Badge Premium */}
                <div className="absolute -bottom-8 -left-4 sm:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-2xl flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-inner flex-shrink-0">
                    <Trophy className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider mb-1">Destaque</p>
                    <p className="font-bold text-white text-sm sm:text-base lg:text-lg leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Instituto Dante<br />Pazzanese
                    </p>
                  </div>
                </div>
              </div>

              {/* Rings Decorativos */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border opacity-20 border-white rounded-full z-0 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border opacity-10 border-white rounded-full z-0 border-dashed pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES (Professional Premium) ── */}
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
              Foco em prevenção, doenças crônicas e acompanhamento contínuo, com olhar no envelhecimento saudável.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} to="/especialidades">
                <div className={`bg-white rounded-[24px] p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm border border-gray-100 ${service.highlight ? 'ring-2 ring-rose-400' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-md`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-[#666] text-[15px] leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center gap-2 mt-auto font-medium text-sm" style={{ color: 'var(--color-teal)' }}>
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARDIOLOGIA NO BRASIL (Estatísticas Impactantes) ── */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}
              >
                Cenário Brasileiro
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
              >
                A Radiografia do Coração
              </h2>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                As doenças cardiovasculares são a principal causa de morte no Brasil. Conhecer esses números é o primeiro passo para não fazer parte da estatística.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brazilStats.map((s) => (
                <div key={s.label} className="rounded-3xl overflow-hidden shadow-sm bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className={`p-6 sm:p-8 flex items-start gap-5`}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0 text-white shadow-md`}>
                      <s.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-4xl font-extrabold text-[var(--color-teal)] tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.value}</div>
                      <div className="text-[15px] font-bold tracking-wide mt-1 text-[var(--color-emerald)] uppercase">{s.label}</div>
                      <p className="text-[14px] text-[#666] mt-2 leading-relaxed">{s.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#888] text-center mt-8 italic">
              Fontes: Sociedade Brasileira de Cardiologia (SBC) e DATASUS.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONDUTAS E EXAMES (O que trato) ── */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: 'var(--color-cyan-light)', color: 'var(--color-teal)' }}
              >
                Abordagem Clínica
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
              >
                Do Diagnóstico ao Controle
              </h2>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                Uma estrutura de avaliação completa para mapear, prevenir e reverter qualquer agravo
                à sua saúde circulatória.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-xl shadow-gray-100/50">
                <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                  Condições Tratadas
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Hipertensão', icon: Activity },
                    { label: 'Arritmias', icon: Zap },
                    { label: 'Insuficiência Cardíaca', icon: HeartPulse },
                    { label: 'Infarto', icon: Heart },
                    { label: 'Angina', icon: Pill },
                    { label: 'Dislipidemia (Colesterol)', icon: TestTubes },
                    { label: 'Valvopatias', icon: Stethoscope },
                    { label: 'Fibrilação Atrial', icon: ActivitySquare },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-4 bg-[#f0f9fa] rounded-2xl p-4 shadow-sm border border-[var(--color-cyan-light)] transition-transform hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'white' }}>
                        <c.icon className="w-5 h-5" style={{ color: 'var(--color-teal)' }} />
                      </div>
                      <span className="text-[14px] font-bold" style={{ color: 'var(--color-teal)' }}>{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#09404A] to-[var(--color-teal)] rounded-[32px] p-8 sm:p-10 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Microscope className="w-48 h-48 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-8 text-white relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Exames & Avaliações
                </h3>
                <div className="space-y-6 mb-10 relative z-10">
                  {[
                    { name: 'Eletrocardiograma (ECG)', desc: 'Avaliação da atividade elétrica em repouso' },
                    { name: 'Holter 24 horas', desc: 'Monitorização contínua do ritmo por um dia' },
                    { name: 'MAPA', desc: 'Controle contínuo e ambulatorial da pressão' },
                    { name: 'Teste Ergométrico', desc: 'Avaliação cardiovascular sob esforço físico' },
                    { name: 'Ecocardiograma', desc: 'Imagem ultrassonográfica para checar anatomia' },
                  ].map((e) => (
                    <div key={e.name} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-emerald-400" />
                      <div>
                        <span className="font-bold text-[16px] text-white">{e.name}</span>
                        <span className="text-[14px] text-white/80 block mt-1">{e.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/especialidades"
                  className="inline-flex relative z-10 items-center gap-2 px-8 py-5 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-lg w-full justify-center text-lg bg-white text-[var(--color-teal)] hover:bg-gray-50"
                >
                  Agendar Avaliação Completa
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SINAIS DE ALERTA ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}>
                Fique Atento
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                Sinais de Alerta
              </h2>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                Nenhum desses sintomas deve ser ignorado. Procure avaliação médica ao percebê-los.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {warningSigns.map((sign) => (
                <div key={sign.title} className="bg-[#f0f9fa] rounded-3xl p-8 border border-[var(--color-cyan-light)] shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sign.color} flex items-center justify-center mb-6 shadow-md`}>
                    <sign.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                    {sign.title}
                  </h3>
                  <p className="text-[#666] text-[15px] leading-relaxed mb-6">{sign.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HÁBITOS SAUDÁVEIS ── */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'var(--color-cyan-light)', color: 'var(--color-teal)' }}>
                Medicina do Estilo de Vida
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                A prevenção é o<br /> melhor remédio
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                A saúde cardiovascular começa muito antes do consultório. Cerca de 80% dos eventos cardíacos prematuros podem ser prevenidos com pequenas mudanças no dia a dia.
              </p>

              <div className="space-y-6">
                {healthyHabits.map((habit) => (
                  <div key={habit.title} className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                      <habit.icon className="w-7 h-7 text-[var(--color-emerald)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-teal)] text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{habit.title}</h3>
                      <p className="text-[#555] text-[15px] leading-relaxed">{habit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-teal rounded-[32px] transform -rotate-[4deg] scale-105 opacity-80 shadow-2xl" />
              <div className="relative bg-white p-2 rounded-[32px] shadow-lg border border-gray-100">
                <img
                  src="/photos/habitos-cardiologia.jpg"
                  alt="Hábitos saudáveis para a saúde cardiovascular — alimentação, exercício e sono"
                  loading="lazy"
                  decoding="async"
                  width={669}
                  height={1000}
                  className="w-full rounded-[28px] object-cover aspect-[4/5] opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-8 -left-8 bg-white py-4 px-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#222]" style={{ fontFamily: 'Poppins, sans-serif' }}>-80%</div>
                    <div className="text-[10px] font-bold text-[#888] uppercase tracking-widest mt-1">De redução do risco</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPOSTAS RÁPIDAS AEO/GEO ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}>
                Perguntas rápidas
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                Respostas diretas sobre cardiologia
              </h2>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                Blocos curtos para orientar pacientes e ajudar mecanismos de busca a entenderem quando a avaliação cardiológica faz sentido.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {quickAnswers.map((item) => (
                <article key={item.question} className="bg-[#f0f9fa] rounded-[28px] p-8 border border-[var(--color-cyan-light)] shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-emerald)]" />
                  </div>
                  <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                    {item.question}
                  </h3>
                  <p className="text-[#555] text-[15px] leading-relaxed mb-6">{item.answer}</p>
                  <Link to={item.link} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-teal)] hover:text-[var(--color-emerald)] transition-colors">
                    {item.linkLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMAÇÃO & EXPERIÊNCIA ── */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'var(--color-cyan-light)', color: 'var(--color-teal)' }}>
                Trajetória e Atualização
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                Formação e Experiência
              </h2>
              <p className="text-lg text-[#555] max-w-3xl mx-auto leading-relaxed">
                Dr. Vandui da Silva dos Santos é Médico Cardiologista, CRM-SP 210328 e RQE Cardiologia 146567, com formação pela UFTM, Hospital Ipiranga e Instituto Dante Pazzanese de Cardiologia.
              </p>
            </div>

            <div className="grid xl:grid-cols-2 gap-12">

              {/* Formação */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                  <Building2 className="w-6 h-6 text-[var(--color-emerald)]" />
                  Formação médica
                </h3>

                <div className="space-y-6">
                  {institutions.map((inst) => (
                    <div key={inst.name} className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-50 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${inst.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wide" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}>
                          {inst.badge}
                        </span>
                        <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>{inst.name}</h4>
                        <p className="text-sm font-bold text-[var(--color-emerald)] mb-3">{inst.role} · {inst.period}</p>
                        <p className="text-[#555] text-[15px] leading-relaxed mb-4">{inst.highlight}</p>
                        <div className="flex flex-wrap gap-2">
                          {inst.stats?.map(stat => (
                            <span key={stat} className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-[#f0f9fa] text-[var(--color-teal)] rounded-lg border border-[var(--color-cyan-light)]">
                              {stat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experiência e credenciais */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                  <ShieldCheck className="w-6 h-6 text-[var(--color-emerald)]" />
                  Credenciais e experiência clínica
                </h3>

                <div className="space-y-4">
                  {credentialHighlights.map((item) => (
                    <div key={item.title} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-cyan-light)' }}>
                        <item.icon className="w-6 h-6" style={{ color: 'var(--color-teal)' }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[16px] font-bold text-[#222] mb-2" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                        <p className="text-[14px] text-[#555] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-14">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                <TrendingUp className="w-6 h-6 text-[var(--color-emerald)]" />
                Atualização científica contínua
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {research2025.map((r) => (
                  <div key={r.title} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-cyan-light)' }}>
                      <r.icon className="w-6 h-6" style={{ color: 'var(--color-teal)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${r.tagColor}`}>{r.source}</span>
                        <span className="text-xs text-[#888] font-bold">{r.year}</span>
                      </div>
                      <h4 className="text-[16px] font-bold text-[#222] mb-2" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>{r.title}</h4>
                      <p className="text-[14px] text-[#555] leading-relaxed">{r.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE ME ESCOLHER ── */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">

            {/* Título centrado no topo */}
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-3" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}>
                Diferenciais
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                Um cardiologista que cuida de verdade
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">

              {/* Foto — primeiro no DOM → primeiro no mobile naturalmente */}
              <div className="relative w-full">
                {/* Frame decorativo teal */}
                <div
                  className="absolute inset-0 rounded-[2rem] border-2"
                  style={{ borderColor: 'var(--color-teal)', transform: 'translate(10px, 10px)', opacity: 0.3 }}
                />
                <img
                  src="/formal.jpg"
                  alt="Dr. Vandui — Cardiologista formado pelo Instituto Dante Pazzanese de Cardiologia"
                  loading="lazy"
                  decoding="async"
                  width={707}
                  height={1061}
                  className="relative w-full rounded-[2rem] shadow-xl object-cover aspect-[4/5]"
                />
                {/* Badge 10+ no canto inferior direito */}
                <div className="absolute -bottom-5 right-6 bg-white py-3 px-5 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100">
                  <div className="text-3xl font-extrabold" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>10+</div>
                  <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider leading-tight">Anos de<br />Experiência</div>
                </div>
              </div>

              {/* Texto e lista de diferenciais */}
              <div className="mt-8 lg:mt-0">
                <p className="text-[16px] text-[#555] leading-relaxed mb-3">
                  Escolhi a medicina por um desejo profundo de cuidar das pessoas — promovendo qualidade de vida e fazendo diferença real na trajetória de cada paciente.
                </p>
                <p className="text-[16px] text-[#555] leading-relaxed mb-7 pb-7 border-b border-gray-100">
                  Como cardiologista, conheço os medos que um diagnóstico cardíaco traz. Me preparei no Instituto Dante Pazzanese de Cardiologia, Hospital Ipiranga e UFTM para estar ao seu lado nesses momentos.{' '}
                  <span className="font-semibold" style={{ color: 'var(--color-teal)' }}>Vejo meus pacientes como parceiros — somos um time.</span>
                </p>

                {/* Lista editorial — sem cards coloridos */}
                <div className="divide-y divide-gray-100">
                  {differentials.map((diff) => (
                    <div
                      key={diff.title}
                      className="group flex items-start gap-4 py-4 hover:bg-gray-50 -mx-3 px-3 rounded-xl transition-colors duration-150"
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: 'var(--color-cyan-light)' }}
                      >
                        <diff.icon className="w-5 h-5" style={{ color: 'var(--color-teal)' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[15px] mb-0.5" style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}>
                          {diff.title}
                        </h3>
                        <p className="text-[#666] text-sm leading-relaxed">{diff.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to="/especialidades"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl text-[16px]"
                    style={{ backgroundColor: 'var(--color-teal)' }}
                  >
                    Ver Minhas Especialidades
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── MINHA PROMESSA / CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-teal" />
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-title-contrast tracking-tight leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Aqui, você é tratado com empatia e excelência científica
            </h2>
            <p className="text-xl sm:text-2xl mb-12 font-light" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
              Agende sua consulta e comece uma jornada personalizada para um coração saudável.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="https://oneliv.com.br/profissional/vandui-santos"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white rounded-2xl font-bold transition-all hover:-translate-y-1 hover:shadow-2xl text-[16px]"
                style={{ color: 'var(--color-teal)' }}
              >
                <CalendarDays className="w-6 h-6 transition-transform group-hover:rotate-12" />
                Agendar Consulta
              </a>
              <a
                href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-semibold bg-[#25D366] text-white hover:bg-[#1ebe57] transition-all text-[16px] shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:shadow-[0_0_60px_rgba(37,211,102,0.4)]"
              >
                <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
                WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/30 backdrop-blur-md text-white rounded-2xl font-semibold hover:bg-white/10 transition-all text-[16px]"
              >
                Outras Formas
              </Link>
            </div>

            <a
              href="https://instagram.com/vanduisantos.cardio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Dr. Vandui — @vanduisantos.cardio"
              className="group mt-10 mx-auto flex w-fit items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center shadow-md shadow-pink-500/30 group-hover:scale-105 transition-transform shrink-0">
                <Instagram className="w-4 h-4 text-white" />
              </span>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Siga no Instagram</span>
                <span className="text-sm font-semibold">@vanduisantos.cardio</span>
              </span>
            </a>
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
