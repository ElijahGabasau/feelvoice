import _ from 'lodash';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TEACHERS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'DELETE_TEACHER':
      return _.omit(state, action.payload);
    case 'UPDATE_TEACHER':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_TEACHER':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducer;