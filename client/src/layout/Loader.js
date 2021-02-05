import { motion } from 'framer-motion';
import { modalVariants, modalTransition } from './transitionProp';

function Loader() {
  return (
    <motion.div 
      animate="in"
      exit="out"
      variants={modalVariants}
      transition={modalTransition}

      className="loader"
    >
      <h1 className="heading-1 loader__heading"><span className="loader__heading--part u-uppercase">Feel</span><span className="loader__heading--part" >voice</span></h1>
      <div className="loader__container">
        <div className="loader__stripe"></div>
      </div>

    </motion.div>
  )
}

export default Loader;