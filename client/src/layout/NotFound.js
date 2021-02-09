import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './transitionProp';

import Button from '../components/Button';

function NotFound() {
  return(
    <motion.section 
      className="not-found"
      initial="out"
      animate="in"
      exit="out"
      variants={ pageVariants }
      transition={ pageTransition }
    >
      <img className="not-found__image" src={require("../img/notFound.png").default} alt="page not found" />
      <Button type="4" className="not-found__btn"><a className="a" href="/">На главную</a></Button>
    </motion.section>
  )
}

export default NotFound;