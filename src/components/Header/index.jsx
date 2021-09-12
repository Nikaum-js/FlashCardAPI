import { useState } from "react";
import { Link } from "react-router-dom"

import './styles.scss'

export function Header () {
    let [show, setShow] = useState();

    window.onload=function(){
      const menuSection = document.querySelector(".menu-section");
      const menuToggle = document.querySelector(".menu-toggle");
      
        menuToggle.addEventListener("click", () => {

          document.body.style.overflow = setShow ? "hidden" : "initial";

          menuSection.classList.toggle("on", show);
        })
    }

  return (
    <main className="Navbar">
        <div class="menu-section">
          <div class="menu-toggle">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>
          <nav>
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
          </nav>
        </div>
    </main>
  );
}