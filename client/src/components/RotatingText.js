function RotatingText(props) {
  const figure = require('../img/prising-promotion-figure.svg').default;

  return (
    <div className={props.className}>
      <div className="rotating-text">
        <svg className="rotating-text__figure rotating-text__figure--1">
          <use href={figure + "#star"} />
        </svg>
        <svg className="rotating-text__figure rotating-text__figure--2">
          <use href={figure + "#inner-text"} />
        </svg>
        <svg className="rotating-text__figure rotating-text__figure--3">
          <use href={figure + "#outer-text"} />
        </svg>
      </div>
    </div>
  )
}

export default RotatingText;