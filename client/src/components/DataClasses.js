import { useState } from 'react';
import { connect } from 'react-redux';
import CreateClass from './CreateClass';

import EditClass from './EditClass';

function DataClasses(props) {
  const [ collapsed, setCollapsed ] = useState(true);

  const render = [];

  for(let i = 0; i < props.classes.length; i++){
    render.push(
      <EditClass key={`${props.classes[i].id}-edit`} data={props.classes[i]} />
    )
  }

  return (
    <section className={`data-section ${collapsed? 'u-margin-bottom-sm' : props.className}`}>
      <h2 
        className="heading-2 data-heading"
        onMouseDown={() => setCollapsed(!collapsed)}
      >
        Занятия
      </h2>
      <div className={`data-container ${collapsed? 'data-container--collapsed' : ''}`}>
        { render }
        <CreateClass />
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    classes: Object.values(state.classes),
  }
}

export default connect(mapStateToProps)(DataClasses);