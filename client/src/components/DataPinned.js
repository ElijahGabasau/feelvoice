import { useState } from 'react';
import { connect } from 'react-redux';
import CreatePinned from './CreatePinned';

import EditPinned from './EditPinned';

function DataPinned(props) {
  const [ collapsed, setCollapsed ] = useState(true);

  const render = [];

  for(let i = 0; i < props.pinned.length; i++){
    render.push(
      <EditPinned key={`${props.pinned[i].id}-edit`} data={props.pinned[i]} />
    )
  }

  return (
    <section className={`data-section ${collapsed? 'u-margin-bottom-sm' : props.className} `}>
      <h2
        className="heading-2 data-heading"
        onMouseDown={() => setCollapsed(!collapsed)}
      >
        Закреплённые новости
      </h2>
      <div className={`data-container ${collapsed? 'data-container--collapsed' : ''}`}>
        { render }
        <CreatePinned />
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    pinned: Object.values(state.pinned),
  }
}

export default connect(mapStateToProps)(DataPinned);