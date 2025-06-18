import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import Tecnologias from '../../components/tecnologias/Tecnologias';
import { motion } from 'framer-motion';
import './Terra.css';

export default function Terra() {
  return (
    <PageWrapper>
      <main className="terra-container">
        <motion.section 
          className="hero-section" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1>Terra</h1>
          <p>
            Aqui começou minha jornada. No planeta azul, nasceu minha paixão por transformar ideias em código e minha missão de explorar o universo do desenvolvimento web.
          </p>
        </motion.section>

        <motion.section 
          className="sobre-section"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>Quem sou eu</h2>
          <p>
            Olá! Sou <strong>Lucas Sena</strong>, estudante de Desenvolvimento de Sistemas no <em>SENAI Dendezeiros</em> (Salvador/BA). Sou movido por desafios e apaixonado por criar soluções digitais que impactam positivamente.
          </p>
        </motion.section>

        <motion.section 
          className="habilidades-section"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div><strong>Frontend:</strong> React, HTML, CSS, JavaScript</div>
            <div><strong>Backend:</strong> Node.js, Java, Python, C#</div>
            <div><strong>Design:</strong> Figma, Canva</div>
            <div><strong>Extras:</strong> Git, GitHub, APIs REST</div>
          </div>
        </motion.section>

        <motion.section 
          className="missao-section"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>Minha Missão</h2>
          <p>
            Assim como astronautas exploram o espaço em busca do desconhecido, vejo cada projeto como uma missão: cheia de descobertas, obstáculos e crescimento. Quero construir experiências únicas, acessíveis e com visão de futuro.
          </p>
        </motion.section>

        <motion.section 
          className="tecnologias-section"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>Tecnologias que uso</h2>
          <Tecnologias />
        </motion.section>
      </main>
    </PageWrapper>
  );
}
