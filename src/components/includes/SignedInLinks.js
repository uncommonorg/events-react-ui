import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="sing-in">
            <li>
                <NavLink to='/'> HOME </NavLink>
            </li>
            <li>
                <NavLink to='NEWS'> NEWS </NavLink>
            </li>
            <li>
                <NavLink to='EVENTS'> EVENTS </NavLink>
            </li>
            <li>
                <NavLink to='REVIEWS'> REVIEWS </NavLink>
            </li>
            {/* <li>
                <NavLink to='Profile'>Profile</NavLink>
            </li> */}
            <li>
                <a  href="/" onClick={props.signOut}  > LOG OUT </a>
            </li>
            <li className='in' >
                <NavLink to='Profile' className='btn btn-floating peach lighten-8 '  > 
                   {props.profile.initials}
                 </NavLink>
                
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignedInLinks)


