import Button from './Button';
import Tariff from './Tariff';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function MainPrising(props) {
  const items = props.data.reduce((acc, cur) =>{
    if (acc.length === 6) return acc;

    if (acc.length < 3 && cur.type !== "personal") return acc; 
    
    if (acc.length >= 3 && cur.type === "personal") return acc;
    
    return [...acc, (
      <div key={cur.title + acc.length} className="flex-table__item">
        {cur.type === "group"
         ? <div className="flex-table__text">{cur.title} {cur.amount}</div>
         : <div className="flex-table__text">{cur.title} ({cur.amount})</div>
        }
        <div className="flex-table__price">{cur.price} BYN</div>
      </div>  
    )]
  }, []);

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

        {items}
      </Link>

      <Button type="1" className="main-prising__btn u-margin-top-sm" to="/prising">Все абонементы</Button>
    </section>
  )
}


const mapStateToProps = (state) => {
  return { 
    data: Object.values(state.tickets),
  };
}

export default connect(mapStateToProps)(MainPrising);