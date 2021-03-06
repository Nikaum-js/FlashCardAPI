import { Link } from "react-router-dom"

import './styles.scss'

export function Header () {
    window.onload=function(){
      let show = true;

      const menuSection = document.querySelector(".menu-section");
      const menuToggle = document.querySelector(".menu-toggle");

      menuToggle.addEventListener("click", () => {

        document.body.style.overflow = show ? "hidden" : "initial";

        menuSection.classList.toggle("on", show);
        show = !show;
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

              {/* <Link to="aboutme">
                <li>Sobre mim</li>
              </Link>

              <Link to="skills">
                <li>Skills</li>
              </Link>       */}

              <Link to="courses">
                <li>Cursos</li>
              </Link>
            </ul>
          </nav>
        </div>
    </main>
  );
}