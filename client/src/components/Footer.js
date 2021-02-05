import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer u-margin-top-md">
      <Link to="/navigation"><img className="footer__image" src={require('../img/logo.png').default} alt="feelvoice logo"/></Link>
    </footer>
  )
}

export default Footer;