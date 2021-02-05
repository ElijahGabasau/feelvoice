import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ButtonSecondary(props) {
  const plain = (
      <svg className="btn__content" viewBox="0 0 252 63" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M26.3099 8V6H194.957V1H214.843V4H219.492H236.795V6H248.676V8" stroke="#1D2688"/>
        <path d="M2.54959 58.5V45.5H1V22.5H2.54959V6.5H17.5289V8.5" stroke="#1D2688"/>
        <path d="M197.797 59H212.777V62H232.405V59H235.246H251V35H249.967V14.5H248.676" stroke="#1D2688"/>
        <path d="M23.7273 59H82.3533V62H102.756V59H121.868H127.808V57" stroke="#1D2688"/>
        <rect x="3.3244" y="8" width="245.868" height="50" fill="#1D2688"/>
      </svg>

  );
  
  const dur = "8s"
  const variantsOne = {
    initial: {
      y: 0,
      opacity: 1
    },
    animate: {
      y: [0, 0, 0, 0],
      opacity: [1, 1, 0, 0],
      transition: {
        times: [0, .25, .2501, 1],
        duration: 4,
        repeat: Infinity,
        delay: 0,
      }
    },
  }

  const variantsTwo = {
    initial: {
      y: '-220%'
    },
    animate: {
      y: ['-220%', '-220%', '-100%', '-100%',],
      transition: {
        times: [0, .25, .2501, 1],
        duration: 4,
        repeat: Infinity,
      }
    },
  }

  const variantsThree = {
    initial: {
      y: '-330%'
    },
    animate: {
      y: ['-330%', '-330%', '-200%', '-200%',],
      transition: {
        times: [0, .5, .501, 1],
        duration: 4,
        repeat: Infinity,
      }
    },
  }

  const variantsFour = {
    initial: {
      y: '-440%'
    },
    animate: {
      y: ['-440%', '-440%', '-300%', '-300%',],
      transition: {
        times: [0, .75, .7501, 1],
        duration: 4,
        repeat: Infinity,
      }
    },
  }


  const onHover = (
    <div className="btn__content" style={{overflow: "hidden"}}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantsOne}
        style={{width: "inherit", height: "inherit"}} 
        >
        <svg 
          style={{width: "inherit", height: "inherit"}} 
          viewBox="0 0 252 63" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M26.3099 8V6H194.957V1H214.843V4H219.492H236.795V6H248.676V8" stroke="#D73B30"/>
          <path d="M2.54959 58.5V45.5H1V22.5H2.54959V6.5H17.5289V8.5" stroke="#D73B30"/>
          <path d="M197.798 59H212.777V62H232.405V59H235.246H251V35H249.967V14.5H248.676" stroke="#D73B30"/>
          <path d="M23.7273 59H82.3533V62H102.756V59H121.868H127.808V57" stroke="#D73B30"/>
          <g clipPath="url(#clip0)">
            <rect x="3.32439" y="8" width="245.868" height="50" fill="#D73B30"/>
            <path d="M138.2 13.8953L137.907 26.8824L126.806 20.1355L138.2 13.8953Z" fill="#EE8D03"/>
            <path d="M134.882 42.9391L151.008 50.2981L136.572 60.5848L134.882 42.9391Z" fill="#EE8D03"/>
            <path d="M249.054 26.2243L249.721 43.9382L234.047 35.6594L249.054 26.2243Z" fill="#EE8D03"/>
            <path d="M158.101 33.4434L165.549 41.344L154.983 43.8439L158.101 33.4434Z" fill="#EE8D03"/>
            <path d="M178.18 13.075L179.021 28.6484L165.113 21.5902L178.18 13.075Z" fill="#EE8D03"/>
            <path d="M162.18 49.075L163.021 64.6484L149.113 57.5902L162.18 49.075Z" fill="#EE8D03"/>
            <path d="M201.13 25.601L192.032 32.7096L190.425 21.2763L201.13 25.601Z" fill="#EE8D03"/>
            <path d="M219.748 6.61528L233.551 4.1422L228.791 17.3321L219.748 6.61528Z" fill="#EE8D03"/>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M222.825 18.0066L231.543 36.5949L211.086 34.8515L222.825 18.0066Z; 
                M153.824 -2.99342L162.543 15.5949L142.086 13.8515L153.824 -2.99342Z; 
                M222.825 18.0066L231.543 36.5949L211.086 34.8515L222.825 18.0066Z;"
              />
            </path>
            <path d="M202.239 42.5999L207.435 53.6776L195.243 52.6386L202.239 42.5999Z" fill="#EE8D03"/>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M180.945 7.38988L190.714 5.63947L187.346 14.9751L180.945 7.38988Z; 
                M209.945 25.3899L219.714 23.6395L216.345 32.9751L209.945 25.3899Z; 
                M180.945 7.38988L190.714 5.63947L187.346 14.9751L180.945 7.38988Z"
              />
            </path>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M191.02 50.0591L192.781 63.0027L180.427 57.7042L191.02 50.0591Z;
                M173.945 11.3899L183.714 9.63947L180.345 18.9751L173.945 11.3899Z; 
                M191.02 50.0591L192.781 63.0027L180.427 57.7042L191.02 50.0591Z"
              />
            </path>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M208.306 37.428L223.409 41.3195L212.487 52.4531L208.306 37.428Z; 
                M191.02 50.0591L192.781 63.0027L180.427 57.7042L191.02 50.0591Z; 
                M208.306 37.428L223.409 41.3195L212.487 52.4531L208.306 37.428Z"
              />
            </path>
            <path d="M208.306 37.428L223.409 41.3195L212.487 52.4531L208.306 37.428Z" fill="#EE8D03"/>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M162.109 8.54305L153.657 18.4075L149.34 6.15528L162.109 8.54305Z; 
                M208.306 37.428L223.409 41.3195L212.487 52.4531L208.306 37.428Z; 
                M162.109 8.54305L153.657 18.4075L149.34 6.15528L162.109 8.54305Z"
              />
            </path>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M150.444 19.2326L151.474 27.1171L143.583 23.2502L150.444 19.2326Z; 
                M229.118 22.1356L233.978 31.0234L223.851 30.7885L229.118 22.1356Z; 
                M162.109 8.54305L153.657 18.4075L149.34 6.15528L162.109 8.54305Z"
              />
            </path>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M171.199 50.7582L165.738 53.3714L166.666 46.7457L171.199 50.7582Z; 
                M176.109 23.5431L167.657 33.4075L163.34 21.1553L176.109 23.5431Z; 
                M150.444 19.2326L151.474 27.1171L143.583 23.2502L150.444 19.2326Z"
              />
            </path>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M186.628 33.0924L186.912 45.1274L175.653 38.0392L186.628 33.0924Z; 
                M150.444 19.2326L151.474 27.1171L143.583 23.2502L150.444 19.2326Z; 
                M171.199 50.7582L165.738 53.3714L166.666 46.7457L171.199 50.7582Z"
              />
            </path>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M237.628 48.0924L237.912 60.1274L226.653 53.0392L237.628 48.0924Z; 
                M171.199 50.7582L165.738 53.3714L166.666 46.7457L171.199 50.7582Z; 
                M186.628 33.0924L186.912 45.1274L175.653 38.0392L186.628 33.0924Z"
              />
            </path>
            <path fill="#EE8D03">
              <animate 
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="
                M242.772 16.8934L236.108 19.931L237.379 11.9379L242.772 16.8934Z; 
                M235.198 43.7582L229.737 46.3714L230.665 39.7457L235.198 43.7582Z; 
                M186.628 33.0924L186.912 45.1274L175.653 38.0392L186.628 33.0924Z"
              />
            </path>
            <path d="M212.813 3.61101L211.838 21.4154L196.153 9.96475L212.813 3.61101Z" fill="#EE8D03"/>
            <rect width="128" height="50" transform="translate(3.00017 8)" fill="#EE8D03"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect x="3.32439" y="8" width="245.868" height="50" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantsTwo}
        style={{width: "inherit", height: "inherit"}} 
      >
        <svg 
          style={{width: "inherit", height: "inherit"}} 
          viewBox="0 0 252 63" fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path d="M26.3099 8V6H194.957V1H214.843V4H219.492H236.795V6H248.676V8" stroke="#1D2688"/>
          <path d="M2.54959 58.5V45.5H1V22.5H2.54959V6.5H17.5289V8.5" stroke="#1D2688"/>
          <path d="M197.798 59H212.777V62H232.405V59H235.246H251V35H249.967V14.5H248.676" stroke="#1D2688"/>
          <path d="M23.7273 59H82.3533V62H102.756V59H121.868H127.808V57" stroke="#1D2688"/>
          <g clipPath="url(#clip0)">
            <rect x="3.32437" y="8" width="245.868" height="50" fill="#1D2688">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#1D2688; #EE8D03; #1D2688"
              />
            </rect>
            <rect width="3" height="61" transform="translate(11.7882 5) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(8.78824 1) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3" height="61" transform="translate(50.7882 7) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3" height="61" transform="translate(118.788 7) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3" height="61" transform="translate(56.7882 6) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3" height="61" transform="translate(217.788 6) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3" height="61" transform="translate(233.788 7) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(240.788 6) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(212.788 7) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(131.788 7) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="10.0313" height="61" transform="translate(142.788 4) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(40.7882 1) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(62.7882) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(67.7882) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(89.7882 1) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(85.7882 1) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(21.7882 1) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3" height="61" transform="translate(163.788 4) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3" height="61" transform="translate(121.788 4) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3" height="61" transform="translate(95.7882 5) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="1.07247" height="61" transform="translate(171.788 4) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="6.32752" height="61" transform="translate(30.7882 6) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="6.32752" height="61" transform="translate(103.788 3) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="6.32752" height="61" transform="translate(103.788 3) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="6.32752" height="61" transform="translate(225.788 6) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="6.32752" height="61" transform="translate(175.788 5) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="6.32752" height="61" transform="translate(196.788 4) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
            <rect width="3.09678" height="61" transform="translate(247.788 8) rotate(15)" fill="#EE8D03">
              <animate 
                attributeName="fill" 
                dur="2000ms"
                repeatCount="indefinite"
                values="#EE8D03; #1D2688; #EE8D03"
              />
            </rect>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect x="3.32437" y="8" width="245.868" height="50" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantsThree}
        style={{width: "inherit", height: "inherit"}} 
      >
        <svg style={{width: "inherit", height: "inherit"}}  viewBox="0 0 252 63" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M26.3099 8V6H194.957V1H214.843V4H219.492H236.795V6H248.676V8" stroke="#D73B30"/>
          <path d="M2.54959 58.5V45.5H1V22.5H2.54959V6.5H17.5289V8.5" stroke="#D73B30"/>
          <path d="M197.797 59H212.777V62H232.405V59H235.246H251V35H249.967V14.5H248.676" stroke="#D73B30"/>
          <path d="M23.7273 59H82.3533V62H102.756V59H121.868H127.808V57" stroke="#D73B30"/>
          <g clipPath="url(#clip0)">
            <rect x="3.3244" y="8" width="245.868" height="50" fill="white"/>
            <rect width="248" height="2" transform="translate(2.99994 20)" fill="#D73B30"/>
            <rect width="248" height="5" transform="translate(2.99994 40)" fill="#D73B30"/>
            <rect width="246" height="2" transform="translate(2.99994 33)" fill="#D73B30"/>
            <rect width="249" height="2" transform="translate(2.99994 29)" fill="#D73B30"/>
            <rect width="251" height="2" transform="translate(-1.00006 51)" fill="#D73B30"/>
            <rect width="254" height="2" transform="translate(-1.00006 50)" fill="#D73B30"/>
            <rect width="254" height="1" transform="translate(0.999939 54)" fill="#D73B30"/>
            <rect width="254" height="1" transform="translate(0.999939 27)" fill="#D73B30"/>
            <rect width="7" height="50" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="17.9999; 37.9999; 57.9999"
              />
            </rect>
            <rect width="3" height="52" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="126; 146; 166"
              />
            </rect>
            <rect width="1" height="52" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="132; 152; 172"
              />
            </rect>
            <rect width="2" height="52" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="44.9999; 64.9999; 84.9999"
              />
            </rect>
            <rect width="7" height="50" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="226; 206; 186"
              />
            </rect>
            <rect width="4" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="219; 199; 179"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="236; 256; 276"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="161; 181; 201"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="157; 137; 117"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="157; 177; 197"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="13.9999; 33.9999; 53.9999"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="17.9999; 37.9999; 57.9999"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="17.9999; 37.9999; 57.9999"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="10.9999 ; 40.9999; 60.9999"
              />
            </rect>
            <rect width="1" height="53"  y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="91.9999; 71.9999 ; 41.9999"
              />
            </rect>
            <rect width="1" height="53" y="8"  fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="88.9999; 58.9999; 28.9999"
              />
            </rect>
            <rect width="1" height="53" y="8" fill="#D73B30">
              <animate 
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="163; 133; 100"
              />
            </rect>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect x="3.3244" y="8" width="245.868" height="50" fill="white"/>
          </clipPath>
          </defs>

        </svg>
      
      </motion.div>



