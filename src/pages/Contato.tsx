import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageSEO } from '@/hooks/usePageSEO';
import emailjs from '@emailjs/browser';
import { JsonLdScript } from '@/components/seo/JsonLd';
import {
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  CheckCircle2,
  Building2,
  ExternalLink,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type BookingCTA =
  | { type: 'oneliv'; href: string; label: string }
  | { type: 'whatsapp'; href: string; label: string };

const enderecos: Array<{
  cidade: string;
  endereco: string;
  bairro: string;
  cep: string;
  mapLink: string;
  mapEmbed: string;
  cta: BookingCTA;
}> = [
  {
    cidade: 'Santos',
    endereco: 'Av. Ana Costa, 228 - 20º e 21° pavimentos',
    bairro: 'Gonzaga, Santos - SP',
    cep: '11060-003',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Ana+Costa,+228,+Gonzaga,+Santos+-+SP',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1234567890123!2d-46.3333!3d-23.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1e3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sAv.+Ana+Costa%2C+228+-+Gonzaga%2C+Santos+-+SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
    cta: {
      type: 'whatsapp',
      href: 'https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20unidade%20Santos.',
      label: 'Agendar via WhatsApp',
    },
  },
  {
    cidade: 'Santo André',
    endereco: 'Av. Portugal, 1285 - 2º e 3º pavimento',
    bairro: 'Centro, Santo André - SP',
    cep: '09040-011',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Portugal,+1285,+Centro,+Santo+André+-+SP',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-46.5333!3d-23.6667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1e3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sAv.+Portugal%2C+1285+-+Centro%2C+Santo+Andr%C3%A9+-+SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
    cta: {
      type: 'oneliv',
      href: 'https://oneliv.com.br/profissional/vandui-santos?slug_unidade_selecionada=santo-andre',
      label: 'Agendar online (Santo André)',
    },
  },
  {
    cidade: 'Vila Mariana',
    endereco: 'R. Domingos de Morais, 2781 - 14° Andar',
    bairro: 'Vila Mariana, São Paulo - SP',
    cep: '04035-001',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=R.+Domingos+de+Morais,+2781,+Vila+Mariana,+São+Paulo+-+SP',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-46.6333!3d-23.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1e3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sR.+Domingos+de+Morais%2C+2781+-+Vila+Mariana%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
    cta: {
      type: 'whatsapp',
      href: 'https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20unidade%20Vila%20Mariana.',
      label: 'Agendar via WhatsApp',
    },
  },
];

const faqs = [
  {
    question: 'Quais convênios são aceitos?',
    answer:
      'O atendimento é exclusivamente particular — opção que me permite dedicar o tempo necessário a cada paciente, com consultas mais longas, escuta atenta e acompanhamento próximo. Emito recibo médico detalhado para que você solicite reembolso ao seu plano de saúde (conforme as regras da sua operadora) e para dedução no Imposto de Renda como despesa médica.',
  },
  {
    question: 'Como posso agendar uma consulta?',
    answer:
      'A unidade de Santo André tem agendamento online pela plataforma Oneliv (botão no card acima). Para as unidades de Santos e Vila Mariana — e para qualquer dúvida sobre horários, valores ou primeira consulta — fale comigo pelo WhatsApp (11) 9 7617-0971. Costumo responder pessoalmente em até algumas horas no horário comercial.',
  },
  {
    question: 'Qual a diferença entre consulta presencial e teleconsulta?',
    answer:
      'A primeira consulta é sempre presencial, pois inclui exame físico completo (ausculta cardíaca, aferição de pressão e medidas antropométricas) — etapas essenciais para um diagnóstico cardiológico seguro. As teleconsultas ficam reservadas para retornos, ajuste de medicação, revisão de exames e acompanhamento de pacientes já conhecidos.',
  },
  {
    question: 'Quanto tempo dura a consulta e o que devo levar?',
    answer:
      'A primeira consulta dura cerca de 50 a 60 minutos e inclui anamnese detalhada, exame físico e plano terapêutico individualizado. Leve documento com foto, lista atualizada de medicamentos em uso (com doses), exames recentes (sangue, eletrocardiograma, ecocardiograma, holter, MAPA, teste ergométrico — o que tiver) e relatórios de outros médicos que acompanham você.',
  },
  {
    question: 'Em quanto tempo consigo uma vaga?',
    answer:
      'Procuro manter agenda ágil, com vagas geralmente disponíveis em 1 a 2 semanas. Para casos urgentes ou sintomas agudos (dor torácica, falta de ar súbita, palpitações intensas), envie uma mensagem pelo WhatsApp informando a situação — busco abrir um horário o quanto antes.',
  },
  {
    question: 'O recibo serve para reembolso do plano de saúde?',
    answer:
      'Sim. Emito recibo médico com CRM, CPF, descrição do serviço e CID quando indicado — documento aceito pela maioria dos convênios para reembolso parcial conforme o seu plano. Cada operadora tem suas próprias regras de valor reembolsado e prazo de envio; consulte seu plano para os detalhes.',
  },
];

const socialLinks = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta.',
    color: 'bg-green-500',
  },
  {
    icon: Instagram,
    label: '@vanduisantos.cardio',
    href: 'https://instagram.com/vanduisantos.cardio',
    color: 'bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vandui-santos-181225137/',
    color: 'bg-blue-600',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.drvandui.com.br/' },
    { '@type': 'ListItem', position: 2, name: 'Contato', item: 'https://www.drvandui.com.br/contato' },
  ],
}

const physicianContactSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.drvandui.com.br/#physician',
  name: 'Dr. Vandui da Silva dos Santos',
  url: 'https://www.drvandui.com.br/',
  telephone: '+55-11-97617-0971',
  email: 'contato@drvandui.com.br',
  medicalSpecialty: ['Cardiology', 'InternalMedicine'],
  identifier: [
    {
      '@type': 'PropertyValue',
      propertyID: 'CRM-SP',
      value: '210328',
    },
    {
      '@type': 'PropertyValue',
      propertyID: 'RQE Cardiologia',
      value: '146567',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'CRM-SP 210328',
      credentialCategory: 'Registro profissional médico',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'RQE Cardiologia 146567',
      credentialCategory: 'Registro de Qualificação de Especialista em Cardiologia',
    },
  ],
  areaServed: ['Santos, SP', 'Santo André, SP', 'Vila Mariana, São Paulo, SP'],
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.drvandui.com.br/contato#contact-page',
  url: 'https://www.drvandui.com.br/contato',
  name: 'Contato e agendamento - Dr. Vandui',
  description:
    'Canais oficiais para agendar consulta cardiológica particular com o Dr. Vandui em Santos, Santo André e Vila Mariana.',
  about: {
    '@type': 'Physician',
    '@id': 'https://www.drvandui.com.br/#physician',
    name: 'Dr. Vandui da Silva dos Santos',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Agendamento de consulta cardiológica',
    telephone: '+55-11-97617-0971',
    email: 'contato@drvandui.com.br',
    areaServed: ['Santos, SP', 'Santo André, SP', 'Vila Mariana, São Paulo, SP'],
    availableLanguage: ['Portuguese'],
  },
}

const medicalBusinessSchemas = enderecos.map((unidade) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `https://www.drvandui.com.br/contato#unidade-${unidade.cidade.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`,
  name: `Dr. Vandui - Cardiologista em ${unidade.cidade}`,
  url: 'https://www.drvandui.com.br/contato',
  telephone: '+55-11-97617-0971',
  email: 'contato@drvandui.com.br',
  priceRange: '$$',
  medicalSpecialty: 'Cardiology',
  hasMap: unidade.mapLink,
  areaServed: unidade.bairro,
  employee: {
    '@type': 'Physician',
    '@id': 'https://www.drvandui.com.br/#physician',
    name: 'Dr. Vandui da Silva dos Santos',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: unidade.endereco,
    addressLocality: unidade.cidade === 'Vila Mariana' ? 'São Paulo' : unidade.cidade,
    addressRegion: 'SP',
    postalCode: unidade.cep,
    addressCountry: 'BR',
  },
}))

