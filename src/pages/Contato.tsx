import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Linkedin,
  CheckCircle2,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const enderecos = [
  {
    cidade: 'Santos',
    endereco: 'Av. Ana Costa, 228 - 20º e 21° pavimentos',
    bairro: 'Gonzaga, Santos - SP',
    cep: '11060-003',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Ana+Costa,+228,+Gonzaga,+Santos+-+SP',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1234567890123!2d-46.3333!3d-23.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1e3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sAv.+Ana+Costa%2C+228+-+Gonzaga%2C+Santos+-+SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
  },
  {
    cidade: 'Santo André',
    endereco: 'Av. Portugal, 1285 - 2º e 3º pavimento',
    bairro: 'Centro, Santo André - SP',
    cep: '09040-011',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Portugal,+1285,+Centro,+Santo+André+-+SP',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-46.5333!3d-23.6667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1e3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sAv.+Portugal%2C+1285+-+Centro%2C+Santo+Andr%C3%A9+-+SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
  },
  {
    cidade: 'Vila Mariana',
    endereco: 'R. Domingos de Morais, 2781 - 14° Andar',
    bairro: 'Vila Mariana, São Paulo - SP',
    cep: '04035-001',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=R.+Domingos+de+Morais,+2781,+Vila+Mariana,+São+Paulo+-+SP',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-46.6333!3d-23.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1e3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sR.+Domingos+de+Morais%2C+2781+-+Vila+Mariana%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
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
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vandui-santos-181225137/',
    color: 'bg-blue-600',
  },
];

export function Contato() {
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
                Estou à disposição para atender suas necessidades. Entre em
                contato para agendar uma consulta ou tirar suas dúvidas.
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
              <p className="text-[#666] text-sm">Disponível para agendamentos</p>
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
                Fale Comigo
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

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Como posso agendar uma consulta?',
                answer:
                  'Você pode agendar sua consulta pelo WhatsApp (11) 9 7617-0971, por e-mail (contato@drvandui.com.br) ou preenchendo o formulário de contato nesta página.',
              },
              {
                question: 'Quais convênios são aceitos?',
                answer:
                  'Atendo particulares e diversos convênios. Entre em contato para verificar se seu plano de saúde é aceito.',
              },
              {
                question: 'Qual o tempo médio de espera para consulta?',
                answer:
                  'O tempo de espera varia conforme a demanda, mas em geral conseguimos agendar consultas dentro de 1-2 semanas.',
              },
              {
                question: 'O atendimento é presencial ou online?',
                answer:
                  'Ofereço ambas as modalidades. A consulta online é ideal para acompanhamentos e esclarecimento de dúvidas.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--color-teal)', fontFamily: 'Poppins, sans-serif' }}
                >
                  {faq.question}
                </h3>
                <p className="text-[#666]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
