export const SITE_BASE_URL = 'https://www.drvandui.com.br'

export type SeoLandingPageKind = 'local' | 'profile' | 'service' | 'answer'

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

const seoLandingPagesBase: SeoLandingPage[] = [
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
  {
    slug: 'consulta-com-cardiologista',
    kind: 'service',
    title: 'Consulta com Cardiologista | Dr. Vandui Santos',
    description:
      'Consulta com cardiologista para dor no peito, palpitações, pressão alta, colesterol, check-up, prevenção cardiovascular e risco cirúrgico.',
    keywords:
      'consulta com cardiologista, consulta cardiológica, cardiologista particular, agendar cardiologista, Dr Vandui cardiologista',
    h1: 'Consulta com cardiologista',
    eyebrow: 'Primeira avaliação cardiológica',
    intro:
      'A consulta com cardiologista organiza sintomas, histórico, exames e fatores de risco para definir uma conduta clara, sem transformar toda dúvida em bateria automática de exames.',
    ctaLabel: 'Agendar consulta cardiológica',
    whatsappText: 'Olá Dr. Vandui, gostaria de agendar uma consulta com cardiologista.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Para quem a consulta é indicada',
        body:
          'A avaliação é indicada para adultos com dor no peito, falta de ar, palpitações, pressão alta, colesterol alterado, diabetes, histórico familiar de infarto ou AVC, alterações em exames ou desejo de iniciar prevenção cardiovascular.',
        bullets: ['Dor no peito ou falta de ar', 'Palpitações ou batimento irregular', 'Pressão alta ou colesterol alterado', 'Histórico familiar de doença cardíaca'],
      },
      {
        heading: 'Como a avaliação é conduzida',
        body:
          'A consulta revisa história clínica, sintomas, medicamentos, pressão arterial, exames anteriores e estilo de vida. A partir disso, o médico decide se há necessidade de exames complementares, ajuste de tratamento ou acompanhamento periódico.',
      },
      {
        heading: 'O que levar no dia',
        body:
          'Leve exames recentes, lista de remédios, alergias, cirurgias, internações e informações sobre doenças cardíacas na família. Esses dados reduzem ruído e ajudam a consulta a ser mais objetiva.',
        bullets: ['Exames recentes', 'Lista de medicamentos', 'Histórico familiar', 'Relatórios e pedidos médicos anteriores'],
      },
      {
        heading: 'Quando não esperar consulta',
        body: emergencyNotice,
      },
    ],
    faqs: [
      {
        question: 'Quando devo marcar consulta com cardiologista?',
        answer:
          'Quando houver sintomas como dor no peito, falta de ar ou palpitações, fatores de risco como hipertensão, colesterol alto ou diabetes, histórico familiar ou necessidade de prevenção cardiovascular.',
      },
      {
        question: 'Preciso chegar com exames prontos?',
        answer:
          'Não necessariamente. Exames anteriores ajudam, mas a indicação de novos exames deve partir da avaliação clínica e do risco individual.',
      },
      {
        question: 'Cardiologista também faz prevenção?',
        answer:
          'Sim. A consulta pode ser preventiva para estimar risco cardiovascular, revisar hábitos, acompanhar pressão, colesterol, diabetes e histórico familiar.',
      },
    ],
    relatedSlugs: ['check-up-cardiologico', 'tratamento-hipertensao', 'risco-cirurgico-cardiologico'],
  },
  {
    slug: 'palpitacoes-quando-se-preocupar',
    kind: 'answer',
    title: 'Palpitações: Quando se Preocupar | Dr. Vandui Cardiologista',
    description:
      'Entenda quando palpitações merecem avaliação com cardiologista, sinais de alerta e quando procurar urgência.',
    keywords:
      'palpitações quando se preocupar, coração acelerado, batimento irregular, palpitação cardiologista, arritmia sintomas',
    h1: 'Palpitações: quando se preocupar',
    eyebrow: 'Resposta rápida sobre palpitações',
    intro:
      'Palpitação é a percepção de batimentos acelerados, fortes ou irregulares. Nem todo episódio é grave, mas alguns padrões exigem avaliação cardiológica ou urgência.',
    ctaLabel: 'Agendar avaliação de palpitações',
    whatsappText: 'Olá Dr. Vandui, estou com palpitações e gostaria de avaliação cardiológica.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Sinais de alerta',
        body:
          'Preocupe-se quando a palpitação vem com dor no peito, falta de ar, tontura, desmaio, suor frio, batimento muito acelerado e sustentado, ou quando aparece durante esforço físico.',
        bullets: ['Dor no peito', 'Falta de ar', 'Tontura ou desmaio', 'Batimento irregular e persistente'],
      },
      {
        heading: 'Quando marcar cardiologista',
        body:
          'Marque consulta se os episódios são recorrentes, atrapalham atividades, acordam durante a noite, aparecem com exercício ou ocorrem em pacientes com hipertensão, doença cardíaca prévia ou histórico familiar relevante.',
      },
      {
        heading: 'O que pode estar por trás',
        body:
          'Cafeína, ansiedade, sono ruim, anemia, alterações hormonais, medicamentos e arritmias podem causar palpitações. A avaliação clínica ajuda a diferenciar causas benignas de quadros que precisam investigação.',
      },
      {
        heading: 'Quando procurar urgência',
        body:
          'Procure urgência se a palpitação for intensa, sustentada ou associada a dor no peito, falta de ar importante, desmaio, fraqueza ou mal-estar intenso.',
      },
    ],
    faqs: [
      {
        question: 'Palpitação sempre é arritmia?',
        answer:
          'Não. Pode ter causas benignas, mas episódios recorrentes, intensos ou associados a sinais de alerta devem ser avaliados.',
      },
      {
        question: 'Coração acelerado por ansiedade precisa de cardiologista?',
        answer:
          'Pode precisar quando há dúvida diagnóstica, sintomas fortes, fatores de risco ou episódios repetidos. A avaliação ajuda a separar ansiedade de arritmia ou outras causas.',
      },
      {
        question: 'Qual exame avalia palpitações?',
        answer:
          'Depende da frequência. Eletrocardiograma, Holter, exames laboratoriais e ecocardiograma podem ser considerados conforme o caso.',
      },
    ],
    relatedSlugs: ['palpitacoes-e-arritmias', 'dor-no-peito-quando-procurar-ajuda', 'consulta-com-cardiologista'],
  },
  {
    slug: 'pressao-alta-quando-procurar-ajuda',
    kind: 'answer',
    title: 'Pressão Alta: Quando Procurar Ajuda | Cardiologista',
    description:
      'Saiba quando pressão alta precisa de cardiologista, quais sinais exigem urgência e como organizar o acompanhamento.',
    keywords:
      'pressão alta quando procurar ajuda, pressão alta cardiologista, hipertensão sintomas, pressão alta urgência',
    h1: 'Pressão alta: quando procurar ajuda',
    eyebrow: 'Hipertensão sem improviso',
    intro:
      'Uma medida isolada alta não conta a história inteira. O risco aumenta quando a pressão se repete elevada, vem com sintomas ou aparece em pacientes com outros fatores cardiovasculares.',
    ctaLabel: 'Agendar avaliação da pressão',
    whatsappText: 'Olá Dr. Vandui, estou com pressão alta e gostaria de orientação cardiológica.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Quando procurar cardiologista',
        body:
          'Procure avaliação quando a pressão se mantém elevada em medições repetidas, quando há diabetes, doença renal, colesterol alto, sobrepeso, tabagismo, histórico familiar ou necessidade de ajustar medicação.',
        bullets: ['Medições repetidamente altas', 'Diabetes ou doença renal', 'Colesterol alto', 'Dúvida sobre tratamento atual'],
      },
      {
        heading: 'Quando é urgência',
        body:
          'Dor no peito, falta de ar, confusão mental, alteração visual súbita, fraqueza em um lado do corpo, desmaio ou dor de cabeça muito intensa exigem avaliação imediata.',
      },
      {
        heading: 'Como acompanhar com segurança',
        body:
          'O acompanhamento considera medidas corretas de pressão, risco global, adesão ao tratamento, efeitos colaterais, função renal, exames laboratoriais e hábitos que influenciam a pressão.',
      },
      {
        heading: 'Por que não ajustar sozinho',
        body:
          'Aumentar, cortar ou trocar medicação sem orientação pode mascarar risco, causar efeitos colaterais ou deixar a pressão sem controle real. A decisão depende do contexto clínico.',
      },
    ],
    faqs: [
      {
        question: 'Uma pressão alta isolada confirma hipertensão?',
        answer:
          'Não necessariamente. A confirmação depende de medidas repetidas, técnica correta e interpretação clínica.',
      },
      {
        question: 'Quando pressão alta vira emergência?',
        answer:
          'Quando vem com dor no peito, falta de ar, confusão, alteração visual, fraqueza, desmaio ou dor de cabeça muito intensa.',
      },
      {
        question: 'Cardiologista pode ajustar remédio de pressão?',
        answer:
          'Sim. O cardiologista avalia risco, exames, sintomas e resposta ao tratamento para orientar ajustes quando necessários.',
      },
    ],
    relatedSlugs: ['tratamento-hipertensao', 'check-up-cardiologico', 'colesterol-alto-e-risco-cardiaco'],
  },
  {
    slug: 'colesterol-alto-e-risco-cardiaco',
    kind: 'answer',
    title: 'Colesterol Alto e Risco Cardíaco | Cardiologista',
    description:
      'Colesterol alto pode aumentar risco cardiovascular. Entenda quando procurar cardiologista e como avaliar risco de forma individualizada.',
    keywords:
      'colesterol alto risco cardíaco, colesterol alto cardiologista, LDL alto, prevenção cardiovascular, risco de infarto',
    h1: 'Colesterol alto e risco cardíaco',
    eyebrow: 'Prevenção cardiovascular',
    intro:
      'Colesterol alto não deve ser interpretado apenas por um número isolado. O impacto depende de idade, pressão, diabetes, tabagismo, histórico familiar e risco cardiovascular global.',
    ctaLabel: 'Agendar avaliação de risco',
    whatsappText: 'Olá Dr. Vandui, estou com colesterol alto e gostaria de avaliar risco cardíaco.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Quando o colesterol preocupa mais',
        body:
          'O risco é maior quando há LDL muito elevado, diabetes, hipertensão, tabagismo, doença renal, obesidade, histórico familiar de infarto precoce ou doença cardiovascular já conhecida.',
        bullets: ['LDL elevado', 'Histórico familiar de infarto', 'Diabetes ou hipertensão', 'Tabagismo ou doença renal'],
      },
      {
        heading: 'Como o cardiologista avalia risco',
        body:
          'A consulta combina exames, pressão arterial, histórico pessoal e familiar, hábitos, sintomas e risco estimado. A meta de colesterol não é igual para todos os pacientes.',
      },
      {
        heading: 'Tratamento não é só remédio',
        body:
          'Mudanças alimentares, atividade física, sono, controle de peso, cessar tabagismo e medicação quando indicada fazem parte do plano. A decisão deve considerar benefício real e segurança.',
      },
      {
        heading: 'Colesterol e sintomas',
        body:
          'Colesterol alto geralmente não causa sintomas diretos. Por isso, prevenção e acompanhamento são importantes antes que apareçam eventos como infarto ou AVC.',
      },
    ],
    faqs: [
      {
        question: 'Colesterol alto dá sintoma?',
        answer:
          'Na maioria das vezes, não. O risco costuma ser silencioso e precisa ser avaliado por exames e fatores clínicos.',
      },
      {
        question: 'Todo colesterol alto precisa de remédio?',
        answer:
          'Não. A decisão depende do nível de colesterol, risco cardiovascular global, histórico familiar e doenças associadas.',
      },
      {
        question: 'Cardiologista trata colesterol alto?',
        answer:
          'Sim. O cardiologista avalia risco cardiovascular e define metas de controle conforme o perfil do paciente.',
      },
    ],
    relatedSlugs: ['check-up-cardiologico', 'tratamento-hipertensao', 'consulta-com-cardiologista'],
  },
  {
    slug: 'cardiologista-ou-clinico-geral',
    kind: 'answer',
    title: 'Cardiologista ou Clínico Geral | Quando Procurar Cada Um',
    description:
      'Entenda quando procurar cardiologista ou clínico geral para sintomas, prevenção, pressão alta, check-up e risco cardiovascular.',
    keywords:
      'cardiologista ou clinico geral, quando procurar cardiologista, clinico medico ou cardiologista, consulta cardiologica',
    h1: 'Cardiologista ou clínico geral?',
    eyebrow: 'Escolha correta da consulta',
    intro:
      'Clínico geral e cardiologista podem atuar de forma complementar. A escolha depende do sintoma, do risco cardiovascular e do objetivo da consulta.',
    ctaLabel: 'Agendar avaliação cardiológica',
    whatsappText: 'Olá Dr. Vandui, tenho dúvida se preciso de cardiologista e gostaria de agendar avaliação.',
    highlights: authorityProof,
    sections: [
      {
        heading: 'Quando começar pelo clínico geral',
        body:
          'O clínico geral é uma boa porta de entrada para sintomas inespecíficos, acompanhamento global de saúde, revisão inicial de exames e queixas que ainda não apontam claramente para um sistema específico.',
        bullets: ['Queixas gerais', 'Revisão ampla de saúde', 'Sintomas inespecíficos', 'Coordenação de cuidados'],
      },
      {
        heading: 'Quando procurar cardiologista',
        body:
          'Procure cardiologista quando há dor no peito, falta de ar aos esforços, palpitações, desmaio, pressão alta, colesterol elevado, diabetes, histórico familiar de infarto ou necessidade de risco cirúrgico.',
        bullets: ['Dor no peito', 'Palpitações', 'Hipertensão ou colesterol alto', 'Risco cirúrgico cardiológico'],
      },
      {
        heading: 'Como evitar consulta perdida',
        body:
          'Leve exames, lista de medicamentos e histórico familiar. Se a dúvida principal envolve risco cardíaco, sintomas cardiovasculares ou prevenção, a avaliação cardiológica tende a ser mais direcionada.',
      },
      {
        heading: 'Integração entre especialidades',
        body:
          'O melhor cuidado não depende de competição entre especialidades, mas de direcionamento correto. O cardiologista avalia risco e sintomas cardiovasculares; o clínico ajuda a integrar o cuidado global.',
      },
    ],
    faqs: [
      {
        question: 'Posso ir direto ao cardiologista?',
        answer:
          'Sim, especialmente se houver sintomas cardiovasculares, fatores de risco ou necessidade de prevenção cardíaca direcionada.',
      },
      {
        question: 'Clínico geral também trata pressão alta?',
        answer:
          'Sim, mas o cardiologista pode ser mais indicado quando há risco cardiovascular elevado, dificuldade de controle, sintomas ou dúvidas sobre exames e medicação.',
      },
      {
        question: 'Quem devo procurar para check-up cardíaco?',
        answer:
          'Para uma avaliação focada em risco cardiovascular, pressão, colesterol, sintomas e prevenção cardíaca, procure cardiologista.',
      },
    ],
    relatedSlugs: ['consulta-com-cardiologista', 'check-up-cardiologico', 'cardiologista-vila-mariana'],
  },
]


