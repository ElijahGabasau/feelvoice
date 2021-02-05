import _ from 'lodash';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'DELETE_TICKET':
      return _.omit(state, action.payload);
    case 'UPDATE_TICKET':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_PINNED':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducer;