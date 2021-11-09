import { useState, useEffect } from 'react';

import rocketseatImg from '../../assets/images/Rocketseat.png';

import axios from 'axios'

import './styles.scss'

export function CourseComponent() {
  const [ courses, setCourses ] = useState([]);

  const api = axios.create({
    baseURL: "https://flashcard-api-mayck.herokuapp.com/api/colecoes"
  });

  useEffect(() => {
    fetch('https://flashcard-api-mayck.herokuapp.com/api/colecoes') 
      .then(response => response.json())                                                                       
      .then(data => setCourses(data))

    api.post('/', {
      nome: "D.A.W",
      descricao: "É a melhor matéria de todas :)"
    })
  }, [])

  return (
      <div className="container">

        <h2>Cursos</h2>

        <div className="content-card">
        {courses.map(course => (
          <div className="card">
            <span>{ course.nome }</span>
            <img src={rocketseatImg} alt="rocketseatImg" />
            <p>{ course.descricao }</p>
          </div>
        ))}
        </div>
      </div>
  );
}