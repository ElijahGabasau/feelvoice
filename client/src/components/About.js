import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Triangle from '../figures/Triangle';

function About(props) {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <section
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}  
      ref={ref} 
      className={`about ${props.className? props.className : ''}`}
    >
      <div className="about__heading u-margin-bottom-md">
        {animate && <Triangle 
            className="about__triangle" 
            width="4"
          />}
        <h3 className="heading-3 about__heading-text">О студии</h3>
      </div>
      <div className="about__hero u-noised-container u-hover">
        <img
          srcSet={`${require("../img/about1.png").default} 380w, ${require("../img/about2.png").default} 600w, ${require("../img/about3.png").default} 850w, ${require("../img/about4.png").default} 1070w`}
          sizes="(max-width: 599px) 380px, (max-width: 919px) 600px, (max-width: 1399px) 850px, (min-width: 1400px) 1070px"
          src={require("../img/about4.png").default}
          alt="About hero mask book visualisation black and white"
          className={`about__image u-noised-image u-noised-image--abs ${hover? "u-hidden" : ""}`}
        />
        <img
          srcSet={ `${require("../img/about1-cl.png").default} 380w, ${require("../img/about2-cl.png").default} 600w, ${require("../img/about3-cl.png").default} 850w, ${require("../img/about4-cl.png").default} 1070w`}
          sizes="(max-width: 599px) 380px, (max-width: 919px) 600px, (max-width: 1399px) 850px, (min-width: 1400px) 1070px"
          src={require("../img/about4-cl.png").default}
          alt="About hero mask book visualisation in color"
          className={`about__image u-noised-image u-noised-image--abs ${hover? "" : "u-hidden"}`}
        />
      </div>
      <div className="about__content-box">
        <p className="about__text about__text--1 paragraph">Кто бы мог подумать, что знакомство основателей нашей студии - Владислава Лобановского и Кристины Малиновской - со временем приведёт к существованию одной из самых топовых музыкальных студий Беларуси?</p>
        <p className="about__text about__text--2 paragraph">Разрываясь между работой в нескольких местах, Кристина не забывала повышать свой профессиональный уровень вокалиста, в то время как Владислав задумывался над созданием собственной компании. И когда подвернулась возможность начать свой бизнес, наши музыкальные энтузиасты не стали терять время.</p>
        <p className="about__text about__text--3 paragraph">Первый год жизни студии начался с невероятного количества успешных пробных занятий и моментального увеличения числа учеников, однако при этом был полон трудностей, включая проблемы с арендой помещения и бытовые вопросы. В конце 2019 года мы смогли обустроить с нуля отдельное помещение в районе «Маяка Минска», где обитаем и по сей день. «Планы на будущее?» — спросите Вы.</p>
        <p className="about__text about__text--4 paragraph">Все планы раскрывать не хотим, чтобы не портить сюрприз, однако хотим заверить, что они весьма грандиозны!</p>
      </div>
      <div className={`about__accent ${animate? "about__accent--animate" : "u-hidden"}`}>грандиозно</div>
    </section>
  )
}

export default About;