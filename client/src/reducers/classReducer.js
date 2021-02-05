import _ from 'lodash';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CLASSES':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'DELETE_CLASS':
      return _.omit(state, action.payload);
    case 'UPDATE_CLASS':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_CLASS':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducer;