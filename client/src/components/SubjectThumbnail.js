import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import icons from '../img/icons.svg';

function SubjectThumbnail(props) {
  const [hover, setHover] = useState(false);

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
        return React.cloneElement(child, { play: hover });
    }
    return child;
  });

  return (
    <div 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      className={`subject-thumbnail subject-thumbnail--${props.position}`}
    >
      <div className="u-noised-container u-hover">
        <img className={`subject-thumbnail__image u-noised-image ${hover? "" : "u-hidden"}`} src={props.hover} alt={`${props.title}`} />
        <img className={`subject-thumbnail__image u-noised-image ${hover? "u-hidden" : ""}`} src={props.image} alt={`${props.title}`} />
      </div>
      {childrenWithProps}
      <div className="subject-thumbnail__btn">
        <Link className="a" to={`/classes#${props.link}`}>{props.title}</Link>
        <svg className="subject-thumbnail__icon" >
          <use href={icons + "#link-arrow"} />
        </svg>
      </div>
    </div>
  )
}

export default SubjectThumbnail;