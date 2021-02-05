import { Link } from 'react-router-dom';

function FormLink(props) {
  let color = '';

  if (props.color % 3 === 1) {
    color = 'yellow';
  } else if (props.color % 3 === 0) {
    color = 'red';
  } else {
    color = 'blue';
  }

  return(
    <Link className={`a form-link ${props.className}`} to="/form">
      <div className="form-link__figure">
        <svg className="form-link__circle" >
          <use href={`${require("../img/icons.svg").default}#circle-link-${color}`} />
        </svg>
        <svg className="form-link__arrow" >
          <use href={`${require("../img/icons.svg").default}#arrow-right-link`} />
        </svg>
      </div>
      <p className="form-link__text" >Записаться</p>
    </Link>
  )
}

export default FormLink; 