<path d="M73.4347 18.0624L66.0987 21.8026L73.0059 26.2857L73.4347 18.0624Z" fill="#1D2688"/>
<path d="M210.902 32.3954L205.544 35.1273L210.589 38.4016L210.902 32.3954Z" fill="#1D2688"/>
<path d="M127.405 42.5082L137.349 47.5781L127.987 53.6548L127.405 42.5082Z" fill="#1D2688"/>
<path d="M231.725 15.3643L228.582 10.2369L225.713 15.523L231.725 15.3643Z" fill="#1D2688"/>
<path d="M246.2 28.7413L247.245 8.69328L229.36 17.8119L246.2 28.7413Z" stroke="#1D2688"/>
<path d="M14.7899 14L14.548 18.4813L13.5271 14.0891L14.0701 18.5492L12.2955 14.3542L13.61 18.6832L11.1252 14.7888L13.1789 18.8801L10.0452 15.3822L12.7875 19.1351L9.08201 16.1197L12.4453 19.4418L8.25937 16.9832L12.161 19.7928L7.59754 17.9515L11.9413 20.1793L7.11281 19.0007L11.7918 20.5918L6.81711 20.105L11.7161 21.0202L6.71773 21.2371L11.7161 21.454L6.81711 22.3692L11.7918 21.8824L7.11281 23.4735L11.9413 22.295L7.59754 24.5227L12.161 22.6815L8.25937 25.491L12.4453 23.0324L9.08201 26.3545L12.7875 23.3391L10.0452 27.0921L13.1789 23.5941L11.1252 27.6854L13.61 23.791L12.2955 28.12L14.0701 23.9251L13.5271 28.3851L14.548 23.9929L14.7899 28.4742L15.0318 23.9929L16.0527 28.3851L15.5097 23.9251L17.2843 28.12L15.9698 23.791L18.4546 27.6854L16.4009 23.5941L19.5346 27.0921L16.7923 23.3391L20.4978 26.3545L17.1344 23.0324L21.3204 25.491L17.4188 22.6815L21.9822 24.5227L17.6385 22.295L22.467 23.4735L17.788 21.8824L22.7627 22.3692L17.8637 21.454L22.8621 21.2371L17.8637 21.0202L22.7627 20.105L17.788 20.5918L22.467 19.0007L17.6385 20.1793L21.9822 17.9515L17.4188 19.7928L21.3204 16.9832L17.1344 19.4418L20.4978 16.1197L16.7923 19.1351L19.5346 15.3822L16.4009 18.8801L18.4546 14.7888L15.9698 18.6832L17.2843 14.3542L15.5097 18.5492L16.0527 14.0891L15.0318 18.4813L14.7899 14Z" fill="#1D2688"/>
<path d="M18.6802 24.7413L19.7256 4.69328L1.84082 13.8119L18.6802 24.7413Z" stroke="#1D2688"/>



      <motion.div
        initial="initial"
        animate="animate"
        variants={variantsFour}
        style={{width: "inherit", height: "inherit"}} 
      >
          <svg style={{width: "inherit", height: "inherit"}}  viewBox="0 0 252 63" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M26.3099 8V6H194.957V1H214.843V4H219.492H236.795V6H248.676V8" stroke="#EE8D03"/>
          <path d="M2.54959 58.5V45.5H1V22.5H2.54959V6.5H17.5289V8.5" stroke="#EE8D03"/>
          <path d="M197.797 59H212.777V62H232.405V59H235.246H251V35H249.967V14.5H248.676" stroke="#EE8D03"/>
          <path d="M23.7273 59H82.3533V62H102.756V59H121.868H127.808V57" stroke="#EE8D03"/>
          <g clipPath="url(#clip0)" preserveAspectRatio="xMaxYMin">
            <rect x="3.3244" y="8" width="245.868" height="50" fill="#EE8D03">
            </rect>
            <rect x="0.000183105" y="6" width="15" height="15" fill="#1D2688">
            </rect>
            <rect width="14" height="14" stroke="#1D2688">
              <animate
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="98.5002; 123.5; 126.5"
              />
              <animate
                attributeName="y" 
                dur={ dur } 
                repeatCount="indefinite"
                values="37.5; 15.5; 13.5"
              />
            </rect>
            <rect x="93.5002" y="45.5" width="8" height="8" stroke="#1D2688">
              <animate
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="93.5002; 93.5002; 93.5"
              />
              <animate
                attributeName="y" 
                dur={ dur } 
                repeatCount="indefinite"
                values="45.5; 45.5; 18.5"
              />
            </rect>
            <rect x="60.0002" y="49" width="15" height="15" fill="#1D2688">
              <animate
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="60.0002; 68; 63"
              />
              <animate
                attributeName="y" 
                dur={ dur } 
                repeatCount="indefinite"
                values="49; 33; 8"
              />
            </rect>
            <rect x="149" y="13" width="7" height="7" fill="#1D2688">
              <animate
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="149; 149; 151"
              />
              <animate
                attributeName="y" 
                dur={ dur } 
                repeatCount="indefinite"
                values="13; 13; 33"
              />
            </rect>
            <rect x="142" y="52" width="7" height="7" fill="#1D2688">
            </rect>
            <rect x="221" y="6" width="29" height="29" fill="#1D2688">
            </rect>
            <rect x="243.5" y="7.5" width="8" height="8" stroke="white">
            </rect>
            <rect x="235.5" y="12.5" width="11" height="11" stroke="white">
            </rect>
            <rect width="20" height="20" fill="#1D2688">
              <animate
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="236; 236; 231"
              />
              <animate
                attributeName="y" 
                dur={ dur } 
                repeatCount="indefinite"
                values="45; 45; 30"
              />
            </rect>
            <path stroke="white">
              <animate
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="M246 45V65; M246 45V65; M241 30V50"
              />
            </path>
            <path d="M236 55C236.4 55 249.5 55 256 55" stroke="white">
              <animate
                attributeName="d" 
                dur={ dur } 
                repeatCount="indefinite"
                values="M236 55C236.4 55 249.5 55 256 55; M236 55C236.4 55 249.5 55 256 55; M231 40C231.4 40 244.5 40 251 40"
              />
            </path>
            <rect x="3.00018" y="42" width="20" height="20" fill="#1D2688">
            </rect>
            <path d="M13.0002 42V62" stroke="white">
            </path>
            <path d="M16.0002 42V62" stroke="white">
            </path>
            <path d="M10.0002 42V62" stroke="white">
            </path>
            <path d="M3.00018 52C3.40018 52 16.5002 52 23.0002 52" stroke="white">
            </path>
            <rect x="182" y="8" width="13" height="13" fill="#1D2688">
            </rect>
            <path d="M188.5 8V21" stroke="white">
            </path>
            <path d="M190.45 8V21" stroke="white">
            </path>
            <path d="M186.55 8V21" stroke="white">
            </path>
            <path d="M182 14.5C182.26 14.5 190.775 14.5 195 14.5" stroke="white">
            </path>
            <rect x="104" y="22" width="26" height="26" fill="#1D2688">
            </rect>
            <rect width="7" height="7" fill="#1D2688">
              <animate
                attributeName="x" 
                dur={ dur } 
                repeatCount="indefinite"
                values="17.0002; 28; 55"
              />
              <animate
                attributeName="y" 
                dur={ dur } 
                repeatCount="indefinite"
                values="22; 33; 48"
              />
            </rect>
            <rect height="54" transform="translate(41.0002 6)" fill="#1D2688">
              <animate
                attributeName="width" 
                dur={ dur } 
                repeatCount="indefinite"
                values="4; 8; 9 "
              />
              <animate
                attributeName="transform" 
                dur={ dur } 
                repeatCount="indefinite"
                values="translate(41.0002 6); translate(41.0002 6); translate(32 6)"
              />
            </rect>
            <rect width="4" height="54" transform="translate(208 6)" fill="#1D2688">
            </rect>
            <rect height="54" fill="#1D2688">
            <animate
                attributeName="width" 
                dur={ dur } 
                repeatCount="indefinite"
                values="2; 4; 4"
              />
              <animate
                attributeName="transform" 
                dur={ dur } 
                repeatCount="indefinite"
                values="translate(47.0002 7); translate(53 7); translate(45 7)"
              />
            </rect>
            <rect width="2" fill="#1D2688">
              <animate
                attributeName="transform" 
                dur={ dur } 
                repeatCount="indefinite"
                values="translate(204 16); translate(214 16); translate(213 -8)"
              />
              <animate
                attributeName="height" 
                dur={ dur } 
                repeatCount="indefinite"
                values="54; 54; 58"
              />
            </rect>
            <rect width="2" fill="#1D2688"> 
              <animate
                attributeName="height" 
                dur={ dur } 
                repeatCount="indefinite"
                values="16; 33; 16"
              />
              <animate
                attributeName="transform" 
                dur={ dur } 
                repeatCount="indefinite"
                values="translate(153 45); translate(153 28); translate(153 45)"
              />
            </rect>
            <rect width="2" height="46" transform="translate(159 7)" fill="#1D2688">
            </rect>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect x="3.3244" y="8" width="245.868" height="50" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </motion.div>

  </div>
);
  
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} 
      className={`btn ${props.className}`}
    >
      {hover ? onHover : plain }
      {
        props.to?
        <button className="btn__btn">
          <Link className="a" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "inherit", height: "inherit"}} to={props.to}>
            {props.children}
          </Link>
        </button>
        : props.action 
          ? <button type={props.action} className="btn__btn">
              {props.children}
            </button>
          : <button type="button" className="btn__btn">
              {props.children}
            </button>
      }
    </div>
  );
}

export default ButtonSecondary;