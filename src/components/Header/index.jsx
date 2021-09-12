import { Link } from "react-router-dom"

import './styles.scss'

export function Header () {
  return (
    <main className="Navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="aboutme">
          <li>Sobre mim</li>
        </Link>

        <Link to="skills">
          <li>Skills</li>
        </Link>

        <Link to="projects">
          <li>Projetos</li>
        </Link>

        <a href="https://api.whatsapp.com/send?phone=5511969727693">
        <button>
        Contato
        </button>
      </a>  
      </ul>
    </main>
  );
}