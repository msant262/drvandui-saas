export const SITE_BASE_URL = 'https://www.drvandui.com.br'

export type SeoLandingPageKind = 'local' | 'profile' | 'service'

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
    postalCode: string
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

const authorityProof = [
  'Dr. Vandui da Silva dos Santos, Médico Cardiologista',
  'CRM-SP 210328 e RQE Cardiologia 146567',
  'Formação pela UFTM, Hospital Ipiranga e Instituto Dante Pazzanese de Cardiologia',
]

const emergencyNotice =
  'Sintomas intensos, súbitos ou progressivos, como dor no peito forte, falta de ar importante, desmaio, suor frio ou perda de força, devem ser avaliados em serviço de urgência.'

const localFaqs = (city: string) => [
  {
    question: `Quando procurar um cardiologista em ${city}?`,
    answer:
      'Procure avaliação quando houver dor no peito, falta de ar, palpitações, pressão alta, colesterol alterado, diabetes, histórico familiar de doença cardíaca ou necessidade de check-up cardiovascular.',
  },
  {
    question: `O atendimento em ${city} é indicado para prevenção?`,
    answer:
      'Sim. A consulta pode ser preventiva quando o paciente quer entender risco cardiovascular, revisar exames, controlar pressão, colesterol, diabetes ou organizar acompanhamento antes de sintomas importantes.',
  },
  {
    question: 'O que levar para a consulta cardiológica?',
    answer:
      'Leve exames recentes, lista de medicamentos em uso, histórico de doenças, alergias, cirurgias e informações sobre casos de infarto, AVC, arritmia ou morte súbita na família.',
  },
  {
    question: 'A consulta substitui emergência em caso de dor forte?',
    answer: emergencyNotice,
  },
]

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: 'cardiologista-em-santos',
    kind: 'local',
    title: 'Cardiologista em Santos | Dr. Vandui Santos',
    description:
      'Cardiologista em Santos para consulta, check-up, hipertensão, dor no peito, palpitações e prevenção cardiovascular. CRM-SP 210328 e RQE 146567.',
    keywords:
      'cardiologista em Santos, cardiologista Santos SP, consulta cardiologista Santos, check-up cardiologico Santos, hipertensão Santos',
    h1: 'Cardiologista em Santos',
    eyebrow: 'Atendimento cardiológico em Santos',
    intro:
      'Consulta cardiológica em Santos para investigar sintomas, controlar fatores de risco e organizar prevenção cardiovascular com acompanhamento médico individualizado.',
    ctaLabel: 'Agendar consulta em Santos',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta cardiológica em Santos.',
    location: {
      name: 'Santos',
      address: 'Av. Ana Costa, 228 - 20º e 21° pavimentos',
      region: 'Gonzaga, Santos - SP',
      postalCode: '11060-003',
      mapQuery: 'Av. Ana Costa, 228, Gonzaga, Santos, SP',
    },
    highlights: authorityProof,
    sections: [
      {
        heading: 'Atendimento cardiológico em Santos',
        body:
          'A página de Santos concentra informações para pacientes da Baixada Santista que precisam de consulta cardiológica particular, avaliação preventiva ou acompanhamento de sintomas como dor no peito, palpitações, falta de ar, pressão alta e colesterol elevado.',
        bullets: ['Unidade em Gonzaga', 'Endereço completo e CEP visíveis', 'CTA direto para agendamento', 'Mapa para localização da unidade'],
      },
      {
        heading: 'Quando a consulta faz sentido',
        body:
          'A avaliação é indicada quando há sintomas cardiovasculares, alterações em exames, histórico familiar de infarto ou AVC, hipertensão, diabetes, tabagismo, sedentarismo ou desejo de iniciar prevenção antes de complicações.',
        bullets: ['Check-up cardiológico', 'Controle de hipertensão', 'Avaliação de colesterol e risco', 'Investigação de palpitações e dor no peito'],
      },
      {
        heading: 'Como a avaliação é conduzida',
        body:
          'A consulta organiza história clínica, exame físico, medicações em uso, exames anteriores e fatores de risco. Quando necessário, podem ser considerados eletrocardiograma, Holter, MAPA, teste ergométrico, ecocardiograma ou exames laboratoriais.',
      },
      {
        heading: 'Credenciais e segurança da informação',
        body:
          'O atendimento é realizado pelo Dr. Vandui da Silva dos Santos, Médico Cardiologista, CRM-SP 210328 e RQE Cardiologia 146567. A formação inclui UFTM, Hospital Ipiranga e Instituto Dante Pazzanese de Cardiologia.',
      },
      {
        heading: 'Aviso médico importante',
        body: emergencyNotice,
      },
    ],
    faqs: localFaqs('Santos'),
    relatedSlugs: ['check-up-cardiologico', 'tratamento-hipertensao', 'dor-no-peito-quando-procurar-ajuda'],
  },
  {
    slug: 'cardiologista-em-santo-andre',
    kind: 'local',
    title: 'Cardiologista em Santo André | Dr. Vandui Santos',
    description:
      'Cardiologista em Santo André para avaliação cardiovascular, prevenção, hipertensão, check-up, palpitações e risco cirúrgico. CRM-SP 210328.',
    keywords:
      'cardiologista em Santo André, cardiologista Santo André SP, consulta cardiologista Santo André, check-up cardiologico Santo André',
    h1: 'Cardiologista em Santo André',
    eyebrow: 'Atendimento cardiológico em Santo André',
    intro:
      'Atendimento cardiológico em Santo André para pacientes que precisam investigar sintomas, revisar exames, controlar doenças crônicas e reduzir risco cardiovascular.',
    ctaLabel: 'Agendar consulta em Santo André',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta cardiológica em Santo André.',
    location: {
      name: 'Santo André',
      address: 'Av. Portugal, 1285 - 2º e 3º pavimento',
      region: 'Centro, Santo André - SP',
      postalCode: '09040-011',
      mapQuery: 'Av. Portugal, 1285, Centro, Santo André, SP',
    },
    highlights: authorityProof,
    sections: [
      {
        heading: 'Consulta cardiológica no ABC',
        body:
          'A página de Santo André foi estruturada para pacientes do ABC que buscam cardiologista com foco em diagnóstico, prevenção cardiovascular e acompanhamento de fatores de risco. A unidade fica na Av. Portugal, região central de Santo André.',
        bullets: ['Endereço em Santo André', 'Atendimento para sintomas e prevenção', 'Integração com check-up e risco cirúrgico', 'Agendamento por canais oficiais'],
      },
      {
        heading: 'Principais motivos de consulta',
        body:
          'Entre os motivos mais comuns estão pressão alta, palpitações, dor no peito, cansaço aos esforços, colesterol alterado, diabetes, histórico familiar de doença cardíaca e necessidade de avaliação antes de cirurgia.',
        bullets: ['Hipertensão arterial', 'Palpitações e arritmias', 'Risco cirúrgico cardiológico', 'Prevenção cardiovascular'],
      },
      {
        heading: 'Plano de acompanhamento',
        body:
          'A consulta busca transformar sintomas e exames em um plano claro: confirmar ou afastar diagnósticos, definir exames realmente necessários, ajustar tratamento e acompanhar metas de pressão, colesterol e risco cardiovascular.',
      },
      {
        heading: 'Autoridade médica local',
        body:
          'O site oficial exibe nome completo, CRM-SP 210328, RQE Cardiologia 146567, formação médica e unidades de atendimento para reduzir ruído de entidade e evitar que perfis externos sejam a fonte principal das informações.',
      },
      {
        heading: 'Aviso médico importante',
        body: emergencyNotice,
      },
    ],
    faqs: localFaqs('Santo André'),
    relatedSlugs: ['risco-cirurgico-cardiologico', 'tratamento-hipertensao', 'palpitacoes-e-arritmias'],
  },
  {
    slug: 'cardiologista-vila-mariana',
    kind: 'local',
    title: 'Cardiologista na Vila Mariana | Dr. Vandui Santos',
    description:
      'Cardiologista na Vila Mariana para consulta, check-up, prevenção cardiovascular, hipertensão, colesterol, arritmias e dor no peito.',
    keywords:
      'cardiologista Vila Mariana, cardiologista na Vila Mariana, consulta cardiologista Vila Mariana, cardiologista São Paulo',
    h1: 'Cardiologista na Vila Mariana',
    eyebrow: 'Atendimento cardiológico na Vila Mariana',
    intro:
      'Consulta cardiológica na Vila Mariana para avaliação de sintomas, prevenção cardiovascular, controle de fatores de risco e acompanhamento clínico de adultos.',
    ctaLabel: 'Agendar na Vila Mariana',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta cardiológica na Vila Mariana.',
    location: {
      name: 'Vila Mariana',
      address: 'R. Domingos de Morais, 2781 - 14° Andar',
      region: 'Vila Mariana, São Paulo - SP',
      postalCode: '04035-001',
      mapQuery: 'Rua Domingos de Morais, 2781, Vila Mariana, São Paulo, SP',
    },
    highlights: authorityProof,
    sections: [
      {
        heading: 'Atendimento cardiológico em São Paulo',
        body:
          'A página da Vila Mariana atende pacientes de São Paulo que procuram avaliação cardiovascular com localização definida, CRM/RQE visíveis e conteúdo específico sobre consulta, prevenção, sintomas e acompanhamento.',
        bullets: ['Unidade na Vila Mariana', 'Consulta cardiológica particular', 'Prevenção e doenças crônicas', 'Mapa e CEP da unidade'],
      },
      {
        heading: 'Quando procurar atendimento na Vila Mariana',
        body:
          'A consulta é indicada para pacientes com pressão alta, colesterol alto, palpitações, dor no peito recorrente, falta de ar aos esforços, histórico familiar de doença cardíaca ou necessidade de check-up cardiológico.',
        bullets: ['Check-up cardiovascular', 'Controle de pressão e colesterol', 'Investigação de dor no peito', 'Acompanhamento de fatores de risco'],
      },
      {
        heading: 'Avaliação sem excesso de exames',
        body:
          'A conduta parte da história clínica e exame físico. Exames complementares são discutidos conforme risco, sintomas e objetivo da consulta, evitando tanto negligência quanto excesso de solicitações desconectadas.',
      },
      {
        heading: 'Credenciais do médico',
        body:
          'Dr. Vandui da Silva dos Santos é Médico Cardiologista, CRM-SP 210328 e RQE Cardiologia 146567, com formação pela UFTM, Hospital Ipiranga e Instituto Dante Pazzanese de Cardiologia.',
      },
      {
        heading: 'Aviso médico importante',
        body: emergencyNotice,
      },
    ],
    faqs: localFaqs('Vila Mariana'),
    relatedSlugs: ['check-up-cardiologico', 'palpitacoes-e-arritmias', 'dor-no-peito-quando-procurar-ajuda'],
  },
  {
    slug: 'dr-vandui-cardiologista',
    kind: 'profile',
    title: 'Dr. Vandui da Silva dos Santos | Cardiologista CRM-SP 210328',
    description:
      'Perfil oficial do Dr. Vandui da Silva dos Santos, Médico Cardiologista CRM-SP 210328 e RQE Cardiologia 146567, com formação pela UFTM, Hospital Ipiranga e Instituto Dante Pazzanese.',
    keywords:
      'Dr Vandui, Vandui Santos cardiologista, CRM-SP 210328, RQE Cardiologia 146567, cardiologista Dante Pazzanese',
    h1: 'Dr. Vandui da Silva dos Santos',
    eyebrow: 'Perfil médico oficial',
    intro:
      'Página oficial de entidade médica do Dr. Vandui da Silva dos Santos, Médico Cardiologista, CRM-SP 210328 e RQE Cardiologia 146567, com atendimento em Santos, Santo André e Vila Mariana.',
    ctaLabel: 'Agendar consulta com Dr. Vandui',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta cardiológica.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Formação e experiência médica',
        body:
          'A formação inclui Universidade Federal do Triângulo Mineiro (UFTM), Hospital Ipiranga e Instituto Dante Pazzanese de Cardiologia. Esta página centraliza os dados oficiais para reduzir dependência de perfis externos e documentos antigos.',
        bullets: ['Universidade Federal do Triângulo Mineiro (UFTM)', 'Hospital Ipiranga', 'Instituto Dante Pazzanese de Cardiologia'],
      },
      {
        heading: 'Credenciais profissionais',
        body:
          'O site oficial apresenta nome completo, especialidade, CRM-SP 210328 e RQE Cardiologia 146567 de forma consistente no conteúdo visível e nos dados estruturados.',
        bullets: ['Médico Cardiologista', 'CRM-SP 210328', 'RQE Cardiologia 146567'],
      },
      {
        heading: 'Áreas de cuidado',
        body:
          'A atuação prioriza cardiologia clínica, prevenção cardiovascular, investigação de sintomas como dor no peito e palpitações, controle de hipertensão, avaliação pré-operatória e check-up cardiológico.',
      },
      {
        heading: 'Atendimento e unidades',
        body:
          'O atendimento é organizado para Santos, Santo André e Vila Mariana. As páginas locais do site oficial apresentam endereço, região, CEP, mapa e contexto de atendimento de cada unidade.',
      },
    ],
    faqs: [
      {
        question: 'Qual é o CRM do Dr. Vandui?',
        answer: 'O CRM do Dr. Vandui da Silva dos Santos é CRM-SP 210328.',
      },
      {
        question: 'Qual é o RQE de Cardiologia do Dr. Vandui?',
        answer: 'O registro de qualificação de especialista informado no site oficial é RQE Cardiologia 146567.',
      },
      {
        question: 'Onde o Dr. Vandui atende?',
        answer: 'O atendimento é organizado para Santos, Santo André e Vila Mariana, com páginas locais específicas no site oficial para cada região.',
      },
    ],
    relatedSlugs: ['cardiologista-em-santos', 'cardiologista-em-santo-andre', 'cardiologista-vila-mariana'],
  },
  {
    slug: 'check-up-cardiologico',
    kind: 'service',
    title: 'Check-up Cardiológico | Prevenção e Avaliação de Risco',
    description:
      'Check-up cardiológico para avaliar risco cardiovascular, pressão, colesterol, diabetes, histórico familiar e necessidade de exames complementares.',
    keywords: 'check-up cardiológico, checkup cardiologico, avaliação cardiológica, prevenção cardiovascular, risco cardiovascular',
    h1: 'Check-up cardiológico',
    eyebrow: 'Prevenção cardiovascular',
    intro:
      'O check-up cardiológico avalia risco cardiovascular, sintomas silenciosos, histórico familiar e fatores como pressão, colesterol, diabetes, tabagismo, sono, peso e sedentarismo.',
    ctaLabel: 'Agendar check-up cardiológico',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar um check-up cardiológico.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Quem deve fazer check-up cardiológico',
        body:
          'Adultos com hipertensão, colesterol alto, diabetes, tabagismo, obesidade, sedentarismo, histórico familiar de infarto ou AVC, sintomas aos esforços ou desejo de iniciar prevenção podem se beneficiar da avaliação.',
        bullets: ['Hipertensão', 'Diabetes', 'Colesterol alto', 'Tabagismo', 'Histórico familiar', 'Dor no peito ou falta de ar'],
      },
      {
        heading: 'O que é avaliado na consulta',
        body:
          'A consulta revisa sintomas, antecedentes, pressão arterial, exames anteriores, medicações em uso e fatores de risco. O objetivo é estimar risco global e definir quais medidas fazem sentido para o paciente.',
      },
      {
        heading: 'Exames que podem ser considerados',
        body:
          'Exames laboratoriais, eletrocardiograma, MAPA, Holter, teste ergométrico ou ecocardiograma podem ser discutidos conforme sintomas, idade, risco e achados clínicos. A indicação não é automática; depende do caso.',
      },
      {
        heading: 'Prevenção sem promessa indevida',
        body:
          'O check-up não zera risco de infarto ou AVC. Ele ajuda a identificar fatores modificáveis, definir metas realistas e acompanhar pressão, colesterol, glicemia, hábitos e sintomas ao longo do tempo.',
      },
      {
        heading: 'Aviso médico importante',
        body: emergencyNotice,
      },
    ],
    faqs: [
      {
        question: 'Quem deve fazer check-up cardiológico?',
        answer:
          'Adultos com fatores de risco, histórico familiar, pressão alta, colesterol alterado, diabetes, tabagismo, sedentarismo, obesidade ou sintomas como dor no peito e palpitações devem considerar avaliação.',
      },
      {
        question: 'Check-up cardiológico previne infarto?',
        answer:
          'Ele não elimina risco, mas ajuda a identificar fatores modificáveis e orientar medidas de prevenção baseadas no perfil do paciente.',
      },
      {
        question: 'Preciso fazer todos os exames cardíacos?',
        answer:
          'Não. Os exames devem ser escolhidos conforme risco, sintomas, histórico e exame físico, evitando solicitações sem indicação clara.',
      },
    ],
    relatedSlugs: ['tratamento-hipertensao', 'dor-no-peito-quando-procurar-ajuda', 'cardiologista-em-santos'],
  },
  {
    slug: 'tratamento-hipertensao',
    kind: 'service',
    title: 'Tratamento de Hipertensão | Cardiologista',
    description:
      'Tratamento e acompanhamento de hipertensão arterial com avaliação de risco, ajuste de medicação e prevenção cardiovascular.',
    keywords: 'tratamento hipertensão, pressão alta cardiologista, cardiologista hipertensão, controlar pressão alta',
    h1: 'Tratamento de hipertensão',
    eyebrow: 'Pressão alta',
    intro:
      'Pressão alta persistente precisa de confirmação, acompanhamento e metas individualizadas. O tratamento reduz risco de AVC, infarto, insuficiência cardíaca e doença renal.',
    ctaLabel: 'Agendar avaliação da pressão',
    whatsappText: 'Olá Dr. Vandui, gostaria de avaliar e tratar pressão alta.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Quando procurar cardiologista por pressão alta',
        body:
          'Procure avaliação quando a pressão se mantém elevada em medições repetidas, quando há sintomas, histórico familiar, diabetes, doença renal, colesterol alto, sobrepeso, tabagismo ou necessidade de ajustar tratamento.',
        bullets: ['Medições repetidamente elevadas', 'Sintomas ou mal-estar', 'Diabetes ou doença renal', 'Colesterol alto', 'Histórico familiar'],
      },
      {
        heading: 'Como a hipertensão é acompanhada',
        body:
          'O acompanhamento avalia medidas de pressão, adesão ao tratamento, efeitos colaterais, exames laboratoriais, função renal, risco cardiovascular global e possíveis causas associadas.',
      },
      {
        heading: 'Tratamento além do remédio',
        body:
          'Medicamentos podem ser necessários, mas o plano também considera sal, peso, sono, atividade física, álcool, tabagismo, estresse, apneia do sono e acompanhamento de outros fatores de risco.',
      },
      {
        heading: 'Quando pressão alta vira urgência',
        body:
          'Dor no peito, falta de ar, confusão mental, alteração visual súbita, fraqueza de um lado do corpo ou dor de cabeça muito intensa exigem avaliação imediata em serviço de urgência.',
      },
    ],
    faqs: [
      {
        question: 'Cardiologista trata hipertensão?',
        answer:
          'Sim. O cardiologista avalia pressão arterial, fatores de risco, exames, histórico familiar e risco cardiovascular para orientar acompanhamento e tratamento da hipertensão.',
      },
      {
        question: 'Uma medida alta já confirma hipertensão?',
        answer:
          'Não necessariamente. A confirmação depende de medições corretas, repetidas e interpretadas no contexto clínico.',
      },
      {
        question: 'Posso parar remédio quando a pressão melhora?',
        answer:
          'Não pare sem orientação médica. A melhora pode ser consequência do próprio tratamento, e a suspensão pode elevar novamente o risco.',
      },
    ],
    relatedSlugs: ['check-up-cardiologico', 'cardiologista-em-santo-andre', 'risco-cirurgico-cardiologico'],
  },
  {
    slug: 'dor-no-peito-quando-procurar-ajuda',
    kind: 'service',
    title: 'Dor no Peito | Quando Procurar Ajuda',
    description:
      'Dor no peito pode ter origem cardíaca. Saiba sinais de alerta, quando procurar emergência e quando marcar cardiologista.',
    keywords: 'dor no peito cardiologista, dor torácica, quando procurar cardiologista, sintomas infarto',
    h1: 'Dor no peito: quando procurar ajuda',
    eyebrow: 'Sintoma de alerta',
    intro:
      'Dor no peito deve ser interpretada pelo contexto. Algumas situações exigem emergência imediata; outras pedem consulta cardiológica para investigação planejada.',
    ctaLabel: 'Agendar avaliação de dor no peito',
    whatsappText: 'Olá Dr. Vandui, tive dor no peito e gostaria de avaliação cardiológica.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Quando dor no peito pode ser sinal cardíaco',
        body:
          'Dor no peito associada a falta de ar, suor frio, náusea, desmaio, queda de pressão, mal-estar intenso ou irradiação para braço, costas, pescoço ou mandíbula deve ser avaliada em emergência.',
        bullets: ['Dor intensa ou súbita', 'Falta de ar', 'Suor frio ou náusea', 'Desmaio', 'Irradiação para braço, costas ou mandíbula'],
      },
      {
        heading: 'Quando marcar cardiologista',
        body:
          'Marque consulta quando a dor é recorrente, aparece com esforço, melhora com repouso, vem associada a fatores de risco ou deixa dúvida sobre origem cardíaca mesmo sem sinais de emergência.',
      },
      {
        heading: 'O que pode ser avaliado',
        body:
          'A consulta revisa características da dor, fatores de risco, exame físico, eletrocardiograma e exames adicionais quando indicados. O objetivo é separar causas cardíacas de causas musculares, digestivas, pulmonares ou emocionais.',
      },
      {
        heading: 'Não atrase emergência',
        body: emergencyNotice,
      },
    ],
    faqs: [
      {
        question: 'Dor no peito é sempre problema cardíaco?',
        answer:
          'Não. Dor no peito pode ter várias causas, mas dor intensa, súbita, associada a falta de ar, suor frio, desmaio, náusea ou irradiação deve ser avaliada em emergência.',
      },
      {
        question: 'Posso esperar consulta se a dor é forte agora?',
        answer:
          'Não. Dor forte, súbita ou associada a sinais de alerta deve ser avaliada imediatamente em serviço de urgência.',
      },
      {
        question: 'Dor que aparece no esforço merece avaliação?',
        answer:
          'Sim. Dor ou aperto no peito durante esforço, mesmo que melhore ao parar, deve ser discutido com cardiologista.',
      },
    ],
    relatedSlugs: ['check-up-cardiologico', 'palpitacoes-e-arritmias', 'cardiologista-vila-mariana'],
  },
  {
    slug: 'palpitacoes-e-arritmias',
    kind: 'service',
    title: 'Palpitações e Arritmias | Quando Procurar Cardiologista',
    description:
      'Avaliação de palpitações, batimentos irregulares e suspeita de arritmia com cardiologista. Entenda sinais de alerta.',
    keywords: 'palpitações, arritmia cardiologista, coração acelerado, batimento irregular',
    h1: 'Palpitações e arritmias',
    eyebrow: 'Ritmo cardíaco',
    intro:
      'Palpitações são a percepção de batimentos fortes, acelerados ou irregulares. Podem ser benignas, mas precisam de avaliação quando são recorrentes ou vêm com sinais de alerta.',
    ctaLabel: 'Agendar avaliação de palpitações',
    whatsappText: 'Olá Dr. Vandui, estou sentindo palpitações e gostaria de avaliação cardiológica.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Quando palpitações preocupam',
        body:
          'Procure avaliação se as palpitações são frequentes, prolongadas, surgem com esforço, acordam durante a noite ou vêm acompanhadas de dor no peito, falta de ar, tontura, desmaio ou histórico de doença cardíaca.',
        bullets: ['Episódios repetidos', 'Batimento irregular', 'Tontura ou desmaio', 'Dor no peito', 'Histórico de doença cardíaca'],
      },
      {
        heading: 'Causas possíveis',
        body:
          'Ansiedade, cafeína, sono ruim, anemia, alterações hormonais, medicamentos e arritmias podem causar palpitações. A consulta ajuda a diferenciar causas benignas de quadros que exigem investigação.',
      },
      {
        heading: 'Exames que podem ser úteis',
        body:
          'Eletrocardiograma, Holter, exames laboratoriais e ecocardiograma podem ser considerados conforme frequência dos sintomas, fatores de risco e achados da avaliação clínica.',
      },
      {
        heading: 'Quando buscar urgência',
        body:
          'Palpitação com dor no peito, falta de ar intensa, desmaio, fraqueza importante, suor frio ou batimento muito acelerado e sustentado deve ser avaliada em urgência.',
      },
    ],
    faqs: [
      {
        question: 'Palpitação sempre significa arritmia?',
        answer:
          'Não. Existem causas benignas, mas sintomas recorrentes, intensos ou associados a sinais de alerta merecem avaliação cardiológica.',
      },
      {
        question: 'Qual exame detecta palpitações?',
        answer:
          'Depende da frequência dos sintomas. Eletrocardiograma, Holter, exames laboratoriais e ecocardiograma podem ser indicados conforme a história clínica.',
      },
      {
        question: 'Quando palpitação é urgência?',
        answer:
          'Quando vem com dor no peito, falta de ar intensa, desmaio, fraqueza importante ou batimento muito acelerado e sustentado.',
      },
    ],
    relatedSlugs: ['dor-no-peito-quando-procurar-ajuda', 'check-up-cardiologico', 'cardiologista-em-santos'],
  },
  {
    slug: 'risco-cirurgico-cardiologico',
    kind: 'service',
    title: 'Risco Cirúrgico Cardiológico | Avaliação Pré-operatória',
    description:
      'Avaliação de risco cirúrgico cardiológico para pacientes que precisam de orientação cardiovascular antes de procedimentos.',
    keywords: 'risco cirúrgico cardiológico, avaliação de risco cirúrgico, avaliação pré-operatória cardiologista, liberação cardiológica',
    h1: 'Risco cirúrgico cardiológico',
    eyebrow: 'Avaliação pré-operatória',
    intro:
      'A avaliação pré-operatória estima risco cardiovascular, revisa sintomas, exames e medicações, e orienta segurança antes de cirurgias e procedimentos.',
    ctaLabel: 'Agendar risco cirúrgico',
    whatsappText: 'Olá Dr. Vandui, preciso agendar avaliação de risco cirúrgico cardiológico.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Quando o risco cirúrgico é indicado',
        body:
          'A avaliação é comum antes de cirurgias eletivas, especialmente em pacientes com idade avançada, hipertensão, diabetes, doença cardíaca prévia, sintomas cardiovasculares ou procedimentos de maior porte.',
        bullets: ['Cirurgias eletivas', 'Hipertensão ou diabetes', 'Histórico cardíaco', 'Sintomas cardiovasculares', 'Revisão de exames pré-operatórios'],
      },
      {
        heading: 'O que levar para a consulta',
        body:
          'Leve pedido do cirurgião, exames pré-operatórios, lista de medicamentos, relatórios médicos anteriores, histórico de alergias e informações sobre doenças já diagnosticadas.',
      },
      {
        heading: 'O objetivo não é só liberar cirurgia',
        body:
          'A consulta estima risco, identifica situações que exigem investigação adicional, orienta ajuste de medicações e ajuda a reduzir complicações cardiovasculares no período perioperatório.',
      },
      {
        heading: 'Quando pode ser necessário adiar',
        body:
          'Sintomas instáveis, dor no peito recente, falta de ar importante, arritmias sintomáticas ou descompensação clínica podem exigir investigação antes do procedimento. A decisão depende do risco do paciente e da cirurgia.',
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
      {
        question: 'Quanto tempo antes da cirurgia devo fazer avaliação?',
        answer:
          'O ideal é não deixar para a véspera, porque alguns casos exigem ajustes ou exames adicionais antes da liberação.',
      },
    ],
    relatedSlugs: ['check-up-cardiologico', 'tratamento-hipertensao', 'cardiologista-em-santo-andre'],
  },
]

export function getSeoLandingPageBySlug(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug)
}

export function getSeoLandingPageByPath(pathname: string) {
  const normalized = pathname.replace(/^\/+|\/+$/g, '')
  return getSeoLandingPageBySlug(normalized)
}
