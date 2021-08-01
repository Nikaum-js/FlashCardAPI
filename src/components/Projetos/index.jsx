import './styles.scss'

import letmeask from '../../assets/images/letmeask.PNG';
import ignews from '../../assets/images/ignews.PNG';
import wildbeast from '../../assets/images/wildbeast.PNG';
import SpaceTreveling from '../../assets/images/SpaceTreveling.PNG'
import DtMoney from '../../assets/images/dtmoney.PNG'

export function Projetos() {
  return (
    <>
      <div className="container">
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
        </div>
      </div>
    </>
  );
}