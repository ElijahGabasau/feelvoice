import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import Triangle from '../figures/Triangle';
import SubjectThumbnail from './SubjectThumbnail';
import Button from './Button';
import { Sinusoid, Art, Lines } from '../figures/SubjectThumbnails';

const noImage = require('../img/no-image.svg').default;

function SubjectThumbnails(props) {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const data = props.data;
  const length = props.data.length > 7 ? 6 : props.data.length;

  let render = [];

  for (let i = 0; i < length; i++) {
    let figure;
    if(i === 0) {
      figure = <Lines className="subject-thumbnail__figure subject-thumbnail__figure--4" />
    } else if (i === 3) {
      figure = <Sinusoid className="subject-thumbnail__figure subject-thumbnail__figure--1" />
    } else if (i === 5) {
      figure = <Art className="subject-thumbnail__figure subject-thumbnail__figure--6" />  
    }


    render.push(
      <SubjectThumbnail
        key={`subject${i}`}
        position={i + 1}
        title={data[i].title }
        link={data[i].type }
        image={data[i].thumbnail || noImage}
        hover={data[i].thumbnailHover || noImage}
      >
        { figure }
      </SubjectThumbnail>
    )
  }

  return (
    <section ref={ref} className="u-margin-top-hg subject-thumbnails">
      <h3 className="subject-thumbnails__heading heading-3">Направления</h3>

      {render}

      <Button type="1" className="subject-thumbnails__btn" to="/form">Записаться</Button>

      {animate && 
        <Triangle 
          className="subject-thumbnails__figure" 
          transition={{
            duration: 5,
            ease: 'easeInOut'
          }}
        />
      }
    </section>
  )
}

const mapStateToProps = (state) => {
  return { 
    data: Object.values(state.classes)
  };
}

export default connect(mapStateToProps)(SubjectThumbnails);