import { Link } from 'react-router-dom';
import RunningText from "./RunningText";

import icons from '../img/icons.svg';

function MainHeader() {
  return (
    <header className="main-header u-noised-container">
      <video className="main-header__background" playsInline autoPlay muted loop >
        <source src={require("../video/background.mp4").default} type="video/mp4" />
      </video>
      <RunningText className="main-header__animation" />
      <h1 className="heading-1"><span className="main-header__title main-header__title--1">Feel</span> <span className="main-header__title main-header__title--2">Voice</span></h1>
      <div className="main-header__subtitle">
        <h2 className="heading-2"><span className="u-block main-header__subtitle--1">Music </span><span className="u-block main-header__subtitle--2">Studio</span></h2>
        <svg className="main-header__asterisk" >
          <use href={icons + "#asterisk"} />
        </svg>
      </div>
      <Link to="#greet" className="main-header__btn">
        <svg  className="btn-arrow--down" >
          <use href={icons + "#arrow-down"} />
        </svg>
      </Link>
    </header>
  )
}

export default MainHeader;