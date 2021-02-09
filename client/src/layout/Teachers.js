import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeachers } from '../actions';

import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './transitionProp';

import CtaFrom from '../components/CtaForm';
import Stripes from '../components/Stripes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RenderTeachers from '../components/Teachers';
import ArrowTitle from '../components/ArrowTitle';

import Scroll from '../components/Scroll';

function Teachers(props) {
  useEffect(() => {
    props.fetchTeachers();
  }, [props]);

  return (
    <motion.div 
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      >
      <Scroll />
      <Stripes noTab />
      <Navbar navigation="Учителя" />
      <section className="teachers u-margin-top-md">
        <ArrowTitle>Наставники школы</ArrowTitle>
        <RenderTeachers />
      </section>
      <CtaFrom className="u-margin-top-lg"/>
      <Footer />
    </motion.div>
  )
}

export default connect(null, { fetchTeachers })(Teachers);