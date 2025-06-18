// src/components/CarrosselProjetos/CarrosselProjetos.jsx
import React from 'react';
import Slider from 'react-slick';
import './CarrosselProjetos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarrosselProjetos({ projetos }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section className="carrossel-wrapper">
      <Slider {...settings}>
        {projetos.map((projeto) => (
          <div key={projeto.id} className="carrossel-card">
            <img src={projeto.imagem} alt={projeto.titulo} className="carrossel-img" />
            <div className="carrossel-content">
              <h2>{projeto.titulo}</h2>
              <p className="descricao">{projeto.descricao}</p>
              <div className="tags">
                {projeto.tecnologias.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
              <p className="detalhes">{projeto.detalhes}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
