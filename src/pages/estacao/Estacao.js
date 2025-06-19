import React from 'react';
import { motion } from 'framer-motion';
import LinhaDoTempo from '../../components/timeline/Timeline';
import { FaRocket, FaCode, FaDatabase, FaHtml5 } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Estacao.css';

export default function EstacaoEspacial() {
  const { t } = useTranslation();

  const eventos = t('station.timeline', { returnObjects: true }).map((evento, index) => ({
    ...evento,
    icone: getIcon(evento.icone),
    key: index
  }));

  function getIcon(nome) {
    switch (nome) {
      case 'rocket': return <FaRocket />;
      case 'code': return <FaCode />;
      case 'database': return <FaDatabase />;
      case 'html': return <FaHtml5 />;
      default: return null;
    }
  }

  return (
    <motion.div
      className="estacao-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <h1>{t('station.title')}</h1>
      <p>{t('station.description')}</p>
      <LinhaDoTempo eventos={eventos} />
    </motion.div>
  );
}
