const reducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER': 
      return action.payload || false;
    case 'LOGIN_USER': 
      return action.payload || false;
    case 'LOGOUT_USER': 
      return action.payload || false;

    default: 
      return state;
  }
}

export default reducer;