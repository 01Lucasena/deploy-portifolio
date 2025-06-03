import React from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Orion.css';

export default function Orion() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_non6j6h', 'template_wbci62j', e.target, 'OjSIWgeU02JGHH5Pb')
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        e.target.reset();
      })
      .catch(() => {
        alert('Erro ao enviar mensagem.');
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
      <h1>Orion / Centro de Comunicações</h1>
      <p>
        Esta é a estação de comunicação do sistema Astrax. Se você quiser entrar em contato comigo, este é o canal direto entre nossos mundos.
      </p>

      <section>
        <h2>Frequências de Contato</h2>
        <ul>
          <li><strong>Email Estelar:</strong> lucasena021@gmail.com</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lucas-sena-36164729b/" target="_blank" rel="noreferrer">/lucas-sena-36164729b/</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/01Lucasena" target="_blank" rel="noreferrer">/01Lucasena</a></li>
        </ul>
      </section>

      <section>
        <h2>Mande sua mensagem</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea name="message" placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </motion.div>
  );
}
