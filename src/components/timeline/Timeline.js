import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';


export default function Timeline({ eventos }) {
  return (
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
            <div className="icone">{evento.icone}</div>
            <span className="ano">{evento.ano}</span>
            <h3>{evento.titulo}</h3>
            <p>{evento.descricao}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
