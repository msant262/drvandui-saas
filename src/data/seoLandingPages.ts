export const SITE_BASE_URL = 'https://www.drvandui.com.br'

export type SeoLandingPageKind = 'local' | 'service' | 'answer'

export type SeoLandingPage = {
  slug: string
  kind: SeoLandingPageKind
  title: string
  description: string
  keywords: string
  h1: string
  eyebrow: string
  intro: string
  ctaLabel: string
  whatsappText: string
  location?: {
    name: string
    address: string
    region: string
    mapQuery: string
  }
  highlights: string[]
  sections: Array<{
    heading: string
    body: string
    bullets?: string[]
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
  relatedSlugs: string[]
}

const sharedProof = [
  'CRM-SP 210328 e RQE Cardiologia 146567',
  'Formação: Instituto Dante Pazzanese, Hospital Ipiranga e UFTM',
  'Consulta com foco em diagnóstico, prevenção e plano de acompanhamento',
]

const localFaqs = (city: string) => [
  {
    question: `Quando procurar um cardiologista em ${city}?`,
    answer:
      'Procure avaliação quando houver dor no peito, falta de ar, palpitações, pressão alta, colesterol alterado, histórico familiar de doença cardíaca ou necessidade de check-up cardiovascular.',
  },
  {
    question: `A primeira consulta em ${city} pode ser online?`,
    answer:
      'A primeira consulta costuma ser presencial para permitir exame físico, aferição de pressão e análise detalhada dos exames. Retornos podem ser avaliados caso a caso.',
  },
  {
    question: 'O atendimento emite recibo para reembolso?',
    answer:
      'Sim. O recibo médico pode ser emitido com os dados necessários para solicitação de reembolso, conforme as regras da operadora do paciente.',
  },
]

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: 'cardiologista-em-santos',
    kind: 'local',
    title: 'Cardiologista em Santos | Dr. Vandui Santos',
    description:
      'Cardiologista em Santos para avaliação cardiovascular, hipertensão, check-up, arritmias e prevenção. Atendimento particular com Dr. Vandui.',
    keywords:
      'cardiologista em Santos, cardiologista Santos SP, consulta cardiologista Santos, check-up cardiologico Santos, hipertensão Santos',
    h1: 'Cardiologista em Santos',
    eyebrow: 'Atendimento em Santos',
    intro:
      'Consulta cardiológica em Santos para quem precisa investigar sintomas, controlar fatores de risco ou organizar um plano de prevenção cardiovascular com acompanhamento próximo.',
    ctaLabel: 'Agendar consulta em Santos',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta cardiológica em Santos.',
    location: {
      name: 'Santos',
      address: 'Av. Ana Costa, 228 - 20º e 21° pavimentos',
      region: 'Gonzaga, Santos - SP',
      mapQuery: 'Av. Ana Costa, 228, Gonzaga, Santos, SP',
    },
    highlights: sharedProof,
    sections: [
      {
        heading: 'Para quem esta consulta é indicada',
        body:
          'A consulta é indicada para adultos com sintomas cardiovasculares, fatores de risco ou necessidade de acompanhamento preventivo.',
        bullets: ['Dor no peito ou falta de ar', 'Pressão alta ou colesterol alto', 'Histórico familiar de infarto ou AVC', 'Check-up antes de atividade física ou cirurgia'],
      },
      {
        heading: 'O que é avaliado',
        body:
          'A avaliação combina história clínica, exame físico, revisão de exames anteriores e definição dos próximos passos, como eletrocardiograma, MAPA, Holter, teste ergométrico ou ecocardiograma quando indicados.',
      },
    ],
    faqs: localFaqs('Santos'),
    relatedSlugs: ['check-up-cardiologico', 'tratamento-hipertensao', 'consulta-com-cardiologista'],
  },
  {
    slug: 'cardiologista-em-santo-andre',
    kind: 'local',
    title: 'Cardiologista em Santo André | Dr. Vandui Santos',
    description:
      'Cardiologista em Santo André para consulta, prevenção cardiovascular, hipertensão, arritmias, check-up e avaliação de risco.',
    keywords:
      'cardiologista em Santo André, cardiologista Santo André SP, consulta cardiologista Santo André, check-up cardiologico Santo André',
    h1: 'Cardiologista em Santo André',
    eyebrow: 'Atendimento em Santo André',
    intro:
      'Atendimento cardiológico em Santo André para diagnóstico, prevenção e controle de doenças cardiovasculares, com possibilidade de agendamento online pela Oneliv.',
    ctaLabel: 'Agendar consulta em Santo André',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta cardiológica em Santo André.',
    location: {
      name: 'Santo André',
      address: 'Av. Portugal, 1285 - 2º e 3º pavimento',
      region: 'Centro, Santo André - SP',
      mapQuery: 'Av. Portugal, 1285, Centro, Santo André, SP',
    },
    highlights: sharedProof,
    sections: [
      {
        heading: 'Quando marcar avaliação',
        body:
          'A avaliação é útil para sintomas como palpitações, dor no peito, cansaço incomum, pressão elevada ou alterações em exames laboratoriais.',
        bullets: ['Hipertensão arterial', 'Arritmias e palpitações', 'Risco cardiovascular familiar', 'Prevenção antes de complicações'],
      },
      {
        heading: 'Como a consulta conduz o plano',
        body:
          'A consulta organiza prioridades: confirmar diagnóstico, ajustar tratamento, definir exames necessários e acompanhar evolução com metas claras.',
      },
    ],
    faqs: localFaqs('Santo André'),
    relatedSlugs: ['palpitacoes-e-arritmias', 'risco-cirurgico-cardiologico', 'prevencao-cardiovascular'],
  },
  {
    slug: 'cardiologista-vila-mariana',
    kind: 'local',
    title: 'Cardiologista na Vila Mariana | Dr. Vandui Santos',
    description:
      'Cardiologista na Vila Mariana para prevenção, check-up, hipertensão, colesterol alto, arritmias e acompanhamento cardiovascular.',
    keywords:
      'cardiologista Vila Mariana, cardiologista na Vila Mariana, consulta cardiologista Vila Mariana, cardiologista São Paulo',
    h1: 'Cardiologista na Vila Mariana',
    eyebrow: 'Atendimento na Vila Mariana',
    intro:
      'Consulta cardiológica na Vila Mariana para pacientes que buscam avaliação completa, orientação clara e acompanhamento baseado em evidências.',
    ctaLabel: 'Agendar na Vila Mariana',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta cardiológica na Vila Mariana.',
    location: {
      name: 'Vila Mariana',
      address: 'R. Domingos de Morais, 2781 - 14° Andar',
      region: 'Vila Mariana, São Paulo - SP',
      mapQuery: 'Rua Domingos de Morais, 2781, Vila Mariana, São Paulo, SP',
    },
    highlights: sharedProof,
    sections: [
      {
        heading: 'Avaliação cardiovascular perto da rotina',
        body:
          'A região da Vila Mariana facilita acompanhamento de pacientes que trabalham ou moram em São Paulo e precisam de continuidade no cuidado cardiológico.',
        bullets: ['Check-up cardiovascular', 'Controle de pressão e colesterol', 'Investigação de dor no peito', 'Acompanhamento de doenças crônicas'],
      },
      {
        heading: 'Consulta com plano de ação',
        body:
          'O objetivo é sair da consulta com entendimento do risco, conduta inicial e próximos passos, sem transformar sintomas em uma lista solta de exames.',
      },
    ],
    faqs: localFaqs('Vila Mariana'),
    relatedSlugs: ['dor-no-peito-quando-procurar-ajuda', 'colesterol-alto', 'clinica-medica'],
  },
  {
    slug: 'consulta-com-cardiologista',
    kind: 'service',
    title: 'Consulta com Cardiologista — Quando Agendar',
    description:
      'Entenda quando agendar consulta com cardiologista, quais sintomas merecem atenção e como funciona a avaliação com Dr. Vandui.',
    keywords: 'consulta com cardiologista, agendar cardiologista, quando procurar cardiologista, cardiologista particular',
    h1: 'Consulta com cardiologista',
    eyebrow: 'Avaliação cardiovascular',
    intro:
      'A consulta com cardiologista ajuda a investigar sintomas, medir risco cardiovascular, ajustar tratamentos e prevenir complicações antes que elas avancem.',
    ctaLabel: 'Agendar consulta cardiológica',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta com cardiologista.',
    highlights: ['Avaliação clínica completa', 'Plano de exames quando necessário', 'Orientação clara sobre risco e prevenção'],
    sections: [
      {
        heading: 'Quando procurar o cardiologista',
        body:
          'Procure atendimento quando houver sintomas ou fatores de risco persistentes. Sintomas intensos, súbitos ou associados a mal-estar importante devem ser avaliados em emergência.',
        bullets: ['Dor no peito', 'Falta de ar', 'Palpitações', 'Pressão alta', 'Colesterol alto', 'Histórico familiar de doença cardíaca'],
      },
      {
        heading: 'O que levar na primeira consulta',
        body:
          'Leve exames recentes, lista de medicamentos, histórico de doenças, cirurgias, alergias e informações sobre casos de infarto, AVC ou morte súbita na família.',
      },
    ],
    faqs: [
      {
        question: 'Preciso estar com sintomas para ir ao cardiologista?',
        answer:
          'Não. Muitas doenças cardiovasculares evoluem de forma silenciosa. A consulta preventiva é indicada quando existem fatores de risco ou histórico familiar.',
      },
      {
        question: 'Quais exames podem ser solicitados?',
        answer:
          'Depende da história clínica. Eletrocardiograma, exames laboratoriais, Holter, MAPA, teste ergométrico e ecocardiograma podem ser considerados.',
      },
    ],
    relatedSlugs: ['check-up-cardiologico', 'dor-no-peito-quando-procurar-ajuda', 'cardiologista-em-santos'],
  },
  {
    slug: 'check-up-cardiologico',
    kind: 'service',
    title: 'Check-up Cardiológico — Prevenção e Avaliação de Risco',
    description:
      'Check-up cardiológico para avaliar risco cardiovascular, pressão, colesterol, histórico familiar e necessidade de exames complementares.',
    keywords: 'check-up cardiológico, checkup cardiologico, avaliação cardiológica, prevenção cardiovascular',
    h1: 'Check-up cardiológico',
    eyebrow: 'Prevenção cardiovascular',
    intro:
      'O check-up cardiológico estima risco, identifica sinais precoces e organiza medidas para reduzir chance de infarto, AVC e complicações cardiovasculares.',
    ctaLabel: 'Agendar check-up cardiológico',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar um check-up cardiológico.',
    highlights: ['Estratificação de risco', 'Revisão de exames', 'Plano preventivo individualizado'],
    sections: [
      {
        heading: 'Quem deve fazer check-up cardiológico',
        body:
          'Adultos com fatores de risco devem considerar avaliação, mesmo sem sintomas.',
        bullets: ['Hipertensão', 'Diabetes', 'Colesterol alto', 'Tabagismo', 'Obesidade', 'Sedentarismo', 'Histórico familiar'],
      },
      {
        heading: 'O que o check-up pode incluir',
        body:
          'A consulta define quais exames fazem sentido para cada caso, evitando tanto negligência quanto excesso de exames sem indicação.',
      },
    ],
    faqs: [
      {
        question: 'Com que frequência devo fazer check-up cardiológico?',
        answer:
          'A frequência depende da idade, sintomas e fatores de risco. Pacientes com hipertensão, diabetes ou histórico familiar podem precisar de acompanhamento mais próximo.',
      },
      {
        question: 'Check-up cardiológico previne infarto?',
        answer:
          'Ele não elimina risco, mas ajuda a identificar fatores modificáveis e orientar medidas de prevenção baseadas no perfil do paciente.',
      },
    ],
    relatedSlugs: ['prevencao-cardiovascular', 'colesterol-alto', 'cardiologista-em-santo-andre'],
  },
  {
    slug: 'risco-cirurgico-cardiologico',
    kind: 'service',
    title: 'Risco Cirúrgico Cardiológico — Avaliação Pré-operatória',
    description:
      'Avaliação de risco cirúrgico cardiológico para pacientes que precisam de liberação e orientação cardiovascular antes de procedimentos.',
    keywords: 'risco cirúrgico cardiológico, avaliação de risco cirúrgico, avaliação pré-operatória cardiologista, liberação cardiológica',
    h1: 'Risco cirúrgico cardiológico',
    eyebrow: 'Avaliação pré-operatória',
    intro:
      'A avaliação pré-operatória estima risco cardiovascular, revisa medicações e ajuda a reduzir complicações antes de cirurgias e procedimentos.',
    ctaLabel: 'Agendar risco cirúrgico',
    whatsappText: 'Olá Dr. Vandui, preciso agendar avaliação de risco cirúrgico cardiológico.',
    highlights: ['Revisão de exames e histórico', 'Orientação sobre medicações', 'Relatório médico quando indicado'],
    sections: [
      {
        heading: 'Quando a avaliação é necessária',
        body:
          'Ela é comum antes de cirurgias eletivas, especialmente em pacientes com idade avançada, hipertensão, diabetes, doença cardíaca prévia ou sintomas cardiovasculares.',
      },
      {
        heading: 'O que levar',
        body:
          'Leve pedido do cirurgião, exames pré-operatórios, lista de medicamentos e relatórios de doenças já diagnosticadas.',
      },
    ],
    faqs: [
      {
        question: 'A avaliação sempre libera a cirurgia?',
        answer:
          'Não necessariamente. O objetivo é estimar risco e orientar segurança. Em alguns casos, pode ser necessário ajustar tratamento ou investigar sintomas antes do procedimento.',
      },
      {
        question: 'Preciso de eletrocardiograma?',
        answer:
          'O eletrocardiograma pode ser indicado, mas a necessidade depende do tipo de cirurgia, idade, sintomas e histórico clínico.',
      },
    ],
    relatedSlugs: ['consulta-com-cardiologista', 'check-up-cardiologico', 'cardiologista-em-santos'],
  },
  {
    slug: 'tratamento-hipertensao',
    kind: 'service',
    title: 'Tratamento de Hipertensão — Cardiologista',
    description:
      'Tratamento e acompanhamento de hipertensão arterial com avaliação de risco, ajuste de medicação e prevenção cardiovascular.',
    keywords: 'tratamento hipertensão, pressão alta cardiologista, cardiologista hipertensão, controlar pressão alta',
    h1: 'Tratamento de hipertensão',
    eyebrow: 'Pressão alta',
    intro:
      'Pressão alta persistente precisa de investigação, acompanhamento e metas claras. O tratamento reduz risco de AVC, infarto, insuficiência cardíaca e doença renal.',
    ctaLabel: 'Agendar avaliação da pressão',
    whatsappText: 'Olá Dr. Vandui, gostaria de avaliar e tratar pressão alta.',
    highlights: ['Medições repetidas e contexto clínico', 'Ajuste individualizado de tratamento', 'Prevenção de complicações'],
    sections: [
      {
        heading: 'Quando procurar cardiologista por pressão alta',
        body:
          'Procure avaliação quando a pressão se mantém elevada em medições repetidas, quando há sintomas ou quando existem fatores de risco associados.',
        bullets: ['Diabetes', 'Doença renal', 'Colesterol alto', 'Histórico familiar', 'Sobrepeso', 'Ronco ou suspeita de apneia'],
      },
      {
        heading: 'Como o acompanhamento ajuda',
        body:
          'O acompanhamento avalia causas, adesão, efeitos colaterais, necessidade de exames e ajustes de estilo de vida e medicação.',
      },
    ],
    faqs: [
      {
        question: 'Pressão alta sempre dá sintomas?',
        answer:
          'Não. A hipertensão frequentemente é silenciosa. Por isso medições confiáveis e acompanhamento são importantes.',
      },
      {
        question: 'Posso parar remédio quando a pressão melhora?',
        answer:
          'Não pare sem orientação médica. A melhora pode ser consequência do próprio tratamento, e a suspensão pode elevar novamente o risco.',
      },
    ],
    relatedSlugs: ['check-up-cardiologico', 'prevencao-cardiovascular', 'cardiologista-em-santo-andre'],
  },
  {
    slug: 'palpitacoes-e-arritmias',
    kind: 'service',
    title: 'Palpitações e Arritmias — Quando Procurar Cardiologista',
    description:
      'Avaliação de palpitações, batimentos irregulares e suspeita de arritmia com cardiologista. Entenda sinais de alerta.',
    keywords: 'palpitações, arritmia cardiologista, coração acelerado, batimento irregular',
    h1: 'Palpitações e arritmias',
    eyebrow: 'Ritmo cardíaco',
    intro:
      'Palpitações podem ter causas benignas, mas também podem indicar arritmias que precisam de avaliação, especialmente quando surgem com tontura, dor no peito ou desmaio.',
    ctaLabel: 'Agendar avaliação de palpitações',
    whatsappText: 'Olá Dr. Vandui, estou sentindo palpitações e gostaria de avaliação cardiológica.',
    highlights: ['Investigação de sintomas', 'Indicação de Holter quando necessário', 'Plano de segurança para sinais de alerta'],
    sections: [
      {
        heading: 'Sinais que merecem atenção',
        body:
          'Procure avaliação se as palpitações forem frequentes, prolongadas, associadas a falta de ar, dor no peito, tontura, desmaio ou histórico de doença cardíaca.',
      },
      {
        heading: 'Exames possíveis',
        body:
          'A investigação pode incluir eletrocardiograma, Holter, exames laboratoriais e ecocardiograma, conforme o caso.',
      },
    ],
    faqs: [
      {
        question: 'Ansiedade pode causar palpitação?',
        answer:
          'Pode, mas isso não exclui avaliação cardíaca quando os sintomas são recorrentes, intensos ou associados a sinais de alerta.',
      },
      {
        question: 'Quando palpitação é urgência?',
        answer:
          'Quando vem com dor no peito, falta de ar intensa, desmaio, fraqueza importante ou batimento muito acelerado e sustentado.',
      },
    ],
    relatedSlugs: ['consulta-com-cardiologista', 'dor-no-peito-quando-procurar-ajuda', 'cardiologista-vila-mariana'],
  },
  {
    slug: 'dor-no-peito-quando-procurar-ajuda',
    kind: 'service',
    title: 'Dor no Peito — Quando Procurar Ajuda',
    description:
      'Dor no peito pode ter origem cardíaca. Saiba sinais de alerta e quando procurar emergência ou cardiologista.',
    keywords: 'dor no peito cardiologista, dor torácica, quando procurar cardiologista, sintomas infarto',
    h1: 'Dor no peito: quando procurar ajuda',
    eyebrow: 'Sintoma de alerta',
    intro:
      'Dor no peito precisa ser interpretada pelo contexto. Algumas situações pedem emergência imediata; outras exigem consulta cardiológica para investigação planejada.',
    ctaLabel: 'Agendar avaliação de dor no peito',
    whatsappText: 'Olá Dr. Vandui, tive dor no peito e gostaria de avaliação cardiológica.',
    highlights: ['Orientação clara de sinais de urgência', 'Investigação de risco cardiovascular', 'Plano de exames quando indicado'],
    sections: [
      {
        heading: 'Quando dor no peito pode ser sinal cardíaco',
        body:
          'Dor no peito associada a falta de ar, suor frio, náusea, desmaio ou irradiação para braço, costas ou mandíbula precisa de avaliação urgente. Em sintomas intensos ou súbitos, procure emergência.',
      },
      {
        heading: 'Quando marcar consulta',
        body:
          'Marque consulta quando a dor é recorrente, aparece com esforço, vem junto de fatores de risco ou deixa dúvida sobre origem cardíaca.',
      },
    ],
    faqs: [
      {
        question: 'Toda dor no peito é infarto?',
        answer:
          'Não. Há causas musculares, digestivas, pulmonares e emocionais. Mas a avaliação é importante quando há sinais de risco ou recorrência.',
      },
      {
        question: 'Posso esperar consulta se a dor é forte agora?',
        answer:
          'Não. Dor intensa, súbita ou com falta de ar, suor frio, desmaio ou irradiação deve ser avaliada em emergência.',
      },
    ],
    relatedSlugs: ['risco-cirurgico-cardiologico', 'palpitacoes-e-arritmias', 'cardiologista-em-santos'],
  },
  {
    slug: 'colesterol-alto',
    kind: 'service',
    title: 'Colesterol Alto — Risco Cardiovascular e Cardiologista',
    description:
      'Avaliação e acompanhamento de colesterol alto para reduzir risco cardiovascular com plano individualizado.',
    keywords: 'colesterol alto, colesterol alto cardiologista, tratar colesterol alto, dislipidemia, prevenção cardiovascular colesterol',
    h1: 'Colesterol alto',
    eyebrow: 'Dislipidemia',
    intro:
      'Colesterol alto pode ser silencioso por anos. A avaliação cardiológica ajuda a estimar risco global e definir quando dieta, exercício e medicação são necessários.',
    ctaLabel: 'Agendar avaliação do colesterol',
    whatsappText: 'Olá Dr. Vandui, gostaria de avaliar colesterol alto e risco cardiovascular.',
    highlights: ['Estratificação de risco', 'Metas individualizadas de LDL', 'Prevenção de infarto e AVC'],
    sections: [
      {
        heading: 'Por que olhar além do número',
        body:
          'O valor do colesterol precisa ser interpretado junto com idade, pressão, diabetes, tabagismo, histórico familiar e presença de doença cardiovascular.',
      },
      {
        heading: 'Como é o acompanhamento',
        body:
          'O plano pode incluir mudanças de estilo de vida, exames complementares e medicação, quando o benefício supera riscos e custos.',
      },
    ],
    faqs: [
      {
        question: 'Colesterol alto dá sintomas?',
        answer:
          'Na maioria das vezes, não. O risco está no acúmulo progressivo e silencioso nas artérias.',
      },
      {
        question: 'Todo mundo com colesterol alto precisa de remédio?',
        answer:
          'Não. A decisão depende do risco cardiovascular global e das metas adequadas para cada paciente.',
      },
    ],
    relatedSlugs: ['prevencao-cardiovascular', 'check-up-cardiologico', 'cardiologista-vila-mariana'],
  },
  {
    slug: 'prevencao-cardiovascular',
    kind: 'service',
    title: 'Prevenção Cardiovascular — Redução de Risco',
    description:
      'Prevenção cardiovascular com avaliação de fatores de risco, hábitos, exames e plano para reduzir chance de infarto e AVC.',
    keywords: 'prevenção cardiovascular, prevenir infarto, reduzir risco cardiovascular, cardiologia preventiva',
    h1: 'Prevenção cardiovascular',
    eyebrow: 'Cardiologia preventiva',
    intro:
      'Prevenir é medir risco, identificar fatores modificáveis e acompanhar resultados. O objetivo é reduzir probabilidade de eventos cardiovasculares ao longo do tempo.',
    ctaLabel: 'Agendar prevenção cardiovascular',
    whatsappText: 'Olá Dr. Vandui, gostaria de uma consulta de prevenção cardiovascular.',
    highlights: ['Risco cardiovascular global', 'Plano de hábitos e exames', 'Acompanhamento longitudinal'],
    sections: [
      {
        heading: 'O que entra na prevenção',
        body:
          'Prevenção envolve pressão, colesterol, diabetes, sono, peso, tabagismo, atividade física, história familiar e sintomas negligenciados.',
      },
      {
        heading: 'Para quem faz sentido',
        body:
          'Faz sentido para adultos com fatores de risco, histórico familiar ou desejo de envelhecer com mais segurança cardiovascular.',
      },
    ],
    faqs: [
      {
        question: 'Prevenção cardiovascular é só pedir exames?',
        answer:
          'Não. Exames ajudam, mas prevenção depende de interpretar risco, definir metas e acompanhar execução do plano.',
      },
      {
        question: 'Sou jovem. Preciso me preocupar?',
        answer:
          'Depende do histórico familiar, pressão, colesterol, tabagismo, obesidade e sintomas. Risco pode começar cedo.',
      },
    ],
    relatedSlugs: ['tratamento-hipertensao', 'colesterol-alto', 'cardiologista-em-santo-andre'],
  },
  {
    slug: 'clinica-medica',
    kind: 'service',
    title: 'Clínica Médica — Cuidado Integral do Adulto',
    description:
      'Consulta de clínica médica para avaliação integral, doenças crônicas, prevenção e coordenação do cuidado adulto.',
    keywords: 'clínica médica, consulta clínica médica, médico clínico, doenças crônicas adulto',
    h1: 'Clínica médica',
    eyebrow: 'Cuidado integral',
    intro:
      'A clínica médica olha o paciente adulto como um todo: sintomas, doenças crônicas, exames, medicamentos e prevenção em um plano coerente.',
    ctaLabel: 'Agendar consulta de clínica médica',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar consulta de clínica médica.',
    highlights: ['Visão integral do adulto', 'Coordenação de exames e especialistas', 'Acompanhamento de doenças crônicas'],
    sections: [
      {
        heading: 'Quando procurar clínica médica',
        body:
          'Procure quando há sintomas inespecíficos, múltiplas doenças, dúvidas sobre exames ou necessidade de organizar cuidado contínuo.',
        bullets: ['Diabetes', 'Hipertensão', 'Cansaço persistente', 'Alterações laboratoriais', 'Check-up geral'],
      },
      {
        heading: 'Como a consulta ajuda',
        body:
          'A consulta organiza prioridades, evita exames desconectados e define quando encaminhar para outras especialidades.',
      },
    ],
    faqs: [
      {
        question: 'Clínica médica substitui especialista?',
        answer:
          'Não necessariamente. Ela coordena o cuidado geral e identifica quando uma especialidade é necessária.',
      },
      {
        question: 'Posso levar exames antigos?',
        answer:
          'Sim. Exames antigos ajudam a entender evolução e evitam repetir solicitações sem necessidade.',
      },
    ],
    relatedSlugs: ['consulta-com-cardiologista', 'check-up-cardiologico', 'cardiologista-vila-mariana'],
  },
  {
    slug: 'palpitacoes-quando-se-preocupar',
    kind: 'answer',
    title: 'Palpitações: Quando se Preocupar — Dr. Vandui',
    description:
      'Entenda quando palpitações podem exigir avaliação urgente, quando marcar cardiologista e quais sinais de alerta observar.',
    keywords: 'palpitações quando se preocupar, coração acelerado, arritmia sinais de alerta, palpitações cardiologista',
    h1: 'Palpitações: quando se preocupar',
    eyebrow: 'Pergunta frequente do paciente',
    intro:
      'Palpitações são a percepção de batimentos fortes, acelerados ou irregulares. Podem ser benignas, mas precisam de atenção quando aparecem com sinais de alerta ou se tornam frequentes.',
    ctaLabel: 'Agendar avaliação de palpitações',
    whatsappText: 'Olá Dr. Vandui, tenho palpitações e gostaria de orientação para avaliação cardiológica.',
    highlights: ['Resposta direta para sinais de alerta', 'Orientação sobre urgência versus consulta', 'Link com avaliação cardiológica quando necessário'],
    sections: [
      {
        heading: 'Quando palpitação pode ser sinal de alerta',
        body:
          'Procure emergência se a palpitação vier com dor no peito, falta de ar intensa, desmaio, quase desmaio, suor frio, fraqueza importante ou batimento muito acelerado e sustentado.',
      },
      {
        heading: 'Quando marcar cardiologista',
        body:
          'Marque consulta se as palpitações são recorrentes, surgem com esforço, atrapalham a rotina, aparecem em pessoas com doença cardíaca prévia ou vêm junto de tontura e cansaço.',
        bullets: ['Episódios repetidos', 'Batimento irregular', 'Histórico familiar de arritmia', 'Uso de estimulantes ou medicamentos'],
      },
    ],
    faqs: [
      {
        question: 'Palpitação sempre significa arritmia?',
        answer:
          'Não. Ansiedade, cafeína, sono ruim, anemia, alterações hormonais e medicamentos podem causar palpitações. A avaliação diferencia causas benignas de arritmias que exigem acompanhamento.',
      },
      {
        question: 'Qual exame detecta palpitações?',
        answer:
          'Depende da frequência dos sintomas. Eletrocardiograma, Holter, exames laboratoriais e ecocardiograma podem ser indicados conforme a história clínica.',
      },
    ],
    relatedSlugs: ['palpitacoes-e-arritmias', 'consulta-com-cardiologista', 'cardiologista-vila-mariana'],
  },
  {
    slug: 'pressao-alta-quando-procurar-ajuda',
    kind: 'answer',
    title: 'Pressão Alta: Quando Procurar Ajuda — Dr. Vandui',
    description:
      'Saiba quando pressão alta exige cardiologista, quais fatores aumentam risco e quando sintomas pedem atendimento urgente.',
    keywords: 'pressão alta quando procurar ajuda, pressão alta cardiologista, hipertensão sinais de alerta',
    h1: 'Pressão alta: quando procurar ajuda',
    eyebrow: 'Hipertensão arterial',
    intro:
      'Pressão alta persistente não deve ser tratada como achado isolado. O contexto, as medições repetidas e os fatores de risco definem a urgência e o plano de acompanhamento.',
    ctaLabel: 'Agendar avaliação da pressão',
    whatsappText: 'Olá Dr. Vandui, tenho pressão alta e gostaria de avaliação cardiológica.',
    highlights: ['Critérios práticos para procurar ajuda', 'Foco em risco cardiovascular', 'Acompanhamento para ajuste de tratamento'],
    sections: [
      {
        heading: 'Quando procurar cardiologista por pressão alta',
        body:
          'Procure avaliação quando a pressão se mantém elevada em medições repetidas, quando há histórico familiar, diabetes, colesterol alto, doença renal, sintomas ou necessidade de ajustar tratamento.',
      },
      {
        heading: 'Quando não esperar consulta',
        body:
          'Sintomas como dor no peito, falta de ar, confusão mental, fraqueza de um lado do corpo, alteração visual súbita ou dor de cabeça muito intensa exigem avaliação imediata em serviço de urgência.',
      },
    ],
    faqs: [
      {
        question: 'Uma medida alta já confirma hipertensão?',
        answer:
          'Não necessariamente. A confirmação depende de medições corretas, repetição em momentos diferentes e contexto clínico.',
      },
      {
        question: 'Hipertensão pode existir sem sintoma?',
        answer:
          'Sim. A pressão alta costuma ser silenciosa, por isso acompanhamento e medições confiáveis são importantes.',
      },
    ],
    relatedSlugs: ['tratamento-hipertensao', 'check-up-cardiologico', 'prevencao-cardiovascular'],
  },
  {
    slug: 'colesterol-alto-e-risco-cardiaco',
    kind: 'answer',
    title: 'Colesterol Alto e Risco Cardíaco — Dr. Vandui',
    description:
      'Entenda por que colesterol alto aumenta risco cardiovascular e quando procurar cardiologista para prevenção.',
    keywords: 'colesterol alto risco cardíaco, colesterol alto cardiologista, LDL alto, prevenção infarto colesterol',
    h1: 'Colesterol alto e risco cardíaco',
    eyebrow: 'Prevenção cardiovascular',
    intro:
      'Colesterol alto costuma não causar sintomas, mas pode aumentar risco de infarto e AVC quando se soma a pressão alta, diabetes, tabagismo, histórico familiar e sedentarismo.',
    ctaLabel: 'Agendar avaliação do colesterol',
    whatsappText: 'Olá Dr. Vandui, gostaria de avaliar colesterol alto e risco cardíaco.',
    highlights: ['Explica risco sem alarmismo', 'Conecta colesterol ao risco global', 'Ajuda a decidir quando procurar cardiologista'],
    sections: [
      {
        heading: 'Quando colesterol alto preocupa mais',
        body:
          'O risco aumenta quando há LDL elevado, diabetes, hipertensão, tabagismo, obesidade, doença renal, histórico familiar de infarto precoce ou doença cardiovascular já conhecida.',
      },
      {
        heading: 'Por que olhar o risco global',
        body:
          'O mesmo valor de colesterol pode ter significados diferentes em pacientes diferentes. A decisão sobre metas, exames e medicação depende do risco cardiovascular total.',
      },
    ],
    faqs: [
      {
        question: 'Colesterol alto dá dor no peito?',
        answer:
          'Geralmente não. O problema é o acúmulo progressivo nas artérias, que pode se manifestar apenas quando já existe doença cardiovascular.',
      },
      {
        question: 'Dieta sempre resolve colesterol alto?',
        answer:
          'Mudanças de hábito são importantes, mas algumas pessoas precisam de medicação conforme risco cardiovascular, níveis de LDL e histórico clínico.',
      },
    ],
    relatedSlugs: ['colesterol-alto', 'prevencao-cardiovascular', 'check-up-cardiologico'],
  },
  {
    slug: 'cardiologista-ou-clinico-geral',
    kind: 'answer',
    title: 'Cardiologista ou Clínico Geral — Qual Procurar?',
    description:
      'Entenda quando procurar clínico geral, quando procurar cardiologista e como organizar o cuidado adulto sem perder tempo.',
    keywords: 'cardiologista ou clínico geral, quando procurar cardiologista, quando procurar clínico geral, clínica médica cardiologia',
    h1: 'Cardiologista ou clínico geral: qual procurar?',
    eyebrow: 'Orientação de cuidado',
    intro:
      'A escolha depende do sintoma, dos fatores de risco e do objetivo da consulta. Clínica médica organiza o cuidado geral; cardiologia aprofunda risco, sintomas e prevenção cardiovascular.',
    ctaLabel: 'Agendar orientação médica',
    whatsappText: 'Olá Dr. Vandui, estou em dúvida entre cardiologia e clínica médica e gostaria de agendar uma avaliação.',
    highlights: ['Ajuda a escolher a consulta certa', 'Reduz idas desnecessárias', 'Conecta clínica médica e cardiologia'],
    sections: [
      {
        heading: 'Quando começar pelo clínico geral',
        body:
          'Pode fazer sentido começar pela clínica médica quando há sintomas inespecíficos, múltiplas queixas, exames alterados sem diagnóstico ou necessidade de organizar acompanhamento geral.',
      },
      {
        heading: 'Quando procurar cardiologista diretamente',
        body:
          'Procure cardiologista quando há dor no peito, falta de ar aos esforços, palpitações, pressão alta, colesterol alto, histórico familiar importante ou necessidade de avaliação de risco cardiovascular.',
        bullets: ['Dor no peito', 'Palpitações', 'Hipertensão', 'Check-up cardiovascular', 'Risco cirúrgico'],
      },
    ],
    faqs: [
      {
        question: 'O cardiologista também pode avaliar questões gerais?',
        answer:
          'Sim, quando há formação e atuação em clínica médica. Ainda assim, a conduta depende do problema principal e pode exigir encaminhamento para outras especialidades.',
      },
      {
        question: 'Qual consulta devo marcar para check-up?',
        answer:
          'Se o foco é risco cardiovascular, pressão, colesterol, sintomas cardíacos ou histórico familiar, o check-up cardiológico é uma boa porta de entrada.',
      },
    ],
    relatedSlugs: ['clinica-medica', 'consulta-com-cardiologista', 'check-up-cardiologico'],
  },
]

export function getSeoLandingPageBySlug(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug)
}

export function getSeoLandingPageByPath(pathname: string) {
  const normalized = pathname.replace(/^\/+|\/+$/g, '')
  return getSeoLandingPageBySlug(normalized)
}
