export const signIn = (user) => (dispatch) => {
  if (user) {
    // you need to save this user's details into the reducer
    // so that you can pass them to api methods that require them
    return dispatch({
      type: 'LOGIN_SUCCESS',
      user
    });
  } else {
    dispatch({ type: 'LOGIN_ERROR', err });
  }

}


export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    // const firestore = getFirestore();
    // this should be in the component. pass the user it returns to an action method
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(user => {
      // this shoudl be in the api. call it from the action method if you 
      // need to retrieve additional info beyond that in the user object passed to the
      // action method
      return fetch(url + 'userInfo',
        {
          method: 'post',
          mode: 'cors',
          headers: headers,
          body: JSON.stringify(userInfo)
        }).then((response) => {
          return response.json();
        });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}