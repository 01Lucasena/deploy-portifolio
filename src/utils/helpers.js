// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Mapa from './pages/Mapa';
import Terra from './pages/Terra';
import Saturno from './pages/Saturno';
import Estacao from './pages/Estacao';
import Orion from './pages/Orion';
import Base from './pages/Base';

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Mapa />} />
          <Route path="/terra" element={<Terra />} />
          <Route path="/saturno" element={<Saturno />} />
          <Route path="/estacao" element={<Estacao />} />
          <Route path="/orion" element={<Orion />} />
          <Route path="/base" element={<Base />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
