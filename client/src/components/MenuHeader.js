import { Link } from 'react-router-dom';
import RunningText from './RunningText';

function MenuHeader() {
  return (
    <header className="menu-header">
      <h1 className="menu-header__heading heading-1 heading-1--slim"><Link className="a" to="/"><span className="u-uppercase">Feel</span>voice</Link></h1>
      <RunningText className="menu-header__animation" />
    </header>
  )
}

export default MenuHeader;