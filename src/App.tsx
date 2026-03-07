import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';
import { Home } from './pages/Home';
import { Perfil } from './pages/Perfil';
import { Especialidades } from './pages/Especialidades';
import { Contato } from './pages/Contato';
import { Publicacoes } from './pages/Publicacoes';
import { Eventos } from './pages/Eventos';
import { Pesquisas } from './pages/Pesquisas';
import { ScrollUpButton } from './components/ScrollUpButton';
import './App.css';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/pesquisas" element={<Pesquisas />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
        <ScrollUpButton />
      </div>
    </Router>
  );
}

export default App;
