import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { getWidth } from '../actions';

function RoomSlider(props) {
  const background = (
    <svg className={`room-slider__background room-slider__background--${props.order}`} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M22.0586 6.5082V4.93443H162.373V1H178.919V3.36066H182.786H197.183V4.93443H207.067V6.5082" stroke="#D73B30"/>
      <path d="M2.28926 46.2459V36.0164H1V17.918H2.28926V5.32788H14.7521V6.90165" stroke="#D73B30"/>
      <path d="M164.734 46.6394H177.197V49.0001H193.528V46.6394H195.891H208.999V27.7542H208.139V11.623H207.065" stroke="#D73B30"/>
      <path d="M19.9102 46.6394H68.6871V49.0001H85.6624V46.6394H101.563H106.505V45.0657" stroke="#D73B30"/>
      <rect x="3.43359" y="7.0083" width="203.562" height="38.3443" stroke="#D73B30"/>
    </svg>

  );

  const checked = (
    <svg className={`room-slider__background room-slider__background--${props.order}`} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M22.0586 6.5082V4.93443H162.373V1H178.919V3.36066H182.786H197.183V4.93443H207.067V6.5082" stroke="#D73B30"/>
      <path d="M2.28926 46.2459V36.0164H1V17.918H2.28926V5.32788H14.7521V6.90165" stroke="#D73B30"/>
      <path d="M164.734 46.6394H177.197V49.0001H193.528V46.6394H195.891H208.999V27.7542H208.139V11.623H207.065" stroke="#D73B30"/>
      <path d="M19.9102 46.6394H68.6871V49.0001H85.6624V46.6394H101.563H106.505V45.0657" stroke="#D73B30"/>
      <rect className={`room-slider__background--${props.order}-filled`} x="2.93359" y="6.5083" width="204.562" height="39.3443" fill="#D73B30"/>
    </svg>
  );

  const render = [];
  
  for (let i = 0; i < props.data.length; i++) {
    render.push(
      <li 
        key={`${props.order}-key-${i}`}
        className={`room-slider__key ${props.selected === i? `room-slider__key--selected-${props.order}` : ''}`}
        onMouseDown={() => props.setSelected(i)}
      >
        { props.selected === i ? checked : background }
        { props.data[i].title }
      </li>
    )
  }
 

  return (
    <div 
      className={`room-slider room-slider--${props.position === 0? 'even' : 'odd'} room__slider ${props.className}`}
      onMouseDown={props.getWidth}
    >
      <motion.ul 
        className={`room-slider__container room-slider__container--${props.position === 0? 'even' : 'odd'}`}
        drag="x"
        dragConstraints={{ 
          left: (props.width > 920
            ? 0
            : props.width < 400 
              ? (props.data.length) * -100 
              : (props.width > 600 
                ? (props.data.length-2) * -100 
                : (props.data.length-1) * -100)), 
          right: props.width > 920 ? 0 : 20
        }}
        dragElastic={props.width > 920? 0 : .5 }
        dragMomentum={props.width > 920? false : true }
      >
        { render }
      </motion.ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { width: state.width }
}

export default connect(mapStateToProps, { getWidth })(RoomSlider);