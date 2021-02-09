import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeachers, fetchClasses, fetchNews } from '../actions';

import About from '../components/About';
import AnimatedArrow from '../components/AnimatedArrow';
import Stripes from '../components/Stripes';
import SubjectThumbnails from '../components/SubjectThumbnails';
import Footer from '../components/Footer';
import Greet from '../components/Greet';
import CtaForm from '../components/CtaForm';
import MainHeader from '../components/MainHeader';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './transitionProp';

import MainNews from '../components/MainNews';
import Navbar from '../components/Navbar';
import MainPrising from '../components/MainPrising';
import TeacherFigures from '../components/TeacherFigures';
import Scroll from '../components/Scroll';

function Main(props) {
  useEffect(() => {
    props.fetchTeachers();
    props.fetchClasses();
    props.fetchNews();
  }, [props]);

  return (
    <motion.div 
      initial="out"
      animate="in"
      exit="out"
      variants={ pageVariants }
      transition={ pageTransition }
      >
      <Scroll />
      <Stripes />
      <Navbar />
      <MainHeader />
      <Greet />
      <SubjectThumbnails />
      <TeacherFigures />
      <AnimatedArrow />
      <About className="u-margin-top-xhg" />
      <MainPrising />
      <MainNews />
      <CtaForm className="u-margin-top-hg"/>
      <Footer />
    </motion.div>
  )
}

export default connect(null, { fetchTeachers, fetchClasses, fetchNews })(Main);