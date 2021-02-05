function ArrowTitle(props) {
  const figure = require('../img/icons.svg').default;
  
  return (
    <div className={`arrow-title ${props.className}`}>
      <h1 className="heading-1 arrow-title__text">{props.children}</h1>

      <svg className="arrow-title__figure">
        <use href={figure + "#running-arrow"} />
      </svg>
    </div>
  )
}

export default ArrowTitle;