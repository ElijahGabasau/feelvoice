import { motion } from 'framer-motion';

function TriSquare(props) {

  return (
    <div className={props.className}>
      <svg style={{width: "inherit", height: "inherit", overflow: "visible"}} viewBox="0 0 190 225" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect 
          initial={{
            opacity: 0,
            y: 100,
            x: 0
          }}
          animate={{
            opacity: [0, 1, 1],
            y: [100, 50, 0],
            x: [0, 0, 0]
          }}
          transition={{
            ease: props.transition.ease,
            duration: props.transition.duration,
            delay: props.transition.duration *.6 + props.transition.delay,
            times: [0, .5, 1],
          }}
          x="127.128" y="14.0028" width="61.7139" height="64.9646" stroke="#D73B30" strokeWidth="2"/>
        
        <motion.rect 
          initial={{
            opacity: 0,
            y: 100,
            x: 200
          }}
          animate={{
            opacity: [0, 1, 1],
            y: [100, -1, 0],
            x: [200, 100, 0]
          }}
          transition={{
            ease: props.transition.ease,
            duration: props.transition.duration * 1.2,
            delay: props.transition.delay,
            times: [0, .5, 1],
          }}
          x="1" y="38.7083" width="176.139" height="184.591" stroke="#D73B30" strokeWidth="2"/>
      
        <motion.rect 
          initial={{
            opacity: 0,
            y: 100,
            x: 200
          }}
          animate={{
            opacity: [0, 1, 1],
            y: [100, -1, 0],
            x: [200, 100, 0]
          }}
          transition={{
            times: [0, .5, 1],
            ease: props.transition.ease,
            duration: props.transition.duration * 1.1,
            delay: props.transition.delay + props.transition.duration * 0.4,
          }}
          x="40.0088" y="1" width="98.1218" height="103.323" stroke="#D73B30" strokeWidth="2"/>
      </svg>
    </div>
  )
}

export default TriSquare;