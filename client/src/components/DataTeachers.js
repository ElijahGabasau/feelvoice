import { useState } from 'react';
import { connect } from 'react-redux';
import CreateTeacher from './CreateTeacher';

import EditTeacher from './EditTeacher';

function DataTeachers(props) {
  const [ collapsed, setCollapsed ] = useState(true);

  const render = [];

  for(let i = 0; i < props.teachers.length; i++){
    render.push(
      <EditTeacher key={`${props.teachers[i].id}-edit`} data={props.teachers[i]} />
    )
  }

  return (
    <section  className={`data-section ${collapsed? 'u-margin-bottom-sm' : props.className} `}>
      <h2 
        className="heading-2 data-heading"
        onMouseDown={() => setCollapsed(!collapsed)}
      >
        Учителя
      </h2>
      <div className={`data-container ${collapsed? 'data-container--collapsed' : ''}`}>
        { render }
        <CreateTeacher />
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    teachers: Object.values(state.teachers),
  }
}

export default connect(mapStateToProps)(DataTeachers);