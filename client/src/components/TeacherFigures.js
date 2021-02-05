import { connect } from 'react-redux';

import TeacherFigure from './TeacherFigure';
import { Circle, Path, Rectangle, Triangle, Rhombus, Shell } from '../figures/TeacherFigures';
import { Star } from '../figures/TeacherThumbnails';

function TeacherFigures(props) {

  const figures = [
    <Circle className="teacher-figure__hero teacher-figure__hero--1" />,
    <Path className="teacher-figure__hero teacher-figure__hero--2" />,
    <Rectangle className="teacher-figure__hero teacher-figure__hero--3" />,
    <Triangle className="teacher-figure__hero teacher-figure__hero--4" />,
    <Rhombus className="teacher-figure__hero teacher-figure__hero--5" />,
    <Shell className="teacher-figure__hero teacher-figure__hero--6" />,
    <Star className="teacher-figure__hero teacher-figure__hero--7" />,
  ]

  const render = [];

  for (let i = 1; i < props.data.length; i++) {
    if(i === 8) {
      break;
    }

    render.push(
      <TeacherFigure
        key={`teacherFigure${i}`}
        position={i}
        name={props.data[i].name}
      >
        { figures[i - 1] }
      </TeacherFigure>
    )
  }

  return (
    <section className="u-margin-top-hg teacher-figures">
      <h3 className="heading-3 teacher-figures__title"><span className="u-block teacher-figures__title--1">Наши</span> <span className="u-block teacher-figures__title--2">Учителя</span></h3>
      <a href="/teachers" className="teacher-figures__cta btn-cta btn-cta--light u-margin-bottom-sm">Познакомиться</a>

      {render}

    </section>
  )
}

const mapStateToProps = (state) => {
  return { data: Object.values(state.teachers)};
}

export default connect(mapStateToProps)(TeacherFigures);