import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, Linkedin, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-teal)' }} className="text-white">

      {/* Linha principal — totalmente horizontal */}
      <div className="section-padding py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 justify-between">

          {/* Brand + redes sociais */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <HeartPulse className="w-4 h-4" style={{ color: 'var(--color-teal)' }} />
              </div>
              <div>
                <span className="font-bold text-sm block leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Dr. Vandui
                </span>
                <span className="text-[10px] text-white/60 leading-tight">Cardiologia &amp; UTI</span>
              </div>
            </Link>
            {/* Redes sociais ao lado do logo */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://www.linkedin.com/in/vandui-santos-181225137/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn do Dr. Vandui"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp do Dr. Vandui"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links de navegação — centro */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1.5 lg:mx-8">
            {[
              { path: '/', label: 'Início' },
              { path: '/perfil', label: 'Perfil' },
              { path: '/especialidades', label: 'Especialidades' },
              { path: '/publicacoes', label: 'Publicações' },
              { path: '/pesquisas', label: 'Pesquisas' },
              { path: '/eventos', label: 'Eventos' },
              { path: '/contato', label: 'Contato' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/70 hover:text-white transition-colors text-xs"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contato + redes — direita */}
          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            {/* Telefone */}
            <a
              href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-emerald)' }} />
              (11) 9 7617-0971
            </a>
            {/* E-mail */}
            <a
              href="mailto:contato@drvandui.com.br"
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-emerald)' }} />
              contato@drvandui.com.br
            </a>
            {/* Localização */}
            <span className="hidden xl:flex items-center gap-1.5 text-white/60 text-xs">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-emerald)' }} />
              Santos · Santo André · Vila Mariana
            </span>

          </div>
        </div>
      </div>

      {/* Bottom bar mínima */}
      <div className="border-t border-white/10">
        <div className="section-padding py-3 flex flex-col sm:flex-row items-center justify-between gap-1">
          <p className="text-white/40 text-[11px]">
            &copy; {currentYear} Dr. Vandui da Silva dos Santos · CRM-SP
          </p>
          <p className="text-white/30 text-[11px]">
            Cardiologista · Terapia Intensiva · Emergências Médicas
          </p>
        </div>
      </div>

    </footer>
  );
}
