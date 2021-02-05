import React, { useState } from 'react';

function Teacher(props) {
  const [hover, setHover] = useState(false);

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
        return React.cloneElement(child, { play: hover });
    }
    return child;
  });

  return(
    <div
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      id={`teacher-${props.position}`} className="teacher">
      <figure className="teacher__image-container">
        { childrenWithProps }
        <div className="u-noised-container u-hover">
          <img src={props.image} alt={`teacher ${props.number}`} 
            className={`teacher__image u-noised-image u-noised-image--abs ${hover? "u-hidden" : ""}`} />
          <img src={props.hover} alt={`teacher ${props.number}`} 
            className={`teacher__image u-noised-image u-noised-image--abs ${hover? "" : "u-hidden"}`} />
        </div>
      </figure>
      <div className="teacher__title">
        <h2 className="teacher__name">{props.name}</h2>
        <h3 className="teacher__spec">{props.title}</h3>
      </div>
      <p className="paragraph teacher__text teacher__text--1">
        { props.text1 }
      </p>
      <p className="paragraph teacher__text teacher__text--2">
        { props.text2 }
      </p>
    </div>
  )
}

export default Teacher;