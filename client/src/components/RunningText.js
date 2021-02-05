import icons from '../img/icons.svg';

function RunningText(props) {
  return (
    <div className={`a running-text + ${props.className}`}>
        <svg className="running-text__star" >
          <use href={icons + "#star"} />
        </svg>
        <div className="running-text__container">
          <p className="running-text__text">Первое &nbsp; занятие &nbsp; бесплатно</p>
        </div>
    </div>
  )
}

export default RunningText;