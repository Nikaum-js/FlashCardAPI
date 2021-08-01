import './styles.scss'

import Sobre from '../../assets/images/Sobre.svg'

export function AboutMe () {
  return (
    <>
      <div className="about-me">
        <img src={Sobre} alt="" />

      <div className="content-about-me">
        <h2>Sobre mim </h2>
        <p>
        Eu tenho 17 anos e sou estudante na área de Desenvolvimento de Sistemas, tenho conhecimento nas linguagens JavaScript, HTML, Python, Java, SQL, C++, CSS e PHP. Tenho experiência com ReactJs. Atualmente trabalho como freelancer desenvolvendo sites para clientes e empresas. Meu principal objetivo é conseguir um emprego na área de TI.
        </p>
      </div>
      </div>
    </>
  );
}