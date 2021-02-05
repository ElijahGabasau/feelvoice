import { Link } from 'react-router-dom';

function MenuNavigation () {
  return (
    <ul className="navigation">
      <li className="navigation__item navigation__item--1"><Link className="a" to="/">начало</Link></li>
      <li className="navigation__item navigation__item--2"><Link className="a" to="/classes">направления</Link></li>
      <li className="navigation__item navigation__item--3"><Link className="a" to="/prising">тарифы</Link></li>
      <li className="navigation__item navigation__item--4"><Link className="a" to="/teachers">наставники</Link></li>
      <li className="navigation__item navigation__item--5"><Link className="a" to="/studio">наша студия</Link></li>
      <li className="navigation__item navigation__item--6"><Link className="a" to="/news">интересности</Link></li>
    </ul>
  )
}

export default MenuNavigation;