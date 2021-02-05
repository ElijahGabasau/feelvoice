import { Link } from 'react-router-dom';

function ButtonTertiary(props) {

  return (
    <div className={`btn ${props.className}`}>
      <svg className="btn__content" viewBox="0 0 252 63" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M26.3086 8V6H194.955V1H214.842V4H219.49H236.794V6H248.674V8" stroke="white"/>
        <path d="M2.54959 58.5V45.5H1V22.5H2.54959V6.5H17.5289V8.5" stroke="white"/>
        <path d="M197.797 59H212.776V62H232.404V59H235.245H250.999V35H249.966V14.5H248.675" stroke="white"/>
        <path d="M23.7266 59H82.3526V62H102.755V59H121.867H127.807V57" stroke="white"/>
        <rect x="3.32422" y="8" width="245.868" height="50" fill="white"/>
      </svg>

      {
        props.to?
        <button className="btn__btn">
          <Link className="a" to={props.to}>
            {props.children}
          </Link>
        </button>
        : props.action 
          ? <button type={props.action} className="btn__btn">
              {props.children}
            </button>
          : <button type="button" className="btn__btn">
              {props.children}
            </button>
      }
    </div>
  );
}

export default ButtonTertiary;