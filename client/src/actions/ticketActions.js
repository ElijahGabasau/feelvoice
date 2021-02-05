export const fetchTicketsAction = () => {
  return async function(dispatch) {
    const response = await fetch('/api/tickets');
    const responseJSON = await response.json();

    const parsed = [];

    for(let i = 0; i < responseJSON.length; i++){
      parsed.push({
        index: responseJSON[i].index,
        id: responseJSON[i]._id,
        title: responseJSON[i].title,
        type: responseJSON[i].type,
        price: responseJSON[i].price,
        about: responseJSON[i].about,
        amount: responseJSON[i].amount
      });
    }

    dispatch({
      type: 'FETCH_TICKETS',
      payload: parsed,
    });
  }
}

export const deleteTicketAction = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/api/ticket/${id}`, {
      method: 'DELETE',
    });
    const responseJSON = await response.json();

    const responseId = responseJSON._id;

    dispatch({
      type: 'DELETE_TICKET',
      payload: responseId,
    });
  }
}

export const updateTicketAction = (object) => {
  return async function(dispatch) {
    const response = await fetch('/api/ticket', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object),
    });
    const responseJSON = await response.json();

    const parsed = {
      index: responseJSON.index,
      id: responseJSON._id,
      title: responseJSON.title,
      type: responseJSON.type,
      price: responseJSON.price,
      about: responseJSON.about,
      amount: responseJSON.amount
    }

    dispatch({
      type: 'UPDATE_TICKET',
      payload: parsed,
    });
  }
}

export const createTicketAction = (object) => {
  return async function(dispatch) {
    const response = await fetch('/api/ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object),
    });
    const responseJSON = await response.json();

    const parsed = {
      index: responseJSON.index,
      id: responseJSON._id,
      title: responseJSON.title,
      type: responseJSON.type,
      price: responseJSON.price,
      about: responseJSON.about,
      amount: responseJSON.amount
    }

    dispatch({
      type: 'CREATE_TICKET',
      payload: parsed,
    });
  }
}