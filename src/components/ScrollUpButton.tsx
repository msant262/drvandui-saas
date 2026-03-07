import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--color-deep-teal) 0%, var(--color-teal) 100%)',
        color: '#ffffff',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(14, 90, 106, 0.45)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
        transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          '0 8px 30px rgba(14, 90, 106, 0.6)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.08)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          '0 4px 20px rgba(14, 90, 106, 0.45)';
        (e.currentTarget as HTMLButtonElement).style.transform = isVisible
          ? 'translateY(0) scale(1)'
          : 'translateY(12px) scale(0.85)';
      }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
