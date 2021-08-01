import Programing from '../../assets/images/Programing.svg'

import css from '../../assets/images/css.svg'
import html from '../../assets/images/html.svg'
import javascript from '../../assets/images/javascript.svg'
import git from '../../assets/images/git.svg'
import react from '../../assets/images/react.svg'
import gitKraken from '../../assets/images/gitkraken.svg'
import typescript from '../../assets/images/typescript.svg'
import reactJs from '../../assets/images/reactjs.svg'
import vscode from '../../assets/images/vscode.svg'
import sass from '../../assets/images/sass.svg'
import figma from '../../assets/images/figma.svg'
import nodeJs from '../../assets/images/nodejs-icon.svg'
import github from '../../assets/images/github.svg'
import php from '../../assets/images/php.svg'
import nextJs from '../../assets/images/nextjs-icon.svg'
import styled from '../../assets/images/styled.png'

import './styles.scss'

export function Skills () {
  return (
    <>
      <div className="Skills">

        <div className="icones">
         <h2>Skills</h2>
        <img src={css} alt="icone" />
        <img src={html} alt="" />
        <img src={javascript} alt="" />
        <img src={git} alt="" />
        <img src={react} alt="" />
        <img src={gitKraken} alt="" />
        <img src={typescript} alt="" />
        <img src={reactJs} alt="" />
        <img src={sass} alt="" />
        <img src={vscode} alt="" />
        <img src={figma} alt="" />
        <img src={nodeJs} alt="" />
        <img src={php} alt="" />
        <img src={github} alt="" />
        <img src={nextJs} alt="" />
        <img src={styled} alt="" />
        </div>
        <div className="Coding">
          <img src={Programing} alt="" />
        </div>
      </div>
    </>
  );
}