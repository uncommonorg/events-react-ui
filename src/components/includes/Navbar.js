
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import SignedInLinks from './SignedInLinks';
import SignedOut from './SignedOut';
import ImgLogo from './logo2.png';
import { connect } from 'react-redux'


function Navbar(props) {
    const {auth, profile} = props;
    const links = auth.uid ? <SignedInLinks profile={profile}  /> : <SignedOut />;


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div>
            <nav className="navbar">
                <div className="container navbar-container ">
                    <Link to='/' className="company-logo"   >
                     
                    <img src={ImgLogo} alt="logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active ' : 'nav-menu '}>

                        {links}
                       
                        
                        
                        

                    </ul>
                </div>
            </nav>
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile 

    }
}


export default connect(mapStateToProps)(Navbar);

