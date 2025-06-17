import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa';
import './Tecnologias.css';

const icones = {
  html5: <FaHtml5 />,
  'css3-alt': <FaCss3Alt />,
  'js-square': <FaJsSquare />,
  react: <FaReact />,
  'node-js': <FaNodeJs />,
  python: <FaPython />,
  java: <FaJava />,
  'git-alt': <FaGitAlt />,
  github: <FaGithub />,
  
};

const tecnologias = [
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css3-alt' },
  { name: 'JavaScript', icon: 'js-square' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'node-js' },
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'java' },
  { name: 'Git', icon: 'git-alt' },
  { name: 'GitHub', icon: 'github' },
];

export default function Tecnologias() {
  return (
    <div className="tecnologias">
      {tecnologias.map((tec) => (
        <div key={tec.name} className="tecnologia">
          <div className="icone">{icones[tec.icon]}</div>
          <span>{tec.name}</span>
        </div>
      ))}
    </div>
  );
}
