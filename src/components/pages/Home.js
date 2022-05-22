import {React, useState, useEffect} from 'react';
import Post from '../Post';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Hero from '../includes/hero'
import Events from './Events'

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Home: (project) => dispatch(Home(project))
  }
}
function Home(props) {
    const [posts] = useState([
    ]);
    useEffect( () => {}, [] );
    const  auth  = props.auth;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div>
          <Hero />
          <Post posts={posts} hed="Latest Events" />
          <div> 
            <div className="col-12 p-0"><h2>Upcoming Events</h2>
            </div>
            <Events latest={true} />
          </div>
        </div>
    )
} 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
