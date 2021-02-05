import { useState, } from 'react';
import { useSwipeable } from 'react-swipeable';

function ArticleSlider(props) {
  const [current, setCurrent] = useState(props.data.image.length - 1);
  const [lastCurrent, setLastCurrent] = useState(0);
  const [direction, setDirection] = useState('');

  const renderImage = [];
  const renderPoints = [];

  for (let i = 0; i < props.data.image.length; i++) {
    renderImage.push(
      <img 
        className={`article-slider__image 
          ${(direction === 'left' && current === i) ? 'article-slider__image--previous' : ''} 
          ${(direction === 'right' && current === i) ? 'article-slider__image--next' : ''}
          ${(direction === 'left' && lastCurrent === i) ? 'article-slider__image--to-right' : ''}
          ${(direction === 'right' && lastCurrent === i) ? 'article-slider__image--to-left' : ''}
          `}  
        src={props.data.image[i]} 
        alt={props.data.title}
        key={props.order + 'article-image' + i} 
      />
    );

    renderPoints.push(
     <div 
      key={props.order + 'article-point' + i} 
      className={`article-slider__point article-slider__point--${props.order} ${current === i? 'article-slider__point--selected-' + props.order : ''}`}
      onMouseDown={() => {
        setDirection(i < current? 'left' : 'right');
        setLastCurrent(current);
        setCurrent(i);
      }}
    ></div> 
    )
  }

  const previous = () => {
    if (current === 0) {
      setDirection('left');
      setCurrent(props.data.image.length - 1);
      setLastCurrent(0);
    } else {
      setDirection('left');
      setLastCurrent(current);
      setCurrent(current - 1);
    }
  }

  const next = () => {
    if (current === props.data.image.length - 1) {
      setDirection('right');
      setCurrent(0);
      setLastCurrent(props.data.image.length - 1);
    } else {
      setDirection('right');
      setLastCurrent(current);
      setCurrent(current + 1);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => previous(),
  });

  return (
    <div className={`article__slider article__slider--${props.order} article-slider`}>
      {props.data.image.length > 1 && 
        <svg 
          className={`article-slider__arrow article-slider__arrow--previous article-slider__arrow--${props.order}`}  
          width="31" 
          height="16" 
          viewBox="0 0 31 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          onMouseDown={ previous }
        >
          <path d="M0.292891 8.70711C-0.0976334 8.31658 -0.0976334 7.68342 0.292891 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292891 8.70711ZM31 9H0.999998V7H31V9Z" fill="#EE8D03"/>
        </svg> 
      }
      
      <div { ...handlers } className="article-slider__image-box">
        { renderImage }
      </div>

      {props.data.image.length > 1 && 
        <svg 
          className={`article-slider__arrow article-slider__arrow--next article-slider__arrow--${props.order}`}  
          width="31" 
          height="16" 
          viewBox="0 0 31 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          onMouseDown={ next }
        >
          <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="#EE8D03"/>
        </svg>
      }
      
      {props.data.image.length > 1 && 
        <div className="article-slider__point-bar">
          { renderPoints }
        </div>
      }
    </div>
  )
}

export default ArticleSlider;