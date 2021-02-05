function MenuFooter() {
  return (
    <footer className="footer footer--menu">
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
    </footer>
  )
}

export default MenuFooter;