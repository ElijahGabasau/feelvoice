import { connect } from 'react-redux';

import Teacher from './Teacher';
import { Triangle, Circle, Square, Sun, Shell, Star, Flower, Sinusoid } from '../figures/TeacherThumbnails';

function Teachers(props) {

  const figures = [
    <Triangle className={`teacher__figure teacher__figure--0`} />,
    <Circle className={`teacher__figure teacher__figure--1`} />,
    <Square className={`teacher__figure teacher__figure--2`} />,
    <Sun className={`teacher__figure teacher__figure--3`} />,
    <Shell className={`teacher__figure teacher__figure--4`} />,
    <Star className={`teacher__figure teacher__figure--5`} />,
    <Flower className={`teacher__figure teacher__figure--6`} />,
    <Sinusoid className={`teacher__figure teacher__figure--7`} />,
  ]

  const data = props.data;
  let render = [];

  for (let i = 0; i < data.length; i++) {
    const newRender = [ ...render];
    newRender.push(
      <Teacher 
        key={`teacher${i}`}
        position={i} 
        image={data[i].image}
        hover={data[i].imageHover}
        name={data[i].name}
        title={data[i].title}
        text1={data[i].text[0]}
        text2={data[i].text[1]}
      >
        { figures[i] }
      </Teacher>
    )
    render = newRender;
  }

  return render;
}

const mapStateToProps = (state) => {
  return { data: Object.values(state.teachers)};
}

export default connect(mapStateToProps)(Teachers);