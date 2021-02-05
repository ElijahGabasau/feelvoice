import FormLink from './FormLink';

function Subject(props) {
  const text = [];
  for (let i = 0; i < props.text.length; i++) {
    text.push(<p key={props.id + i + "text"} className="paragraph">{props.text[i]}</p>);
  }

  return (
    <div className={`subject subject--${props.position}`}>
      <div className="subject__hero u-noised-container">
        <img className="subject__image u-noised-image" src={props.image} alt={`${props.title} class`} />
      </div>
      <div className="subject__heading">
        <h2 className="subject__title u-uppercase">{props.title}</h2>
        <FormLink className="subject__link" color={props.position} />
      </div>
      <div className="subject__text">
        {text}
      </div>
    </div>
  )
}

export default Subject;