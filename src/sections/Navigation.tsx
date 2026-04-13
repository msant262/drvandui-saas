import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HeartPulse, Phone } from 'lucide-react';

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // For non-home pages, always use scrolled style
  const useScrolledStyle = !isHome || isScrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${useScrolledStyle
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="w-full section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${useScrolledStyle ? 'bg-[var(--color-teal)]' : 'bg-white'
                  }`}
              >
                <HeartPulse
                  className={`w-6 h-6 transition-colors ${useScrolledStyle ? 'text-white' : 'text-[var(--color-teal)]'
                    }`}
                />
              </motion.div>
              <div className="hidden sm:block">
                <h1
                  className={`font-bold text-lg leading-tight transition-colors ${useScrolledStyle ? 'text-[var(--color-teal)]' : 'text-white'
                    }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Dr. Vandui
                </h1>
                <p
                  className={`text-xs transition-colors ${useScrolledStyle ? 'text-[var(--color-emerald)]' : 'text-white/80'
                    }`}
                >
                  Cardiologia & Clínica Médica
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
                    <motion.span
                      layoutId="navIndicator"
                      className={`absolute inset-0 rounded-full ${useScrolledStyle ? 'bg-[var(--color-cyan-light)]' : 'bg-white/20'
                        }`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
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
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl overflow-y-auto"
            >
              {/* Close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-semibold text-[var(--color-teal)]">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-[var(--color-teal)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
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
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="https://wa.me/5511976170971?text=Ol%C3%A1%20Dr.%20Vandui%2C%20gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[var(--color-emerald)] text-white rounded-xl font-medium hover:bg-[var(--color-teal)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
