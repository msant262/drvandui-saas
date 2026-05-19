import { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function OnelivFloatingCTA() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    const mq = window.matchMedia('(max-width: 640px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => {
      clearTimeout(t);
      mq.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <a
      href="https://oneliv.com.br/profissional/vandui-santos"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="Agendar consulta online com Dr. Vandui Santos"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '50%',
        transform: mounted
          ? 'translateX(-50%) translateY(0)'
          : 'translateX(-50%) translateY(140%)',
        opacity: mounted ? 1 : 0,
        zIndex: 9998,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.875rem',
        padding: '1rem 1.5rem 1.1rem 1.25rem',
        borderRadius: '1.25rem',
        background:
          'linear-gradient(135deg, #5b53f0 0%, #4f46e5 55%, #4338ca 100%)',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '0.98rem',
        textDecoration: 'none',
        borderBottom: '5px solid #0D9488',
        boxShadow:
          '0 18px 40px -10px rgba(79, 70, 229, 0.55), 0 6px 14px -4px rgba(0,0,0,0.25)',
        transition:
          'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease, box-shadow 0.25s ease',
        width: isMobile ? 'calc(100vw - 1.25rem)' : 'auto',
        maxWidth: isMobile ? 'calc(100vw - 1.25rem)' : 'calc(100vw - 1.5rem)',
        justifyContent: isMobile ? 'space-between' : 'flex-start',
        lineHeight: 1.2,
        letterSpacing: '0.01em',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = 'translateX(-50%) translateY(-4px)';
        el.style.boxShadow =
          '0 26px 50px -8px rgba(79, 70, 229, 0.7), 0 10px 18px -4px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = 'translateX(-50%) translateY(0)';
        el.style.boxShadow =
          '0 18px 40px -10px rgba(79, 70, 229, 0.55), 0 6px 14px -4px rgba(0,0,0,0.25)';
      }}
    >
      {/* Ícone num círculo destacado */}
      <span
        aria-hidden
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '0.75rem',
          background: 'rgba(255,255,255,0.18)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.25)',
          flexShrink: 0,
        }}
      >
        <Calendar size={20} strokeWidth={2.5} />
      </span>

      {/* Bloco de texto com 2 linhas — eyebrow + título */}
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            opacity: 0.78,
            lineHeight: 1,
            marginBottom: '0.25rem',
          }}
        >
          Agendamento Online
        </span>
        <span style={{ fontSize: '1.02rem', fontWeight: 700, lineHeight: 1.15 }}>
          Agendar consulta com Dr. Vandui
        </span>
      </span>

      {/* Seta indicando ação */}
      <span
        aria-hidden
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.75rem',
          height: '1.75rem',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          marginLeft: '0.25rem',
          flexShrink: 0,
        }}
      >
        <ArrowRight size={16} strokeWidth={2.6} />
      </span>
    </a>
  );
}
