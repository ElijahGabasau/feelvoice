function Tariff(props) {
  const figures = require('../img/tariffs.svg').default;

  return(
    <div className={props.className}>
      <div className="tariff">
        <svg className="tariff__star">
          <use href={figures + "#star"}/>
        </svg>
        <svg className="tariff__text">
          <use href={figures + "#text"}/>
        </svg>
      </div>
    </div>
  )
} 

export default Tariff;