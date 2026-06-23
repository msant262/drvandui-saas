import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';
import { ScrollUpButton } from './components/ScrollUpButton';
import { OnelivFloatingCTA } from './components/OnelivFloatingCTA';
import './App.css';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Especialidades = lazy(() =>
  import('./pages/Especialidades').then((module) => ({ default: module.Especialidades }))
)
const Contato = lazy(() => import('./pages/Contato').then((module) => ({ default: module.Contato })))

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-white-blue)' }}>
        <Navigation />
        <Suspense fallback={<div aria-hidden="true" className="sr-only" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contato" element={<Contato />} />
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
