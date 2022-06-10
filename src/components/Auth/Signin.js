import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signIn } from '../actions/authActions';
import { Redirect } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

 class Signin extends Component {

    state ={
        email:"",
        password:"", 
      
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // calling firebase method here, and passing
        // the result to action method - whose job is 
        // to update the reducer. only need to do that if logged in.
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.props.signIn(user);
        })
        .catch((error) => {
            // up to you what you do with the error
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("An error occured: ", errorCode, errorMessage);
        });
        
    }
    render() {


        const {authError, auth} = this.props;
        if( auth.uid) return <Redirect to=''/>

        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}  className="white">
                    <h5 className="grey-text text-darken-3">
                    log In
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password"  id="password" onChange={this.handleChange} />
 
                    </div>
                    <div className="input-field">
                        <button className="blue lighten-1 z-depth0 ">
                            Login
                        </button>
                        <div className="center">
                            {authError ?  <p>{authError}</p> :  null }

                        </div> 

                    </div>

                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Signin);
