import Button from './Button';
import Tariff from './Tariff';
import { Link } from 'react-router-dom';

function MainPrising() {
  return (
    <section className="main-prising">
      <div className="main-prising__hero">
        <Tariff className="main-prising__hero-animation" />

        <div className="main-prising__image u-noised-container">
          <img 
            src={`${require("../img/prising2.png").default}`}  
            alt="prising hero" 
            className="u-noised-image"
          />
        </div>
      </div>

      <h3 className="heading-3 main-prising__heading">Абонементы</h3>
      <p className="paragraph main-prising__text">Групповые занятия рассчитаны на тех, кто хочет заниматься вместе со своими друзьями - изначально все занятия индивидуальные.</p>
      <Link to="/prising" className="flex-table a">
        <div className="flex-table__item flex-table__item--header">
          <div>Первое занятие</div>
          <div>Бесплатно</div>
        </div>

        <div className="flex-table__item">
          <div>Индивидуальный (1 Занятие)</div>
          <div>28 BYN</div>
        </div>

        <div className="flex-table__item">
          <div>Индивидуальный (4 Занятия)</div>
          <div>95 BYN</div>
        </div>

        <div className="flex-table__item">
          <div>Индивидуальный (8 Занятий)</div>
          <div>185 BYN</div>
        </div>

        <div className="flex-table__item">
          <div>Групповой (1 занятие)</div>
          <div>18 BYN/ЧЕЛ</div>
        </div>

        <div className="flex-table__item">
          <div>Групповой (4 занятия)</div>
          <div>60 BYN/ЧЕЛ</div>
        </div>

        <div className="flex-table__item">
          <div>Групповой (8 занятий)</div>
          <div>110 BYN/ЧЕЛ</div>
        </div>
      </Link>

      <Button type="1" className="main-prising__btn u-margin-top-sm" to="/prising">Все абонементы</Button>
    </section>
  )
}

export default MainPrising;