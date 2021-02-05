import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function ArrowParagraph(props) {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return(
    <div ref={ref} className={`arrow-paragraph ${props.className}`}>
      {animate &&
        <svg 
          className={`arrow-paragraph__arrow ${animate? 'arrow-paragraph__arrow--animate' : 'u-hidden'}`} 
          viewBox="0 0 16 188" fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path
            d="M7.29289 187.707C7.68342 188.098 8.31658 188.098 8.70711 187.707L15.0711 181.343C15.4616 180.953 15.4616 180.319 15.0711 179.929C14.6805 179.538 14.0474 179.538 13.6569 179.929L8 185.586L2.34315 179.929C1.95262 179.538 1.31946 179.538 0.928932 179.929C0.538408 180.319 0.538408 180.953 0.928932 181.343L7.29289 187.707ZM7 0L7 187H9L9 0L7 0Z" fill="#EE8D03"
          />
        </svg>
      }

      {props.children}
    </div>
  )
}

export default ArrowParagraph;