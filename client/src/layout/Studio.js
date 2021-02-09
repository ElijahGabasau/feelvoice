import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './transitionProp';

import Stripes from '../components/Stripes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ArrowTitle from '../components/ArrowTitle';
import ArrowParagraph from '../components/ArrowParagraph';
import ReversedArrowParagraph from '../components/ReversedArrowParagraph';
import CtaForm from '../components/CtaForm';
import Rooms from '../components/Rooms';
import Scroll from '../components/Scroll';


function Studio() {
  return(
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Scroll />
      <Stripes noTab />
      <Navbar navigation="Наша Студия" />
      <ArrowTitle className="u-margin-top-md">Экскурсия по нашей школе</ArrowTitle>
      <ArrowParagraph>
        <p className="paragraph--sm">
          Добро пожаловать в нашу студию! <br /> Здесь у Вас есть возможность ознакомиться с местом, где проходят занятия, а также нашим рабочим инвентарем.
        </p>
        <p className="paragraph--sm">
          Чтобы прочитать описания каждого предмета, нажмите на кнопку с соответствующим названием.
        </p>
      </ArrowParagraph>
      <Rooms className="u-margin-top-md-2" />
      <ReversedArrowParagraph >
        <p className="paragraph--sm">
        Чтобы познакомиться со всей студией целиком, записывайтесь на бесплатное пробное занятие! :)
        </p>
      </ReversedArrowParagraph>
      <CtaForm className="u-margin-top-lg" />
      <Footer />
    </motion.div>
  )
}

export default Studio;