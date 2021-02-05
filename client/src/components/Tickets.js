import React from 'react';
import { connect } from 'react-redux';

import Ticket from './Ticket';

class Tickets extends React.Component {
  renderTickets() {
    const data = this.props.data;
    const render = [];
    let position = 0;

    for (let i = 0; i < data.length; i++) {
      position++;

      if (this.props.chosenTickets === 'personal' && data[i].type !== 'personal'){
        position--;
        continue;
      } else if (this.props.chosenTickets === 'group' && data[i].type !== 'group'){
        position--;
        continue;
      }

      if (this.props.chosenTickets !== 'all' && i === 9 && position % 2 === 0) {
        position++;
      }

      render.push(
        <Ticket
          key={`ticket${i}`}
          position={position}
          title={data[i].title}
          amount={data[i].amount}
          about={data[i].about}
          price={data[i].price}
          figure={`${require('../img/ticket-figures.svg').default}#figure-${i < 10? i + 1 : i - 9}`}
        />
      )
    }

    return render;
  }

  render() {
    return (
      <section className="tickets">
        {this.renderTickets()}    
      </section>
    )
  }
} 

const mapStateToProps = (state) => {
  return { 
    data: Object.values(state.tickets),
    chosenTickets: state.chosenTickets
  };
}

export default connect(mapStateToProps)(Tickets);