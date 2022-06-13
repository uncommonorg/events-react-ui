const initState = {
  // modified data to include details of the user
  // what you use is up to you - but need the token
    authError: null,
    email: '',
    token: ''
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_ERROR':
        console.log('login error');
        return {
          ...state,
          authError: 'Login failed'
        }
  
      case 'LOGIN_SUCCESS':
        console.log('login success');
        return {
          //saving the details of the user
          token: action.user.accessToken,
          email: action.user.email,
          authError: null
        }
  
      case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        return state;
  
      case 'SIGNUP_SUCCESS':
        console.log('signup success')
        return {
          ...state,
          authError: null
        }
  
      case 'SIGNUP_ERROR':
        console.log('signup error')
        return {
          ...state,
          authError: action.err.message
        }
  
      default:
        return state
    }
  };
  
  export default authReducer;