import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Mapa.css';

import Terra from '../../assets/terra.png';
import Saturno from '../../assets/saturno.png';
import Estacao from '../../assets/estacao.png';
import Orion from '../../assets/orion.png';
import Astrax from '../../assets/astrax.png';


export default function Mapa() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const planetas = [
    {
      nome: 'Terra',
      img: Terra,
      rota: '/terra',
      x: '18%',
      y: '50%',
      descricao: 'Clique aqui e conheça um pouco sobre mim.',
    },
    {
      nome: 'Saturno',
      img: Saturno,
      rota: '/saturno',
      x: '69%',
      y: '25%',
      descricao: 'Projetos – veja o que desenvolvi.',
    },
    {
      nome: 'Estação Espacial',
      img: Estacao,
      rota: '/estacao',
      x: '75%',
      y: '70%',
      descricao: 'Linha do tempo – minha jornada como dev.',
    },
    {
      nome: 'Orion',
      img: Orion,
      rota: '/orion',
      x: '34%',
      y: '82%',
      descricao: 'Contatos – formas de me encontrar.',
    },
  ];

  return (
    <>
      
      <motion.div
        className="mapa-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mapa-titulo">Sistema Astrax</h1>

        <br /><br /><br />

        {!isMobile ? (
          <>
            <div className="orbitas">
              <div className="orbita orbita1"></div>
              <div className="orbita orbita2"></div>
              <div className="orbita orbita3"></div>
              <div className="orbita orbita4"></div>
            </div>

            <div className="cenario">
              <div className="astra">
                <img src={Astrax} alt="Astrax" className="astra-img" />
                <div className="astra-descricao">
                  <strong>Astrax</strong><br />
                  Estrela central do sistema. Fonte de energia e conexão entre os mundos.
                </div>
              </div>

              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="star"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}

              {planetas.map(({ nome, img, rota, x, y, descricao }) => (
                <NavLink
                  to={rota}
                  className="planeta"
                  key={nome}
                  style={{ left: x, top: y }}
                >
                  <img src={img} alt={nome} className="planeta-img" />
                  <div className="info">
                    <span className="nome">{nome}</span>
                    <span className="descricao">{descricao}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </>
        ) : (
          <div className="planetas-lista-mobile">
            {planetas.map(({ nome, img, rota, descricao }) => (
              <NavLink
                to={rota}
                className="planeta-mobile"
                key={nome}
                style={{ position: 'static', margin: '12px auto', transform: 'none' }}
              >
                <img
                  src={img}
                  alt={nome}
                  className="planeta-img-mobile"
                  style={{ width: '50px', height: '50px' }}
                />
                <div className="info-mobile">
                  <span className="nome">{nome}</span>
                  <span className="descricao">{descricao}</span>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}
