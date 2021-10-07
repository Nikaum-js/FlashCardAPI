import './styles.scss'

import teacherImg from '../../assets/images/Teacher.svg'

export function About () {
  return (
  <>
    <main className="content-about">
      <div className="about">
        <span>Project FlashCards</span>
        <h2>Feito por Nikolas Santana</h2>
        <span id="final">Explore a página cursos :)</span>


        <div className="image">
          <img src={ teacherImg } alt="teacher" />
        </div>
      </div>
    </main>
  </>

  );
}