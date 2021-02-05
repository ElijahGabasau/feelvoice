import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTickets } from '../actions';

import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './transitionProp';

import CtaFrom from '../components/CtaForm';
import PrisingCta from '../components/PrisingCta';
import Tickets from '../components/Tickets';
import Stripes from '../components/Stripes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PrisingHeader from '../components/PrisingHeader';

function Prising(props) {
  useEffect(()=>{
    props.fetchTickets();
  }, [props])

  return(
    <motion.div 
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      >
      <Stripes />
      <Navbar navigation="Тарифы" />
      <PrisingHeader />
      <PrisingCta />
      <Tickets />
      <CtaFrom className={props.chosenTickets === "all" ? "u-margin-top-lg" : "u-margin-top-sm"}/>
      <Footer />
    </motion.div>
  )
}


const mapStateToProps = (state) => {
  return { 
    chosenTickets: state.chosenTickets
  };
}

export default connect(mapStateToProps, { fetchTickets })(Prising);