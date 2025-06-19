import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import astronauta from '../../assets/astronauta.png';
import './Header.css';

export default function Banner() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="banner">
      <button
        onClick={toggleLanguage}
        className="lang-switcher"
        aria-label="Alternar idioma"
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <Flag code={i18n.language === 'pt' ? 'BR' : 'US'} style={{ width: 24, height: 16 }} />
        {i18n.language === 'pt' ? 'Português' : 'English'}
      </button>

      <div className="banner-content">
        <h2>{t('banner.name')}</h2>
        <h3>{t('banner.role')}</h3>

      

        <div className="banner-buttons">
          <a
            whileHover={{ scale: 1.05 }}
            href="/curriculo-lucas-pt.pdf"
            download
            className="download-cv-button"
          >
            <FaDownload style={{ marginRight: '0.5rem' }} /> Currículo (PT)
          </a>
          <a
            whileHover={{ scale: 1.05 }}
            href="/curriculo-lucas-en.pdf"
            download
            className="download-cv-button"
          >
            <FaDownload style={{ marginRight: '0.5rem' }} /> Resume (EN)
          </a>
        </div>

        <p>{t('banner.desc1')}</p>
        <p>{t('banner.desc2')}</p>
        <p><strong>{t('banner.connect')}</strong></p>

        <div className="social-buttons">
          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">
            <button><FaLinkedin /> {t('banner.linkedin')}</button>
          </a>
          <a href="https://github.com/01Lucasena" target="_blank" rel="noreferrer">
            <button><FaGithub /> {t('banner.github')}</button>
          </a>
          <a href="https://instagram.com/iamlucasena" target="_blank" rel="noreferrer">
            <button><FaInstagram /> {t('banner.instagram')}</button>
          </a>
        </div>

        <div style={{ height: '10vh' }} /> {/* espaçamento */}
      </div>

      <div className="banner-image">
        <img src={astronauta} alt="Astronauta" className="astronauta-img" />
      </div>
    </div>
  );
}
