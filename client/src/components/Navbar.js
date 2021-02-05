import { Link } from 'react-router-dom';

import icons from "../img/icons.svg";

function Navbar(props) {
  if(props.navigation) {
    return (
      <div className="navbar navbar--secondary">
        <div className="navbar__navigation">
          <Link className="a navbar__navigation--1" to="/">Главная</Link>
          <svg className="navbar__navigation-icon">
            <use href={require("../img/icons.svg").default + "#nav-arrow"} />
          </svg>
          <Link className="a navbar__navigation--2" to="/navigation" >{props.navigation}</Link>
        </div>
        <Link className="navbar__icon-container" to="/navigation">
          <svg className="navbar__icon" >
            <use href={icons + "#menu"} />
          </svg>
        </Link>
      </div>
    )
  }


  return (
    <div className="navbar navbar--main">
      <Link className="navbar__icon-container" to="/navigation">
        <svg className="navbar__icon" >
          <use href={icons + "#menu"} />
        </svg>
      </Link>
    </div>
  )
}

export default Navbar;