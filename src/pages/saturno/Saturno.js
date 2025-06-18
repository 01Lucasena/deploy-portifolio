import React from 'react';
import './Saturno.css';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import CarrosselProjetos from '../../components/carrossel-projetos/CarrosselProjetos';
import imagemJogo from '../../assets/prototipo-jogo.png';
import imagemPortfolio from '../../assets/site_img.png';

export default function Saturno() {
  const projetos = [
    {
      id: 1,
      titulo: "Guardiões da Segurança",
      descricao: "Protótipo de jogo sobre segurança no trabalho.",
      tecnologias: ["Figma", "Trabalho em Equipe", "Prototipagem"],
      imagem: imagemJogo,
      detalhes: "Projeto criado em equipe no Figma, voltado para educação em segurança no trabalho.",
    },
    {
      id: 2,
      titulo: "Portfólio Intergaláctico",
      descricao: "Este próprio site com tema espacial.",
      tecnologias: ["React", "Framer Motion", "CSS", "Responsivo"],
      imagem: imagemPortfolio,
      detalhes: "Projeto pessoal que representa minha identidade como dev.",
    },
  ];

  return (
    <PageWrapper>
        <main className="saturno-container">
        <section className="saturno-header">
          <h1>Saturno</h1>
          <p>Projetos que refletem minha trajetória como desenvolvedor.</p>
        </section>

        <CarrosselProjetos projetos={projetos} />
      </main>
    </PageWrapper>
  );
}
