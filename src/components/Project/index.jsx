import './styles.scss'

import letmeask from '../../assets/images/letmeask.PNG';
import ignews from '../../assets/images/ignews.PNG';
import wildbeast from '../../assets/images/wildbeast.PNG';
import SpaceTreveling from '../../assets/images/SpaceTreveling.PNG'
import DtMoney from '../../assets/images/dtmoney.PNG'
import FantasticAnimals from '../../assets/images/FantasticAnimals.PNG';
import FlexBlog from '../../assets/images/flexblog.PNG'
import Login from '../../assets/images/login.png'
import Task from '../../assets/images/Task.io.PNG'
import RocketShoes from '../../assets/images/rocketshoes.PNG'

export function Project() {
  return (
    <>
      <div className="container">

        <h2>Projetos</h2>

        <div className="content-card">
          <div className="card">
            <span>LetMeAsk</span>
            <img src={letmeask} alt="" />
          </div>
          <div className="card">
            <span>IgNews</span>
            <img src={ignews} alt="" />
          </div>
          <div className="card">
            <span>WildBeast</span>
            <img src={wildbeast} alt="" />
          </div>
          <div className="card">
            <span>SpaceTreveling</span>
            <img src={SpaceTreveling} alt="" />
          </div>
          <div className="card">
            <span>DtMoney</span>
            <img src={DtMoney} alt="" />
          </div>
          <div className="card">
            <span>FantasticAnimals</span>
            <img src={FantasticAnimals} alt="" />
          </div>
          <div className="card">
            <span>FlexBlog</span>
            <img src={FlexBlog} alt="" />
          </div>
          <div className="card">
            <span>Task</span>
            <img src={Task} alt="" />
          </div>
          <div className="card">
            <span>RocketShoes</span>
            <img src={RocketShoes} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}