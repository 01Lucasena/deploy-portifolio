import './Header.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import astronauta from '../../assets/astronauta.png';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>
          Desenvolvimento Web Full Stack <br />
          <br />
          Construindo experiências digitais que conectam pessoas e negócios
        </h2>
        <h3>
          Design criado por: <strong>Lucas Barbosa S. Sena</strong>
        </h3>
        <p>
          Navegue pelo Sistema Astrax para explorar meus projetos, habilidades e trajetórias.
          <br />
          Cada planeta representa um universo de soluções criativas e tecnologia de ponta.
        </p>
        <p>Conecte-se comigo nas redes sociais:</p>

        <div className="social-buttons">
          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">
            <button><FaLinkedin /> LinkedIn</button>
          </a>
          <a href="https://github.com/seuusuario" target="_blank" rel="noreferrer">
            <button><FaGithub /> GitHub</button>
          </a>
          <a href="https://instagram.com/seuusuario" target="_blank" rel="noreferrer">
            <button><FaInstagram /> Instagram</button>
          </a>
        </div>
      </div>

      <div className="banner-image">
        <img src={astronauta} alt="Astronauta" className="astronauta-img" />
      </div>
    </div>
  );
}