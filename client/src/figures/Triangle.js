import { motion } from 'framer-motion';

function Triangle(props) {
  let variants = props.variants;
  
  if(!props.variants) {
    variants = {
      hidden: {
        opacity: 0,
        pathLength: 0
      },
      visible: {
        opacity: 1,
        pathLength: 1,
      }
    }
  }

  const transition = {
    duration: 3,
    ease: 'easeInOut'
  }


  return (
    <div className={props.className}>
      <svg style={{width: "inherit", height: "inherit"}} viewBox="0 0 375 638" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          variants={variants}
          initial={props.variants && props.initial? props.initial : 'hidden'}
          animate={props.variants && props.animate? props.animate : 'visible'}
          transition={props.transition || transition}
          d="M152.878 635.573L-54.3694 190.945L431.376 259.479L152.878 635.573Z" 
          stroke="#D73B30" 
          strokeWidth={`${ props.width || "2" }px`}/>
      </svg>
    </div>
  )
}

export default Triangle;