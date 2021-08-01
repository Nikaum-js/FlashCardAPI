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
import StyledComponents from '../../assets/images/styled.png'

import './styles.scss'

export function Skills () {
  return (
    <>
      <div className="Skills">
      <h2>Skills</h2>
        <div className="icons">
        <img src={css} alt="css" />
        <img src={html} alt="html" />
        <img src={javascript} alt="javascript" />
        <img src={git} alt="git" />
        <img src={react} alt="react" />
        <img src={gitKraken} alt="gitKraken" />
        <img src={typescript} alt="typescript" />
        <img src={reactJs} alt="reactJs" />
        <img src={sass} alt="sass" />
        <img src={vscode} alt="vscode" />
        <img src={figma} alt="figma" />
        <img src={nodeJs} alt="nodejs" />
        <img src={php} alt="php" />
        <img src={github} alt="github" />
        <img src={nextJs} alt="nextJs" />
        <img src={StyledComponents} alt="StyledComponents" />
        </div>
        <div className="Coding">
          <img src={Programing} alt="" />
        </div>
      </div>
    </>
  );
}