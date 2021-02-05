import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TeacherFigure(props) {
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
      className={`teacher-figure teacher-figure--${props.position}`}
    >
      { childrenWithProps }
      <Link
        to={`/teachers#teacher-${props.position}`} 
        className={`teacher-figure__name teacher-figure__name--${props.position}`}>
          {props.name}
      </Link>
    </div>
  )
}

export default TeacherFigure;
  