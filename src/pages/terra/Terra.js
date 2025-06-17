// pages/Terra.js
import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import '../../App';
import './Terra.css';
import Tecnologias from '../../components/tecnologias/Tecnologias';

export default function Terra() {
  return (
    <PageWrapper>
      <div className="terra-page">
        <h1>Terra / Base de Origem</h1>
        <p> Aqui que minha jornada começou. No planeta azul, desenvolvi minha paixão por transformar ideias em códigos e minha missão de explorar o universo do desenvolvimento web.
      </p>

        <section>
          <h2>Quem sou eu?</h2>
          <p>Olá! Me chamo Lucas Sena, sou estudante de Desenvolvimento de Sistemas no SENAI Dendezeiros (Salvador/BA) e apaixonado por tecnologia. Tenho experiência acadêmica com linguagens como Java, Python, HTML, CSS e React, e estou sempre em busca de novos aprendizados.</p>
        </section>

        <section>
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li><strong>Frontend:</strong> React, HTML, CSS, JavaScript</li>
            <li><strong>Backend:</strong> Node.js, Java, Python, C#</li>
            <li><strong>Design:</strong> Figma, Canva</li>
            <li><strong>Extras:</strong> Git, GitHub, APIs REST</li>
          </ul>
        </section>

        <section>
          <h2>Minha Missão</h2>
          <p>Assim como os astronautas olham para o espaço em busca do desconhecido, eu vejo cada projeto como uma nova missão: com desafios, descobertas e crescimento. Minha meta é contribuir para o desenvolvimento de experiências únicas, acessíveis e futuristas.</p>
        </section>

        <section>
          <h2>Tecnologias que uso</h2>
          <Tecnologias />
        </section>
      </div>
    </PageWrapper>
  );
}
