import './Header.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import astronauta from '../../assets/astronauta.png';
import { useTranslation } from 'react-i18next';

export default function Banner() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="banner">
      {/* Botão de troca de idioma no canto superior direito */}
      <button
        onClick={toggleLanguage}
        className="lang-switcher"
        aria-label="Alternar idioma"
      >
        {i18n.language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
      </button>

      <div className="banner-content">
        <h2>{t('banner.name')}</h2>
        <h3>{t('banner.role')}</h3>
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
