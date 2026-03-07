import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartPulse, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-teal)' }} className="text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <HeartPulse className="w-6 h-6" style={{ color: 'var(--color-teal)' }} />
              </div>
              <div>
                <h3
                  className="font-bold text-lg leading-tight"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Dr. Vandui
                </h3>
                <p className="text-xs text-white/70">Cardiologia & UTI</p>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Médico cardiologista dedicado ao cuidado técnico e humano de
              excelência, sempre pautado nas melhores evidências científicas.
            </p>
            <a
              href="https://www.linkedin.com/in/vandui-santos-181225137/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="font-semibold text-lg mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Início' },
                { path: '/perfil', label: 'Perfil Profissional' },
                { path: '/especialidades', label: 'Especialidades' },
                { path: '/publicacoes', label: 'Publicações' },
                { path: '/pesquisas', label: 'Pesquisas' },
                { path: '/eventos', label: 'Eventos' },
                { path: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Especialidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="font-semibold text-lg mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Especialidades
            </h4>
            <ul className="space-y-3">
              {[
                'Cardiologia',
                'Terapia Intensiva',
                'Emergências Médicas',
                'Clínica Médica',
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4
              className="font-semibold text-lg mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-emerald)' }} />
                <span className="text-white/80 text-sm">
                  São Paulo e Região
                  <br />
                  Santos, Santo André, Vila Mariana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-emerald)' }} />
                <a
                  href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  (11) 9 7617-0971
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-emerald)' }} />
                <a
                  href="mailto:contato@drvandui.com.br"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  contato@drvandui.com.br
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {currentYear} Dr. Vandui da Silva dos Santos. Todos os
              direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
