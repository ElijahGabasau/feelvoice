import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews, fetchPinned } from '../actions';

import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './transitionProp';

import Stripes from '../components/Stripes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ArrowTitle from '../components/ArrowTitle';
import Articles from '../components/Articles';
import PinnedArticles from '../components/PinnedArticles';
import Scroll from '../components/Scroll';

function News(props) {
  useEffect(()=>{
    props.fetchNews();
    props.fetchPinned();
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
      <Navbar navigation="Интересности" />
      <ArrowTitle className="u-margin-top-md">Новости и Акции</ArrowTitle>
      <Articles className="u-margin-top-md" />
      <PinnedArticles className="u-margin-top-md" />
      <Footer />
    </motion.div>
  )
}

export default connect(null, { fetchNews, fetchPinned })(News);