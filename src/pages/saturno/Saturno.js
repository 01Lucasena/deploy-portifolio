import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Saturno.css';
import imagemJogo from '../../assets/prototipo-jogo.png';
import imagemPortfolio from '../../assets/site_img.png';

export default function Saturno() {
  const [ativo, setAtivo] = useState(null);

  const projetos = [
    {
      id: 1,
      titulo: "Guardiões da Segurança (Protótipo)",
      descricao: "Projeto do SENAI realizado com colaboração em equipe",
      tecnologias: ["Figma", "Trabalho em Equipe", "Prototipagem"],
      imagem: imagemJogo,
      detalhes: "Em desenvolvimento: Um jogo direcionado a segurança do trabalho, uma forma intuitiva e divertida de aprender sobre segurança no ambiente de trabalho. O protótipo foi criado no Figma e é um trabalho colaborativo do SENAI.",
    },
    {
      id: 2,
      titulo: "Portfólio Intergaláctico",
      descricao: "Este próprio site, com navegação espacial, animações suaves e interatividade.",
      imagem: imagemPortfolio,
      tecnologias: ["React", "Framer Motion", "CSS", "Design Responsivo"],
      detalhes: "Criado como um projeto pessoal para exibir minha jornada como desenvolvedor com estilo e identidade única.",
    },
  ];

  const toggleProjeto = (id) => {
    setAtivo(ativo === id ? null : id);
  };

  return (
    <motion.div
      className="saturno-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Saturno / Projetos Orbitais</h1>
      <p>
        Aqui você encontrará algumas das minhas criações mais importantes, cada uma como uma estação em órbita ao redor de Saturno.
      </p>
      <div className="projetos-container">
        {projetos.map((projeto) => (
          <div key={projeto.id} className={`projeto-card ${ativo === projeto.id ? 'ativo' : ''}`}>
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
            <div className="tags">
              {projeto.tecnologias.map((tech, index) => (
                <span key={index} className="tag">{tech}</span>
              ))}
            </div>
            <button onClick={() => toggleProjeto(projeto.id)}>
              {ativo === projeto.id ? 'Fechar' : 'Ver detalhes'}
            </button>

            {ativo === projeto.id && (
              <div className="detalhes">
                <img src={projeto.imagem} alt={projeto.titulo} />
                <p>{projeto.detalhes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
