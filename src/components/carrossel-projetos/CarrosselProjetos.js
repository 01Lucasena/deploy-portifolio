import React from 'react';
import './CarrosselProjetos.css';

export default function CarrosselProjetos({ projetos }) {
  return (
    <div className="feed-container">
      {projetos.map((projeto) => (
        <div className="projeto-card" key={projeto.id}>
          <div
            className="projeto-img"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9)), url(${projeto.imagem})`,
            }}
          />
          <div className="projeto-content">
            <h2>{projeto.titulo}</h2>
            <p className="descricao">{projeto.descricao}</p>
            <div className="tags">
              {projeto.tecnologias.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>
            <a
              href={projeto.linkExterno}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-projeto"
            >
              Saiba mais
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
