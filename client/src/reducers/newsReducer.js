import _ from 'lodash';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NEWS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'DELETE_NEWS':
      return _.omit(state, action.payload);
    case 'UPDATE_NEWS':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_NEWS':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducer;