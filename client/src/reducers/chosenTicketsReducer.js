const reducer = (state = 'all', action) => {
  switch (action.type) {
    case 'ALL_TICKETS':
      return action.payload;
    case 'PERSONAL_TICKETS':
      return action.payload;
    case 'GROUP_TICKETS':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;