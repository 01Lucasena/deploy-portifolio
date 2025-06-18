import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Lucas Barbosa S. Sena {' '}
        <a href="https://github.com/01Lucasena" target="_blank" rel="noreferrer">
          <FaGithub style={{ margin: '0 0.5rem' }} />
        </a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">
          <FaLinkedin style={{ margin: '0 0.5rem' }} />
        </a>
        <a href="https://instagram.com/iamlucasena" target="_blank" rel="noreferrer">
          <FaInstagram style={{ margin: '0 0.5rem' }} />
        </a>
      </p>
    </footer>
  );
}