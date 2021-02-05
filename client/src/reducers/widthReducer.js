const reducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_WIDTH':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;