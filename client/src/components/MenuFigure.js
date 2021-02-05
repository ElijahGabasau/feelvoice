import icons from '../img/icons.svg';

function MenuFigure() {
  return (
    <div className="navigation__figure navigation__figure--box">
      <svg className="navigation__figure navigation__figure--cross">
        <use href={icons + "#cross"} />
      </svg>
    </div>
  )
}

export default MenuFigure;