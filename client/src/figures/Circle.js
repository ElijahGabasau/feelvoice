import { motion } from 'framer-motion';

function Circle(props) {
  return (
    <div className={props.className}>
      <svg style={{width: "inherit", height: "inherit"}} viewBox="0 0 136 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.ellipse
          initial={props.variants.initial}
          animate={props.variants.animate}
          transition={props.variants.transition}
          cx="68" cy="68.5" rx="68" ry="68.5" fill="#D73B30"
        />
      </svg>
    </div>
  )
}

export default Circle;