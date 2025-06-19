import React from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import './Orion.css';

export default function Orion() {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_non6j6h', 'template_wbci62j', e.target, 'OjSIWgeU02JGHH5Pb')
      .then(() => {
        alert(t('orion.success'));
        e.target.reset();
      })
      .catch(() => {
        alert(t('orion.error'));
      });
  };

  return (
    <motion.div
      className="lua-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{t('orion.title')}</h1>
      <p>{t('orion.description')}</p>

      <section>
        <h2>{t('orion.contactTitle')}</h2>
        <ul>
          <li><strong>{t('orion.emailLabel')}:</strong> lucasena021@gmail.com</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lucas-sena-36164729b/" target="_blank" rel="noreferrer">/lucas-sena-36164729b/</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/01Lucasena" target="_blank" rel="noreferrer">/01Lucasena</a></li>
        </ul>
      </section>

      <section>
        <h2>{t('orion.formTitle')}</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder={t('orion.namePlaceholder')} required />
          <input type="email" name="email" placeholder={t('orion.emailPlaceholder')} required />
          <textarea name="message" placeholder={t('orion.messagePlaceholder')} required></textarea>
          <button type="submit">{t('orion.sendButton')}</button>
        </form>
      </section>
    </motion.div>
  );
}