const copyOverrides: Record<string, Partial<SeoLandingPage>> = {
  'cardiologista-em-santos': {
    description:
      'Cardiologista em Santos para avaliação de dor no peito, palpitações, pressão alta, colesterol, check-up e prevenção cardiovascular. CRM-SP 210328.',
    intro:
      'Atendimento cardiológico em Santos para quem precisa investigar sintomas, revisar exames ou cuidar de fatores de risco com orientação médica clara.',
    sections: [
      {
        heading: 'Quando procurar atendimento em Santos',
        body:
          'Procure avaliação se você sente dor no peito, falta de ar, palpitações, cansaço fora do habitual, pressão alta, colesterol alterado ou tem histórico familiar de infarto, AVC ou morte súbita.',
        bullets: ['Dor no peito ou falta de ar', 'Palpitações ou batimentos irregulares', 'Pressão alta ou colesterol alterado', 'Histórico familiar cardiovascular'],
      },
      {
        heading: 'O que a consulta organiza',
        body:
          'A avaliação reúne sintomas, exame físico, pressão arterial, medicamentos em uso, exames anteriores e fatores de risco. Com isso, fica mais claro o que precisa ser acompanhado, tratado ou investigado.',
      },
      {
        heading: 'Unidade em Santos',
        body:
          'O atendimento em Santos fica na Av. Ana Costa, no Gonzaga, com localização prática para pacientes da Baixada Santista. Leve exames recentes, receitas e uma lista dos sintomas que motivaram a consulta.',
        bullets: ['Av. Ana Costa, 228', 'Gonzaga, Santos - SP', 'CEP 11060-003'],
      },
      {
        heading: 'Quando não esperar consulta',
        body: emergencyNotice,
      },
    ],
  },
  'cardiologista-em-santo-andre': {
    description:
      'Cardiologista em Santo André para avaliação de sintomas, prevenção cardiovascular, hipertensão, colesterol, check-up e risco cirúrgico. CRM-SP 210328.',
    intro:
      'Consulta cardiológica em Santo André para pacientes do ABC que precisam entender sintomas, controlar riscos ou se preparar para procedimentos com segurança.',
    sections: [
      {
        heading: 'Motivos comuns para consulta no ABC',
        body:
          'Pressão alta, palpitações, dor no peito, colesterol alterado, diabetes, cansaço aos esforços e avaliação antes de cirurgia estão entre os motivos mais frequentes para procurar cardiologista.',
        bullets: ['Hipertensão arterial', 'Palpitações e arritmias', 'Dor no peito', 'Avaliação pré-operatória'],
      },
      {
        heading: 'Consulta com objetivo definido',
        body:
          'A consulta busca responder perguntas práticas: o sintoma parece cardíaco? O tratamento atual está adequado? Há risco cardiovascular aumentado? Algum exame realmente muda a conduta?',
      },
      {
        heading: 'Unidade em Santo André',
        body:
          'O atendimento fica na Av. Portugal, no Centro de Santo André. A localização facilita o acesso para pacientes da região do ABC que buscam acompanhamento cardiológico presencial.',
        bullets: ['Av. Portugal, 1285', 'Centro, Santo André - SP', 'CEP 09040-011'],
      },
      {
        heading: 'Quando buscar urgência',
        body: emergencyNotice,
      },
    ],
  },
  'cardiologista-vila-mariana': {
    description:
      'Cardiologista na Vila Mariana para consulta, check-up, hipertensão, colesterol, palpitações, dor no peito e prevenção cardiovascular.',
    intro:
      'Atendimento cardiológico na Vila Mariana para investigar sintomas, revisar exames e acompanhar pressão, colesterol e risco cardiovascular em adultos.',
    sections: [
      {
        heading: 'Quando marcar consulta na Vila Mariana',
        body:
          'A consulta é indicada para dor no peito, palpitações, falta de ar aos esforços, pressão alta, colesterol alterado, diabetes, histórico familiar ou dúvidas sobre exames cardíacos.',
        bullets: ['Check-up cardiológico', 'Controle de pressão e colesterol', 'Investigação de sintomas', 'Prevenção cardiovascular'],
      },
      {
        heading: 'Avaliação sem excesso de exames',
        body:
          'A decisão sobre exames parte da história clínica, exame físico e risco individual. O objetivo é evitar tanto atraso diagnóstico quanto pedidos automáticos que não mudam a conduta.',
      },
      {
        heading: 'Unidade na Vila Mariana',
        body:
          'O atendimento fica na Rua Domingos de Morais, próximo a uma das regiões mais acessíveis da zona sul de São Paulo.',
        bullets: ['R. Domingos de Morais, 2781', 'Vila Mariana, São Paulo - SP', 'CEP 04035-001'],
      },
      {
        heading: 'Quando procurar emergência',
        body: emergencyNotice,
      },
    ],
  },
  'dr-vandui-cardiologista': {
    intro:
      'Perfil oficial do Dr. Vandui da Silva dos Santos, médico cardiologista com CRM-SP 210328 e RQE Cardiologia 146567. Esta página centraliza credenciais, formação e áreas de atendimento.',
    ctaLabel: 'Agendar consulta cardiológica',
    sections: [
      {
        heading: 'Credenciais profissionais',
        body:
          'Dr. Vandui da Silva dos Santos é Médico Cardiologista, CRM-SP 210328 e RQE Cardiologia 146567. O site mantém essas informações visíveis para facilitar conferência e reduzir dependência de perfis externos.',
        bullets: ['Médico Cardiologista', 'CRM-SP 210328', 'RQE Cardiologia 146567'],
      },
      {
        heading: 'Formação médica',
        body:
          'A formação inclui Universidade Federal do Triângulo Mineiro, Hospital Ipiranga e Instituto Dante Pazzanese de Cardiologia.',
        bullets: ['UFTM', 'Hospital Ipiranga', 'Instituto Dante Pazzanese de Cardiologia'],
      },
      {
        heading: 'Principais áreas de cuidado',
        body:
          'O atendimento envolve cardiologia clínica, check-up, hipertensão, colesterol, palpitações, dor no peito, risco cirúrgico e prevenção cardiovascular.',
      },
      {
        heading: 'Locais de atendimento',
        body:
          'As consultas são organizadas para Santos, Santo André e Vila Mariana, com páginas locais específicas para endereço, região e orientação de agendamento.',
      },
    ],
  },
  'consulta-com-cardiologista': {
    description:
      'Consulta com cardiologista para investigar sintomas, revisar exames, avaliar pressão, colesterol, palpitações, dor no peito e risco cardiovascular.',
    intro:
      'A consulta cardiológica ajuda a transformar sintomas soltos, exames e dúvidas em um plano de cuidado: o que observar, o que tratar e quando investigar melhor.',
    sections: [
      {
        heading: 'Quando a consulta faz sentido',
        body:
          'Marque avaliação se você tem dor no peito, falta de ar, palpitações, pressão alta, colesterol alterado, diabetes, histórico familiar de doença cardíaca ou vai passar por cirurgia.',
        bullets: ['Sintomas cardiovasculares', 'Fatores de risco', 'Exames alterados', 'Avaliação antes de cirurgia'],
      },
      {
        heading: 'O que acontece na consulta',
        body:
          'O atendimento revisa sua história, mede pressão, avalia medicamentos, examina sintomas e interpreta exames anteriores. A partir disso, o médico define se há necessidade de acompanhamento, tratamento ou novos exames.',
      },
      {
        heading: 'Como chegar melhor preparado',
        body:
          'Leve exames recentes, receitas, lista de medicamentos, alergias e uma descrição simples dos sintomas: quando começaram, quanto duram, o que piora e o que melhora.',
        bullets: ['Exames e receitas', 'Lista de medicamentos', 'Histórico familiar', 'Descrição dos sintomas'],
      },
      {
        heading: 'Quando não esperar consulta',
        body: emergencyNotice,
      },
    ],
    faqs: [
      {
        question: 'Preciso ter sintomas para ir ao cardiologista?',
        answer:
          'Não. A consulta também pode ser preventiva, principalmente em pessoas com pressão alta, colesterol alterado, diabetes, tabagismo ou histórico familiar.',
      },
      {
        question: 'O cardiologista sempre pede exames?',
        answer:
          'Não. Exames são indicados quando ajudam a esclarecer sintomas, medir risco ou definir conduta. A consulta começa pela história clínica e exame físico.',
      },
      {
        question: 'Quando a consulta deve virar urgência?',
        answer:
          'Dor no peito forte, falta de ar importante, desmaio, suor frio ou perda de força devem ser avaliados em serviço de urgência.',
      },
    ],
  },
  'check-up-cardiologico': {
    intro:
      'Check-up cardiológico é uma avaliação de risco. Ele ajuda a identificar pressão, colesterol, diabetes, histórico familiar e hábitos que podem exigir acompanhamento.',
    sections: [
      {
        heading: 'Quem deve considerar o check-up',
        body:
          'Adultos com pressão alta, colesterol alterado, diabetes, tabagismo, obesidade, sedentarismo, histórico familiar de infarto ou AVC, ou sintomas aos esforços podem se beneficiar da avaliação.',
        bullets: ['Pressão alta', 'Colesterol ou diabetes', 'Histórico familiar', 'Sintomas ao esforço'],
      },
      {
        heading: 'O que o check-up deve responder',
        body:
          'A consulta estima risco cardiovascular, revisa exames, mede pressão, avalia hábitos e define se há necessidade de metas, mudanças no tratamento ou exames complementares.',
      },
      {
        heading: 'Exames não são automáticos',
        body:
          'Eletrocardiograma, ecocardiograma, teste ergométrico, Holter, MAPA ou exames laboratoriais podem ser úteis, mas a indicação depende da idade, sintomas e risco individual.',
      },
      {
        heading: 'Prevenção realista',
        body:
          'O check-up não promete risco zero. Ele ajuda a encontrar fatores modificáveis e acompanhar metas de pressão, colesterol, glicemia, peso, sono e atividade física.',
      },
    ],
  },
  'tratamento-hipertensao': {
    intro:
      'Hipertensão precisa de confirmação, acompanhamento e metas possíveis. O objetivo é controlar a pressão e reduzir risco cardiovascular sem ajustes improvisados.',
    sections: [
      {
        heading: 'Quando procurar ajuda para pressão alta',
        body:
          'Procure avaliação quando a pressão se mantém elevada em medidas repetidas, quando há sintomas, diabetes, doença renal, colesterol alto, sobrepeso, tabagismo ou dúvida sobre remédios.',
        bullets: ['Pressão repetidamente elevada', 'Sintomas ou mal-estar', 'Doenças associadas', 'Dúvida sobre medicação'],
      },
      {
        heading: 'Como o acompanhamento é feito',
        body:
          'O acompanhamento considera medidas corretas da pressão, risco cardiovascular, função renal, exames laboratoriais, efeitos colaterais, adesão ao tratamento e hábitos que interferem no controle.',
      },
      {
        heading: 'Tratamento vai além do remédio',
        body:
          'Medicação pode ser necessária, mas sono, sal, peso, atividade física, álcool, tabagismo, estresse e apneia do sono também influenciam a pressão.',
      },
      {
        heading: 'Sinais de urgência',
        body:
          'Pressão alta com dor no peito, falta de ar, confusão, alteração visual, fraqueza, desmaio ou dor de cabeça muito intensa exige avaliação imediata.',
      },
    ],
  },
  'dor-no-peito-quando-procurar-ajuda': {
    intro:
      'Dor no peito não deve ser normalizada. Algumas dores pedem emergência; outras precisam de consulta para entender se há risco cardíaco.',
    sections: [
      {
        heading: 'Sinais de alerta',
        body:
          'Dor forte, súbita, em aperto, associada a falta de ar, suor frio, náusea, desmaio, mal-estar intenso ou irradiação para braço, costas, pescoço ou mandíbula deve ser avaliada em emergência.',
        bullets: ['Dor forte ou súbita', 'Falta de ar', 'Suor frio ou náusea', 'Irradiação para braço, costas ou mandíbula'],
      },
      {
        heading: 'Quando marcar consulta',
        body:
          'Marque cardiologista se a dor é recorrente, aparece no esforço, melhora ao parar, vem com palpitações ou ocorre em quem tem pressão alta, colesterol, diabetes ou histórico familiar.',
      },
      {
        heading: 'O que a consulta investiga',
        body:
          'A avaliação analisa características da dor, fatores de risco, exame físico, eletrocardiograma e exames complementares quando mudam a conduta.',
      },
      {
        heading: 'Não espere se estiver acontecendo agora',
        body: emergencyNotice,
      },
    ],
  },
  'palpitacoes-e-arritmias': {
    intro:
      'Palpitações são a percepção de batimentos fortes, acelerados ou irregulares. A avaliação ajuda a separar episódios benignos de arritmias que precisam investigação.',
    sections: [
      {
        heading: 'Quando palpitações merecem atenção',
        body:
          'Procure avaliação se os episódios são repetidos, prolongados, aparecem no esforço, acordam à noite ou vêm com dor no peito, falta de ar, tontura ou desmaio.',
        bullets: ['Episódios frequentes', 'Batimento irregular', 'Tontura ou desmaio', 'Dor no peito ou falta de ar'],
      },
      {
        heading: 'Possíveis causas',
        body:
          'Cafeína, ansiedade, sono ruim, anemia, alterações hormonais, alguns medicamentos e arritmias podem causar palpitações. O contexto clínico define o grau de preocupação.',
      },
      {
        heading: 'Exames possíveis',
        body:
          'Eletrocardiograma, Holter, exames laboratoriais e ecocardiograma podem ser considerados conforme frequência dos sintomas, risco e achados da consulta.',
      },
      {
        heading: 'Quando é urgência',
        body:
          'Palpitação com dor no peito, falta de ar intensa, desmaio, fraqueza, suor frio ou batimento muito acelerado e sustentado deve ser avaliada em urgência.',
      },
    ],
  },
  'risco-cirurgico-cardiologico': {
    intro:
      'A avaliação de risco cirúrgico cardiológico estima segurança cardiovascular antes de cirurgias e procedimentos, especialmente em pacientes com fatores de risco ou sintomas.',
    sections: [
      {
        heading: 'Quando é indicado',
        body:
          'A avaliação é comum antes de cirurgias eletivas, principalmente em pacientes com hipertensão, diabetes, doença cardíaca prévia, idade avançada, sintomas cardiovasculares ou procedimentos de maior porte.',
        bullets: ['Cirurgia eletiva', 'Hipertensão ou diabetes', 'Doença cardíaca prévia', 'Sintomas cardiovasculares'],
      },
      {
        heading: 'O que levar',
        body:
          'Leve pedido do cirurgião, exames pré-operatórios, lista de medicamentos, relatórios anteriores, alergias e informações sobre doenças já diagnosticadas.',
      },
      {
        heading: 'O objetivo da avaliação',
        body:
          'A consulta estima risco, identifica instabilidades, orienta ajuste de medicamentos e define se algum exame adicional é necessário antes do procedimento.',
      },
      {
        heading: 'Quando a cirurgia pode precisar esperar',
        body:
          'Dor no peito recente, falta de ar importante, arritmia sintomática ou descompensação clínica podem exigir investigação antes da liberação.',
      },
    ],
  },
  'palpitacoes-quando-se-preocupar': {
    intro:
      'Palpitação isolada nem sempre é grave. O ponto é reconhecer quando o padrão muda, se repete ou aparece junto de sintomas que exigem avaliação.',
    sections: [
      {
        heading: 'Quando se preocupar',
        body:
          'Preocupe-se quando a palpitação é frequente, dura muitos minutos, aparece no esforço, vem com batimento irregular ou acompanha dor no peito, falta de ar, tontura ou desmaio.',
        bullets: ['Episódios repetidos', 'Duração prolongada', 'Sintomas associados', 'Histórico cardíaco'],
      },
      {
        heading: 'Quando marcar consulta',
        body:
          'Marque cardiologista se os episódios voltam, atrapalham a rotina, surgem à noite ou ocorrem em quem tem pressão alta, doença cardíaca prévia ou histórico familiar relevante.',
      },
      {
        heading: 'O que pode causar palpitação',
        body:
          'Sono ruim, ansiedade, cafeína, anemia, alterações hormonais, medicamentos e arritmias podem estar envolvidos. A consulta ajuda a decidir o que investigar.',
      },
      {
        heading: 'Quando procurar urgência',
        body:
          'Procure urgência se houver dor no peito, falta de ar importante, desmaio, fraqueza, suor frio ou batimento muito acelerado e sustentado.',
      },
    ],
  },
  'pressao-alta-quando-procurar-ajuda': {
    intro:
      'Pressão alta merece atenção quando se repete, vem com sintomas ou aparece em quem já tem outros fatores de risco cardiovascular.',
    sections: [
      {
        heading: 'Quando procurar ajuda',
        body:
          'Procure avaliação quando a pressão fica alta em medidas repetidas, quando há diabetes, doença renal, colesterol alto, sobrepeso, tabagismo, histórico familiar ou dúvida sobre tratamento.',
        bullets: ['Medidas repetidas elevadas', 'Risco cardiovascular associado', 'Sintomas', 'Tratamento difícil de ajustar'],
      },
      {
        heading: 'Quando é emergência',
        body:
          'Pressão alta com dor no peito, falta de ar, confusão, alteração visual, fraqueza em um lado do corpo, desmaio ou dor de cabeça muito intensa exige pronto atendimento.',
      },
      {
        heading: 'Como acompanhar melhor',
        body:
          'O acompanhamento avalia técnica de medida, exames, função renal, risco cardiovascular, resposta aos remédios e hábitos que interferem na pressão.',
      },
      {
        heading: 'Não ajuste remédio sozinho',
        body:
          'Mudar dose, cortar ou trocar remédio sem orientação pode causar efeito colateral ou deixar a pressão sem controle real. A decisão depende do contexto clínico.',
      },
    ],
  },
  'colesterol-alto-e-risco-cardiaco': {
    intro:
      'Colesterol alto é importante porque aumenta risco cardiovascular ao longo do tempo. A decisão sobre tratamento depende do risco global, não só de um número no exame.',
    sections: [
      {
        heading: 'Quando o colesterol preocupa mais',
        body:
          'O risco costuma ser maior quando há LDL elevado, hipertensão, diabetes, tabagismo, doença renal, obesidade, histórico familiar de infarto precoce ou doença cardiovascular conhecida.',
        bullets: ['LDL alto', 'Pressão alta ou diabetes', 'Tabagismo', 'Histórico familiar de infarto precoce'],
      },
      {
        heading: 'Como o risco é avaliado',
        body:
          'A consulta combina idade, pressão, exames, histórico familiar, doenças associadas, hábitos e sintomas. Por isso, a meta de colesterol não é igual para todos.',
      },
      {
        heading: 'Tratamento com critério',
        body:
          'Mudanças alimentares, atividade física, controle de peso, parar de fumar e medicação quando indicada podem fazer parte do plano. A decisão deve considerar benefício e segurança.',
      },
      {
        heading: 'Por que não esperar sintomas',
        body:
          'Colesterol alto geralmente não causa sintomas. O acompanhamento serve justamente para agir antes de eventos como infarto ou AVC.',
      },
    ],
  },
  'cardiologista-ou-clinico-geral': {
    intro:
      'Clínico geral e cardiologista não competem: eles se complementam. A melhor escolha depende do sintoma, do risco cardiovascular e da pergunta que você precisa responder.',
    sections: [
      {
        heading: 'Quando começar pelo clínico geral',
        body:
          'O clínico geral é uma boa porta de entrada para queixas amplas, revisão geral de saúde, sintomas pouco definidos e acompanhamento de condições que envolvem vários sistemas.',
        bullets: ['Queixas gerais', 'Revisão ampla de saúde', 'Sintomas pouco específicos', 'Coordenação do cuidado'],
      },
      {
        heading: 'Quando procurar cardiologista',
        body:
          'Procure cardiologista quando a dúvida envolve dor no peito, falta de ar aos esforços, palpitações, desmaio, pressão alta, colesterol, diabetes, risco cirúrgico ou histórico familiar cardíaco.',
        bullets: ['Dor no peito', 'Palpitações', 'Pressão alta ou colesterol', 'Risco cirúrgico'],
      },
      {
        heading: 'Como decidir sem perder tempo',
        body:
          'Se a principal preocupação é coração, pressão, colesterol, arritmia, dor no peito ou prevenção cardiovascular, a consulta cardiológica tende a ser mais direta.',
      },
      {
        heading: 'O que levar para qualquer consulta',
        body:
          'Exames recentes, lista de medicamentos, histórico familiar e uma descrição objetiva dos sintomas ajudam tanto o clínico quanto o cardiologista.',
      },
    ],
  },
}

export const seoLandingPages: SeoLandingPage[] = seoLandingPagesBase.map((page) => ({
  ...page,
  ...(copyOverrides[page.slug] ?? {}),
}))

export function getSeoLandingPageBySlug(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug)
}

export function getSeoLandingPageByPath(pathname: string) {
  const normalized = pathname.replace(/^\/+|\/+$/g, '')
  return getSeoLandingPageBySlug(normalized)
}
