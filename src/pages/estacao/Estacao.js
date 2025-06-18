import React from 'react';
import { motion } from 'framer-motion';
import './Estacao.css';

export default function EstacaoEspacial() {
  const eventos = [
    {
      ano: '2024',
      titulo: 'Início da Jornada',
      descricao: 'Comecei o curso de Desenvolvimento de Sistemas no SENAI Dendezeiros em Salvador, Bahia.',
    },
    {
      ano: '2024',
      titulo: 'Primeiros Passos',
      descricao: 'Aprendi os fundamentos de lógica de programação e comecei a trabalhar com Java, Python e C#.',
    },
    {
      ano: '2024',
      titulo: 'Explorando o Banco de Dados',
      descricao: 'Introdução ao SQL e bancos de dados relacionais. Criei meu primeiro banco de dados para um projeto simples.',
    },
    {
      ano: '2025',
      titulo: 'Desenvolvimento Web',
      descricao: 'Iniciei meus estudos em HTML, CSS e JavaScript, criando páginas web interativas.',
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
      <h1>Estação Espacial / Jornada do Desenvolvedor</h1>
      <p>Registros de bordo do meu progresso através do cosmos da programação:</p>

      <div className="timeline-container">
        <div className="timeline-line" />
        {eventos.map((evento, index) => (
          <motion.div
            key={index}
            className={`evento ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="conteudo">
              <span className="ano">{evento.ano}</span>
              <h3>{evento.titulo}</h3>
              <p>{evento.descricao}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}