export function Contato() {
  usePageSEO({
    title: 'Contato — Cardiologista em Santos, Santo André e Vila Mariana',
    description:
      'Agende sua consulta com o Dr. Vandui — Cardiologia, Prevenção Cardiovascular e Clínica Médica em Santos, Santo André e Vila Mariana. WhatsApp e agendamento online.',
    canonical: '/contato',
    keywords:
      'agendar consulta cardiologista, cardiologista santos, cardiologista santo andré, cardiologista vila mariana, contato Dr. Vandui',
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    empresa: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const SERVICE_ID = 'Hostinger';
    const PUBLIC_KEY = 'mjPv0-Z1pErGbyOUL';

    try {
      // 1. Envia para o Dr. Vandui (Template: formcont)
      const paraMim = emailjs.send(
        SERVICE_ID,
        'formcont',
        {
          nome_completo: formData.name,
          email_usuario: formData.email,
          empresa: formData.empresa || 'Não informada',
          telefone: formData.phone || 'Não informado',
          mensagem: formData.message,
          email: 'contato@drvandui.com.br',
        },
        PUBLIC_KEY
      );

      // 2. Envia para o CLIENTE (Template: contcliente)
      const paraCliente = emailjs.send(
        SERVICE_ID,
        'contcliente',
        {
          name: formData.name,
          email: formData.email,
        },
        PUBLIC_KEY
      );

      await Promise.all([paraMim, paraCliente]);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', empresa: '', phone: '', message: '' });

      // Reset após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Erro no envio:', err);
      setError('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <JsonLdScript id="schema-contato-faq" data={faqSchema} />
      <JsonLdScript id="schema-contato-breadcrumb" data={breadcrumbSchema} />
      <JsonLdScript id="schema-contato-physician" data={physicianContactSchema} />
      <JsonLdScript id="schema-contato-page" data={contactPageSchema} />
      {medicalBusinessSchemas.map((schema, index) => (
        <JsonLdScript key={schema['@id']} id={`schema-contato-unidade-${index}`} data={schema} />
      ))}
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
                Fale Comigo
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-title-contrast"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Entre em Contato
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
                Tire suas dúvidas ou agende uma consulta — atendimento em Santos, Santo André e Vila Mariana.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              style={{ backgroundColor: 'var(--color-white-blue)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: 'var(--color-mint)' }}
              >
                <Phone className="w-7 h-7" style={{ color: 'var(--color-emerald)' }} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
              >
                Telefone / WhatsApp
              </h3>
              <p className="font-medium" style={{ color: 'var(--color-teal)' }}>(11) 9 7617-0971</p>
              <p className="text-[#666] text-sm">Atendimento por mensagem</p>
              <a
                href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-medium text-sm hover:underline"
                style={{ color: 'var(--color-teal)' }}
              >
                Enviar mensagem
                <Send className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              style={{ backgroundColor: 'var(--color-white-blue)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: 'var(--color-mint)' }}
              >
                <Mail className="w-7 h-7" style={{ color: 'var(--color-emerald)' }} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
              >
                E-mail
              </h3>
              <p className="font-medium" style={{ color: 'var(--color-teal)' }}>contato@drvandui.com.br</p>
              <p className="text-[#666] text-sm">Resposta em até 24h</p>
              <a
                href="mailto:contato@drvandui.com.br"
                className="inline-flex items-center gap-2 mt-4 font-medium text-sm hover:underline"
                style={{ color: 'var(--color-teal)' }}
              >
                Enviar e-mail
                <Send className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              style={{ backgroundColor: 'var(--color-white-blue)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: 'var(--color-mint)' }}
              >
                <Clock className="w-7 h-7" style={{ color: 'var(--color-emerald)' }} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
              >
                Horário de Atendimento
              </h3>
              <p className="font-medium" style={{ color: 'var(--color-teal)' }}>Segunda a Sexta</p>
              <p className="text-[#666] text-sm">08:00 - 18:00</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: 'var(--color-cyan-light)', color: 'var(--color-teal)' }}
              >
                Envie uma Mensagem
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
              >
                Formulário de Contato
              </h2>
              <p className="text-[#666] mt-4">
                Preencha o formulário abaixo e retornarei o mais breve possível.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl p-8 text-center"
                  style={{ backgroundColor: 'var(--color-mint)' }}
                >
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--color-emerald)' }} />
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--color-emerald)', fontFamily: 'Poppins, sans-serif' }}
                  >
                    Mensagem enviada!
                  </h3>
                  <p style={{ color: 'var(--color-teal)' }}>
                    Agradeço seu contato. Você receberá uma confirmação por e-mail e retornarei em breve.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" style={{ color: 'var(--color-teal)' }}>
                        Nome completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="bg-white border-gray-200 focus:border-[var(--color-teal)] focus:ring-[var(--color-teal)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" style={{ color: 'var(--color-teal)' }}>
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="bg-white border-gray-200 focus:border-[var(--color-teal)] focus:ring-[var(--color-teal)]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="empresa" style={{ color: 'var(--color-teal)' }}>
                        Empresa
                      </Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Nome da empresa (opcional)"
                          className="bg-white border-gray-200 focus:border-[var(--color-teal)] focus:ring-[var(--color-teal)] pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" style={{ color: 'var(--color-teal)' }}>
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 9 9999-9999"
                        className="bg-white border-gray-200 focus:border-[var(--color-teal)] focus:ring-[var(--color-teal)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" style={{ color: 'var(--color-teal)' }}>
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Como posso ajudar?"
                      required
                      rows={5}
                      className="bg-white border-gray-200 focus:border-[var(--color-teal)] focus:ring-[var(--color-teal)] resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 rounded-xl text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white py-6 rounded-xl font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: 'var(--color-teal)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar mensagem
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links & CTA */}
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-title-contrast"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Conecte-se Comigo
            </h2>
            <p className="text-xl mb-8" style={{ color: 'rgba(224, 247, 250, 0.9)' }}>
              Siga-me nas redes sociais ou entre em contato diretamente pelo WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 ${social.color} rounded-xl font-semibold text-white hover:scale-105 transition-transform`}
                >
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Endereços Section com Mapas */}
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
              style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}
            >
              Onde Atendo
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
            >
              Nossos Endereços
            </h2>
            <p className="text-[#666] mt-4 max-w-2xl mx-auto">
              Atendimento em três localidades para sua conveniência.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {enderecos.map((endereco, index) => (
              <motion.div
                key={endereco.cidade}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Mapa */}
                  <div className="lg:col-span-2 h-64 lg:h-80">
                    <iframe
                      src={endereco.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa - ${endereco.cidade}`}
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  {/* Informações */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'var(--color-mint)' }}
                    >
                      <Building2 className="w-6 h-6" style={{ color: 'var(--color-emerald)' }} />
                    </div>
                    <h3
                      className="text-2xl font-semibold mb-4"
                      style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {endereco.cidade}
                    </h3>
                    <div className="space-y-2 text-[#666] text-sm mb-6">
                      <p>{endereco.endereco}</p>
                      <p>{endereco.bairro}</p>
                      <p>CEP: {endereco.cep}</p>
                    </div>
                    <a
                      href={endereco.cta.href}
                      target="_blank"
                      rel={endereco.cta.type === 'oneliv' ? 'nofollow noopener noreferrer' : 'noopener noreferrer'}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg mb-3"
                      style={{
                        backgroundColor:
                          endereco.cta.type === 'whatsapp'
                            ? '#25D366'
                            : 'var(--color-teal)',
                      }}
                    >
                      {endereco.cta.type === 'whatsapp' ? (
                        <MessageCircle className="w-4 h-4" />
                      ) : (
                        <Calendar className="w-4 h-4" />
                      )}
                      {endereco.cta.label}
                    </a>
                    <a
                      href={endereco.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-sm hover:underline mt-auto"
                      style={{ color: 'var(--color-teal)' }}
                    >
                      Abrir no Google Maps
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-emerald)' }}
            >
              Dúvidas Frequentes
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
            >
              Perguntas e Respostas
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-[var(--color-cyan-light)]/40 transition-colors"
                  >
                    <h3
                      className="text-base sm:text-lg font-semibold"
                      style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-[var(--color-emerald)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[#666] leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      </motion.main>
    </>
  );
}
