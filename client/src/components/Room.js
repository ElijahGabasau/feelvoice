import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import RoomSlider from './RoomSlider';
import Triangle from '../figures/Triangle';
import RoomImage from './roomImage/RoomImage';
import RoomText from './RoomText';

function Room(props) {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  
  return (
    <section className={`room ${props.className}`}>
      <div ref={ref} className={`room__heading room__heading--${props.order + 1}`}>
        <h2 className="heading-3">{ props.title }</h2>
        {animate && <Triangle className={`room__heading-figure room__heading-figure--${props.order % 3 + 1}`} width="5" />}
      </div>

      <RoomImage order={ props.order } selected={ selected } length={props.data.length} />

      <RoomText data={ props.data } selected={ selected } />

      <RoomSlider 
        data={ props.data } 
        selected={ selected } 
        setSelected={ setSelected } 
        position={(props.order + 1) % 2} 
        order={props.order % 3 + 1} 
      />
    </section>
  )
}


export default Room;