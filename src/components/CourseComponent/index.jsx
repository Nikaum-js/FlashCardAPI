import rocketseatImg from '../../assets/images/Rocketseat.png';
import './styles.scss'

export function CourseComponent() {
  return (
    <>
      <div className="container">

        <h2>Cursos</h2>

        <div className="content-card">
          <div className="card">
            <span>Curso GoStack Rocketseat</span>
            <img src={rocketseatImg} alt="rocketseatImg" />
          </div>
          <div className="card">
            <span>Curso GoStack Rocketseat</span>
            <img src={rocketseatImg} alt="rocketseatImg" />
          </div>
          <div className="card">
            <span>Curso GoStack Rocketseat</span>
            <img src={rocketseatImg} alt="rocketseatImg" />
          </div>
           <div className="card">
            <span>Curso GoStack Rocketseat</span>
            <img src={rocketseatImg} alt="rocketseatImg" />
          </div>
          <div className="card">
            <span>Curso GoStack Rocketseat</span>
            <img src={rocketseatImg} alt="rocketseatImg" />
          </div>
          <div className="card">
            <span>Curso GoStack Rocketseat</span>
            <img src={rocketseatImg} alt="rocketseatImg" />
          </div>
          {/*
          <div className="card">
            <span>FlexBlog</span>
            <img src={FlexBlog} alt="flexblog" />
          </div>
          <div className="card">
            <span>Task</span>
            <img src={Task} alt="task" />
          </div>
          <div className="card">
            <span>RocketShoes</span>
            <img src={RocketShoes} alt="rocketshoes" />
          </div> */}
        </div>
      </div>
    </>
  );
}