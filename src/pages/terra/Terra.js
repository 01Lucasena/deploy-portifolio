import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import Tecnologias from '../../components/tecnologias/Tecnologias';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Terra.css';

export default function Terra() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <main className="terra-container">
        <h1>{t('terra.title')}</h1>
        <p>{t('terra.intro')}</p>

        <h2>{t('terra.who.title')}</h2>
        <p>{t('terra.who.desc')}</p>

        <motion.section 
          className="habilidades-section"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>{t('terra.skills.title')}</h2>
          <div className="skills-grid">
            <div><strong>{t('terra.skills.frontend.label')}:</strong> {t('terra.skills.frontend.techs')}</div>
            <div><strong>{t('terra.skills.backend.label')}:</strong> {t('terra.skills.backend.techs')}</div>
            <div><strong>{t('terra.skills.design.label')}:</strong> {t('terra.skills.design.techs')}</div>
            <div><strong>{t('terra.skills.extra.label')}:</strong> {t('terra.skills.extra.techs')}</div>
          </div>
        </motion.section>

        <motion.section 
          className="missao-section"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>{t('terra.mission.title')}</h2>
          <p>{t('terra.mission.desc')}</p>
        </motion.section>

        <motion.section 
          className="tecnologias-section"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>{t('terra.techs.title')}</h2>
          <Tecnologias />
        </motion.section>
      </main>
    </PageWrapper>
  );
} 