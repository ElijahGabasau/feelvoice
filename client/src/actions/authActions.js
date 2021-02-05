export const loginUserAction = (object) => {
  return async function(dispatch) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object),
    });

    const responseJSON = await response.json();

    dispatch({
      type: 'LOGIN_USER',
      payload: responseJSON
    });
  }
}

export const logoutUserAction = () => {
  return async function(dispatch) {
    const response = await fetch('/api/logout');

    dispatch({
      type: 'LOGOUT_USER'
    });
  }
}

export const fetchUserAction = () => {
  return async function(dispatch) {
    const response = await fetch('/api/current_user');
    const responseJSON = await response.json();

    if(responseJSON.error) {
      return dispatch({
        type: 'FETCH_USER',
        payload: false
      })
    }

    dispatch({
      type: 'FETCH_USER',
      payload: responseJSON
    });
  }
}