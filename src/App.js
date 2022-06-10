import React from 'react';
import './App.css';
import Navbar from './components/includes/Navbar';
import Home from './components/pages/Home';
import News from './components/pages/News';
import EventPage from './components/pages/EventPage';
import Review from './components/pages/Review';
import PostDetails from './components/PostDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/includes/Footer';

import {connect} from 'react-redux';

import Signin from './components/Auth/Signin';
import SignUp from './components/Auth/SignUp';
import Profile from './components/pages/Profile';
import {Redirect } from 'react-router-dom';
import {compose} from 'redux'


function App(props) {
    const {auth} = props.auth;
    // if( auth.uid) return <Redirect to='/signin'/>
    return (
        <div className="container">

            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/News' component={News} />
                    <Route path='/Events' component={EventPage} />
                    <Route path='/Review' component={Review} />
                    <Route path='/PostDetails/:id' component={PostDetails} />
                    <Route path='/Signin' component={Signin} />

                    <Route path='/SignUp' component={SignUp} />
                    <Route path='/Profile' component={Profile} />
                   

                    <Route path='/SignUp' component={SignUp} /> 

                </Switch>
            </Router>
            
            <div className="footer mt-5">
                <Footer/>
            </div>
        </div>      
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps))   (App);
