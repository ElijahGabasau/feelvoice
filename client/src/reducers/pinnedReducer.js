import _ from 'lodash';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PINNED':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'DELETE_PINNED':
      return _.omit(state, action.payload);
    case 'UPDATE_PINNED':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_PINNED':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducer;