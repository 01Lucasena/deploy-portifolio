import React from 'react';
import './Saturno.css';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import CarrosselProjetos from '../../components/carrossel-projetos/CarrosselProjetos';
import imagemJogo from '../../assets/prototipo-jogo.png';
import imagemPortfolio from '../../assets/site_img.png';
import { useTranslation } from 'react-i18next';

export default function Saturno() {
  const { t } = useTranslation();

  const imagens = {
    imagemJogo,
    imagemPortfolio,
  };

  const projetos = t('saturn.projects', { returnObjects: true }).map((projeto) => ({
    ...projeto,
    imagem: imagens[projeto.imagem] || '',
  }));

  return (
    <PageWrapper>
      <main className="saturno-container">
        <section className="saturno-header">
          <h1>{t('saturn.title')}</h1>
          <p>{t('saturn.intro')}</p>
        </section>

        <CarrosselProjetos projetos={projetos} />
      </main>
    </PageWrapper>
  );
}
