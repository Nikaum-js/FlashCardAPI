import { Link } from "react-router-dom"

import './styles.scss'

export function Header () {

    //Professor infelizmente o Menu Hamburguer não está funcionando como eu queria
    //E eu não tenho tempo e nem paciência pra tentar resolver esse Bug kkkkkkkkkk
    //Estou a mais o menos 1 mês tentando fazer essa porcaria funcuinar e sempre me
    //Aparece um erro diferente e mais chato de resolver :(
    //Então por enquanto no MOBILE eu recomendo que você sempre que mudar de página
    //Recarregar o navegador pro estado voltar ao normal e funcionar. 
    //PS: esse código eu fiz pra site com HTML, CSS e JS puro. ele não funciona bem em ReactJs
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