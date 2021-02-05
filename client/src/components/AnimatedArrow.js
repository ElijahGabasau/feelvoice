import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function AnimatedArrow(props) {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);
  const render = [];

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  for (let i = 0; i < 4; i++) {
    const textVariants = {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1,
        transition: {
          duration: .4,
          delay: (i + 1) * .9
        }
      }
    }

    render.push (
      <motion.div
        key={`arrow-text-${i}`}
        initial="initial"
        animate="animate"
        variants={ textVariants } 
        className="animated-arrow__text"
      >
        <p className="animated-arrow__text__line animated-arrow__text__line--1">Свяжем Вас</p> 
        <p className="animated-arrow__text__line animated-arrow__text__line--2">с музыкой</p>
      </motion.div>
    )
  }

  const variants = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    animate: {
      x: ['-100%', '-100%', '0%'],
      opacity: [0, 1, 1],
      transition: {
        times: [0, .01, 1],
        duration: 3,
      }
    }
  }

  return (
    <div ref={ref} className={`animated-arrow ${props.className? props.className : ''}`}>
      {animate && 
        <div className="animated-arrow__content">
          <svg className="animated-arrow__arrow" viewBox="0 0 1502 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial="initial"
              animate="animate"
              variants={ variants } 
              d="M0 20H1500M1500 20L1449.42 1M1500 20L1449.42 44" 
              stroke="#EE8D03"
            />
          </svg>

          { render }
        </div>
      }
      
      
    </div>
  )
}

export default AnimatedArrow;