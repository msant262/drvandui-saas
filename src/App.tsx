import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';
import { ScrollUpButton } from './components/ScrollUpButton';
import { OnelivFloatingCTA } from './components/OnelivFloatingCTA';
import { seoLandingPages } from './data/seoLandingPages';
import './App.css';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Especialidades = lazy(() =>
  import('./pages/Especialidades').then((module) => ({ default: module.Especialidades }))
)
const Contato = lazy(() => import('./pages/Contato').then((module) => ({ default: module.Contato })))
const SEOLandingPage = lazy(() =>
  import('./pages/SEOLandingPage').then((module) => ({ default: module.SEOLandingPage }))
)

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void
  }
}

// Componente para fazer scroll ao topo quando a rota muda
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}

function ConversionTracker() {
  useEffect(() => {
    const sendEvent = (eventName: string, params: Record<string, unknown>) => {
      window.gtag?.('event', eventName, params)
      window.dataLayer?.push({ event: eventName, ...params })
    }

    const getClickEventName = (href: string) => {
      if (href.includes('wa.me') || href.includes('whatsapp')) return 'click_whatsapp'
      if (href.includes('oneliv.com.br')) return 'click_agendamento'
      if (href.startsWith('tel:')) return 'click_phone'
      if (href.startsWith('mailto:')) return 'click_email'
      if (href.includes('google.com/maps') || href.includes('google.com/search/?api=1&query=')) return 'click_maps'
      return null
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null
      const link = target?.closest('a[href]') as HTMLAnchorElement | null
      if (!link) return

      const eventName = getClickEventName(link.href)
      if (!eventName) return

      sendEvent(eventName, {
        link_url: link.href,
        link_text: link.textContent?.trim().replace(/\s+/g, ' ').slice(0, 120) ?? '',
        page_path: window.location.pathname,
      })
    }

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target instanceof HTMLFormElement ? event.target : null
      sendEvent('submit_contact_form', {
        form_id: form?.id ?? '',
        form_name: form?.getAttribute('name') ?? '',
        page_path: window.location.pathname,
      })
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('submit', handleSubmit, true)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('submit', handleSubmit, true)
    }
  }, [])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ConversionTracker />
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <Navigation />
        <Suspense fallback={<div aria-hidden="true" className="sr-only" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contato" element={<Contato />} />
            {seoLandingPages.map((page) => (
              <Route key={page.slug} path={`/${page.slug}`} element={<SEOLandingPage />} />
            ))}
          </Routes>
        </Suspense>
        <Footer />
        <ScrollUpButton />
        <OnelivFloatingCTA />
      </div>
    </Router>
  );
}

export default App;
