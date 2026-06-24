import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, Phone, Instagram, CalendarDays, MessageCircle, ArrowRight } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Início' },
  { path: '/especialidades', label: 'Especialidades' },
  { path: '/contato', label: 'Contato' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For non-home pages, always use scrolled style
  const useScrolledStyle = !isHome || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${useScrolledStyle
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="w-full section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
              <Link
                to="/"
                aria-label="Página inicial do Dr. Vandui, Cardiologia e Clínica Médica"
                className="flex items-center gap-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform transition-colors group-hover:scale-105 ${useScrolledStyle ? 'bg-[var(--color-teal)]' : 'bg-white'
                  }`}
              >
                <HeartPulse
                  className={`w-6 h-6 transition-colors ${useScrolledStyle ? 'text-white' : 'text-[var(--color-teal)]'
                    }`}
                />
              </div>
              <div className="hidden sm:block">
                <span
                  className={`font-bold text-lg leading-tight transition-colors ${useScrolledStyle ? 'text-[var(--color-teal)]' : 'text-white'
                    }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Dr. Vandui
                </span>
                <p
                  className={`text-xs transition-colors ${useScrolledStyle ? 'text-[var(--color-emerald)]' : 'text-white/80'
                    }`}
                >
                  CRM-SP 210328 · RQE 146567
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-full ${location.pathname === link.path
                      ? useScrolledStyle
                        ? 'text-[var(--color-teal)]'
                        : 'text-white'
                      : useScrolledStyle
                        ? 'text-[#666] hover:text-[var(--color-teal)]'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {location.pathname === link.path && (
                    <span
                      className={`absolute inset-0 rounded-full transition-colors ${useScrolledStyle ? 'bg-[var(--color-cyan-light)]' : 'bg-white/20'
                        }`}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://instagram.com/vanduisantos.cardio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Dr. Vandui — @vanduisantos.cardio"
                title="@vanduisantos.cardio"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 ${useScrolledStyle
                    ? 'bg-[var(--color-cyan-light)] text-[var(--color-teal)] hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white'
                    : 'bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:border-transparent'
                  }`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${useScrolledStyle
                    ? 'bg-[var(--color-emerald)] text-white hover:bg-[var(--color-teal)]'
                    : 'bg-white text-[var(--color-teal)] hover:bg-[var(--color-cyan-light)]'
                  }`}
              >
                <Phone className="w-4 h-4" />
                Agendar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className={`lg:hidden p-2 rounded-xl transition-colors ${useScrolledStyle
                  ? 'text-[var(--color-teal)] hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
                }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-fade-in">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl overflow-y-auto animate-slide-in-right"
            >
              {/* Close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-semibold text-[var(--color-teal)]">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="p-2 rounded-lg hover:bg-gray-100 text-[var(--color-teal)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                            ? 'bg-[var(--color-cyan-light)] text-[var(--color-teal)]'
                            : 'text-[#666] hover:bg-gray-100 hover:text-[var(--color-teal)]'
                          }`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <a
                    href="https://oneliv.com.br/profissional/vandui-santos"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[var(--color-teal)] text-white rounded-xl font-semibold hover:bg-[var(--color-emerald)] transition-colors shadow-md"
                  >
                    <CalendarDays className="w-5 h-5" />
                    Agendar Consulta
                  </a>
                  <a
                    href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1ebe57] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <Link
                    to="/contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-[var(--color-teal)]/30 text-[var(--color-teal)] rounded-xl font-semibold hover:bg-[var(--color-cyan-light)] transition-colors"
                  >
                    Outras Formas
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://instagram.com/vanduisantos.cardio"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-medium text-white transition-opacity hover:opacity-90 bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]"
                  >
                    <Instagram className="w-5 h-5" />
                    @vanduisantos.cardio
                  </a>
                </div>
              </div>
            </div>
        </div>
      )}
    </>
  );
}
