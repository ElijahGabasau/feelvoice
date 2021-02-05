import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import Button from './Button';
import Circle from '../figures/Circle';
import TriSquare from '../figures/TriSquare';

function Greet() {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const variants = {
    initial: {
      opacity: 0,
      y: -200
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      delay: .5,
      duration: 2.5,
      ease: 'easeInOut'
    }
  }

  const transition = {
      delay: 0,
      duration: 2,
      ease: 'easeInOut'
    }

  return (
    <section
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}  
      id="greet" 
      ref={ref} 
      className="u-margin-top-lg greet"
    >
      <div className="greet__hero">
        {animate && <TriSquare transition={transition} className="greet__hero-figure greet__hero-figure--1" />}
        {animate && <Circle variants={variants} className="greet__hero-figure greet__hero-figure--2" />}
        <div className="greet__hero-image u-noised-container u-hover" >
          <img 
            srcSet={`${require("../img/greet1-cl.png").default} 500w, ${require("../img/greet2-cl.png").default} 760w`}
            src={require("../img/greet1-cl.png").default}
            sizes="(max-width: 1200px) 500px, (min-width: 1200px) 760px"
            alt="Greet hero"
            className={`u-noised-image u-noised-image--abs ${hover? "" : "u-hidden"}`}
          />
          <img 
            srcSet={`${require("../img/greet1.png").default} 500w, ${require("../img/greet2.png").default} 760w`}
            src={require("../img/greet1.png").default}
            sizes="(max-width: 1200px) 500px, (min-width: 1200px) 760px"
            alt="Greet hero"
            className={`u-noised-image u-noised-image--abs ${hover? "u-hidden" : ""}`}
          />
        </div>
      </div>
      <h3 className="greet__heading heading-3 u-margin-bottom-sm">Давайте знакомиться!</h3>
      <p className="paragraph greet__text greet__text--1">Мы, музыкальная студия FEELVOICE, приветствуем Вас и уже ждем Вас на занятии - почему так быстро?</p>
      <p className="paragraph greet__text greet__text--2">Потому что мы предоставляем самый быстрый прогресс с самого первого занятия, нам важен Ваш результат, а Ваш результат гарантирован.</p>
      <p className="paragraph greet__text greet__text--3">У Вас есть отличная возможность познакомиться с нашей студией поближе на бесплатном первом занятии. Преподаватель познакомит Вас с интересующим предметом и погрузит в неповторимую атмосферу.</p>
      <Link to="/studio" className="btn-cta btn-cta--light greet__cta">Больше о студии</Link>
      <Button type="2" className="greet__btn u-margin-top-sm" to="/form">Записаться</Button>
    </section>
  )
}

export default Greet;