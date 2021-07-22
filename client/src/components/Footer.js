import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer u-margin-top-md">
      <Link to="/navigation"><img className="footer__image" src={require('../img/logo.png').default} alt="feelvoice logo"/></Link>
      <div className="footer__info footer--menu">
        <div className="footer__item">
          <h5 className="heading-5">Mail.</h5>
          <p className="paragraph" >info@feelvoice.by</p>
          <svg className="footer__arrow">
            <use href={`${require("../img/icons.svg").default}#running-arrow-sm`} />
          </svg>
        </div>
        <div className="footer__item">
          <h5 className="heading-5">Time.</h5>
          <p className="paragraph" >Пн-Вс: 9.00 - 23.00</p>
          <svg className="footer__arrow">
            <use href={`${require("../img/icons.svg").default}#running-arrow-sm`} />
          </svg>
        </div>
        <div className="footer__item">
          <h5 className="heading-5">Tel.</h5>
          <p className="paragraph" >+375 (4473) 7-52-00</p>
          <svg className="footer__arrow">
            <use href={`${require("../img/icons.svg").default}#running-arrow-sm`} />
          </svg>
        </div>
        <div className="footer__item">
          <h5 className="heading-5">Loc.</h5>
          <p className="paragraph" >Минск, улица <br/>Петра Мстиславца, 22</p>
          <svg className="footer__arrow">
            <use href={`${require("../img/icons.svg").default}#running-arrow-sm`} />
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer;