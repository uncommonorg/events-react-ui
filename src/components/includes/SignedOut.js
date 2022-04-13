import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOut = () => {
    return (
        <ul className="sing-out">
            <li>
                <NavLink to='/SignUp'> SignUp </NavLink>
            </li>
            
            <li>
                <NavLink to='/Signin'> LOGIN </NavLink>
            </li>
        </ul>
    )
}

export default SignedOut;
