import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, Linkedin, MessageCircle, Instagram } from 'lucide-react';
import { seoLandingPages } from '@/data/seoLandingPages';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const localPages = seoLandingPages.filter((page) => page.kind === 'local');
  const servicePages = seoLandingPages.filter((page) => page.kind === 'service').slice(0, 6);
  const answerPages = seoLandingPages.filter((page) => page.kind === 'answer');

  return (
    <footer style={{ backgroundColor: 'var(--color-teal)' }} className="text-white">

      {/* Linha principal — totalmente horizontal */}
      <div className="section-padding py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 justify-between">

          {/* Brand + redes sociais */}
          <div className="flex items-start gap-5 flex-shrink-0">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                <HeartPulse className="w-4 h-4" style={{ color: 'var(--color-teal)' }} />
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Dr. Vandui
                </span>
                <span className="text-[10px] text-white/60">CRM-SP 210328 · RQE 146567</span>
              </div>
            </Link>
            {/* Redes sociais — alinhadas ao centro do ícone */}
            <div className="flex items-center gap-1.5 mt-0.5">
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
              <a
                href="https://instagram.com/vanduisantos.cardio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Dr. Vandui"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links de navegação — centro */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1.5 lg:mx-8">
            {[
              { path: '/', label: 'Início' },
              { path: '/especialidades', label: 'Especialidades' },
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

      <div className="border-t border-white/10">
        <div className="section-padding grid gap-5 py-5 lg:grid-cols-3">
          <nav aria-label="Paginas locais">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Atendimento local
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {localPages.map((page) => (
                <Link
                  key={page.slug}
                  to={`/${page.slug}`}
                  className="text-xs font-medium text-white/80 transition-colors hover:text-white"
                >
                  {page.h1}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Servicos cardiologicos">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Servicos e sintomas
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {servicePages.map((page) => (
                <Link
                  key={page.slug}
                  to={`/${page.slug}`}
                  className="text-xs font-medium text-white/80 transition-colors hover:text-white"
                >
                  {page.h1}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Perguntas frequentes de cardiologia">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Perguntas comuns
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {answerPages.map((page) => (
                <Link
                  key={page.slug}
                  to={`/${page.slug}`}
                  className="text-xs font-medium text-white/80 transition-colors hover:text-white"
                >
                  {page.h1}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom bar mínima */}
      <div className="border-t border-white/10">
        <div className="section-padding py-3 flex flex-col sm:flex-row items-center justify-between gap-1">
          <p className="text-white/40 text-[11px]">
            &copy; {currentYear} Dr. Vandui da Silva dos Santos · CRM-SP 210328 · RQE Cardiologia 146567
          </p>
          <p className="text-white/30 text-[11px]">
            Cardiologista em Santos, Santo André e Vila Mariana
          </p>
        </div>
      </div>

    </footer>
  );
}
