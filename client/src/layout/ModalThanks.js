import { motion } from 'framer-motion';
import { modalVariants, modalTransition } from './transitionProp';
import { withRouter } from "react-router";

import GoBackCross from '../components/GoBackCross';

function ModalThanks(props) {

  let depth = -1;

  if(props.history.location.state){
    depth = props.history.location.state.depth || -1;
  }


  return (
    <motion.div 
      initial="out"
      animate="in"
      exit="out"
      variants={modalVariants}
      transition={modalTransition}
      >
        <div className="modal modal--thanks">
          <GoBackCross depth={depth} className="modal__figure" />
          <img className="modal__image" src={require('../img/logo-solid.png').default} alt="feelvoice logo"/>
          <h1 className="modal__heading">Спасибо за вашу заявку!</h1>
          <p className="modal__text paragraph">Наш менеджер свяжется с вами уже очень скоро.</p>
        </div>
    </motion.div>
  )
}

export default withRouter( ModalThanks);