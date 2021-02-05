import { motion } from 'framer-motion';
import { modalVariants, modalTransition } from './transitionProp';

import MenuHeader from '../components/MenuHeader';
import MenuNavigation from '../components/MenuNavigation';
import MenuFigure from '../components/MenuFigure';
import MenuFooter from '../components/MenuFooter';

function Menu() {
  return (
    <motion.div 
      initial="out"
      animate="in"
      exit="out"
      variants={modalVariants}
      transition={modalTransition}
      >
      <MenuHeader />
      <MenuNavigation />
      <MenuFigure />
      <MenuFooter />
    </motion.div>
  );
}

export default Menu;