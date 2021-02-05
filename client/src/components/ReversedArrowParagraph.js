import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function ReversedArrowParagraph(props) {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return(
    <div ref={ref} className={`reversed-arrow-paragraph ${props.className? props.className : ''}`}>
      <div className={`reversed-arrow-paragraph__content`}>
        {animate &&
          <svg 
            viewBox="0 0 16 64" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`reversed-arrow-paragraph__arrow ${animate? 'reversed-arrow-paragraph__arrow--animate' : 'u-hidden'}`} 
          >
            <path d="M7.2929 63.7071C7.68342 64.0976 8.31659 64.0976 8.70711 63.7071L15.0711 57.3431C15.4616 56.9526 15.4616 56.3195 15.0711 55.9289C14.6805 55.5384 14.0474 55.5384 13.6569 55.9289L8 61.5858L2.34315 55.9289C1.95262 55.5384 1.31946 55.5384 0.928935 55.9289C0.53841 56.3195 0.53841 56.9526 0.928935 57.3431L7.2929 63.7071ZM7 4.37114e-08L7 63L9 63L9 -4.37114e-08L7 4.37114e-08Z" fill="#1D2688"/>
          </svg>
        }

        { props.children }
      </div>
    </div>
  )
}

export default ReversedArrowParagraph;