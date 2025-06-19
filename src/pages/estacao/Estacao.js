import React from 'react';
import { motion } from 'framer-motion';
import LinhaDoTempo from '../../components/timeline/Timeline';
import { FaRocket, FaCode, FaDatabase, FaHtml5 } from 'react-icons/fa';
import './Estacao.css';

export default function EstacaoEspacial() {
  const eventos = [
    {
      ano: '2024',
      titulo: 'Início da Jornada',
      descricao: 'Comecei o curso de Desenvolvimento de Sistemas no SENAI Dendezeiros em Salvador, Bahia.',
      icone: <FaRocket />,
    },
    {
      ano: '2024',
      titulo: 'Primeiros Passos',
      descricao: 'Aprendi os fundamentos de lógica de programação e comecei a trabalhar com Java, Python e C#.',
      icone: <FaCode />,
    },
    {
      ano: '2024',
      titulo: 'Explorando o Banco de Dados',
      descricao: 'Introdução ao SQL e bancos de dados relacionais.',
      icone: <FaDatabase />,
    },
    {
      ano: '2025',
      titulo: 'Desenvolvimento Web',
      descricao: 'Iniciei meus estudos em HTML, CSS e JavaScript.',
      icone: <FaHtml5 />,
    },
  ];

  return (
    <motion.div
      className="estacao-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Marte</h1>
      <p>Registros de bordo do meu progresso através do cosmos da programação:</p>
      <LinhaDoTempo eventos={eventos} />
    </motion.div>
  );
}
