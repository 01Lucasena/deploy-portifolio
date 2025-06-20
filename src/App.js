import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';


import Header from './components/header/Header';
import MenuBar from './components/menu-bar/MenuBar';
import Footer from './components/footer/Footer';

import Mapa from './pages/mapa/Mapa';
import Terra from './pages/terra/Terra';
import Saturno from './pages/saturno/Saturno';
import Estacao from './pages/estacao/Estacao';
import Orion from './pages/orion/Orion';

function BackgroundWrapper({ children }) {
  const location = useLocation();

  let bgClass = 'default-bg';
  if (location.pathname.includes('/estacao')) bgClass = 'estacao-bg';
  else if (location.pathname.includes('/mapa')) bgClass = 'mapa-bg';
  else if (location.pathname.includes('/orion')) bgClass = 'orion-bg';
  else if (location.pathname.includes('/saturno')) bgClass = 'saturno-bg';
  else if (location.pathname.includes('/terra')) bgClass = 'terra-bg';

  return <div className={bgClass}>{children}</div>;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Mapa />} />
        <Route path="/terra" element={<Terra />} />
        <Route path="/saturno" element={<Saturno />} />
        <Route path="/estacao" element={<Estacao />} />
        <Route path="/orion" element={<Orion />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <BackgroundWrapper>
      <AnimatePresence>
        {location.pathname && (
          <motion.div
            key="menu-bar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>
      
      <MenuBar />

      {/* Envolvendo só o conteúdo das rotas */}
      <div id="main-content">
        <AnimatedRoutes />
      </div>

      <Footer />
    </BackgroundWrapper>
  );
}


export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
