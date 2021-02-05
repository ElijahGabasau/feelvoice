import { useState } from 'react';
import { connect } from 'react-redux';
import CreateTicket from './CreateTicket';

import EditTicket from './EditTicket';

function DataTickets(props) {
  const [ collapsed, setCollapsed ] = useState(true);

  const render = [];

  for(let i = 0; i < props.tickets.length; i++){
    render.push(
      <EditTicket key={`${props.tickets[i].id}-edit`} data={props.tickets[i]} />
    )
  }

  return (
    <section className={`data-section ${collapsed? 'u-margin-bottom-sm' : props.className} `}>
      <h2 
        className="heading-2 data-heading"
        onMouseDown={() => setCollapsed(!collapsed)}
      >
        Тарифы
      </h2>
      <div className={`data-container ${collapsed? 'data-container--collapsed' : ''}`}>
        { render }
        <CreateTicket />
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: Object.values(state.tickets),
  }
}

export default connect(mapStateToProps)(DataTickets);