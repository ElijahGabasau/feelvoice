import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchClasses } from '../actions';

import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './transitionProp';

import Subjects from '../components/Subjects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stripes from '../components/Stripes';
import CtaForm from '../components/CtaForm';
import ArrowTitle from '../components/ArrowTitle';

function Classes(props) {
  useEffect(()=>{
    props.fetchClasses();
  },[props]);

  return(
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={ pageVariants }
      transition={ pageTransition }

      className="classes"
    >
      <Stripes noTab />
      <Navbar navigation="Направления" />
      <ArrowTitle className="u-margin-top-md" >Направления обучения</ArrowTitle>
      <Subjects />
      <CtaForm className="u-margin-top-hg" />
      <Footer />
    </motion.div>
  )
}


export default connect(null, { fetchClasses })(Classes);