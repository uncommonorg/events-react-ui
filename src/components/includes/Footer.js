import React from 'react';
import './footer.css'; 

import './footer.css';
import { FaFacebook, FaTwitter,FaInstagram, FaLinkedin } from 'react-icons/fa';

import logo from './logo.png';




function Footer() {
    return (
        <div className="container">
           <div className="footer-inner">
               <img src={logo} alt="logo" />
               <div>
                   <FaFacebook  className="social-icons"/>
                   <FaTwitter   className="social-icons"/>
                   <FaInstagram className="social-icons"/>
                   <FaLinkedin  className="social-icons"/>
               </div>
               <p className="rights-reserved">Copyright 2021 || all rights reserved</p>
           </div>
        </div>
    )
}
export default Footer;