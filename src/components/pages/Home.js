
import {React, useState, useEffect} from 'react';
import Post from '../Post';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Hero from '../includes/hero'
import Events from './Events'



function Home(props) {
     
    const [posts, setPosts] = useState([
        {title: "The Future open source chatting", date: "Monday", venue:"Harare", id: 1 }, 
        {title: "The Future open source chatting", date: "Tuesday", venue:"Harare", id: 2 },
        {title: "The Future open source chatting", date: "Wednesday", venue:"Harare", id: 3 },
        {title: "The Future open source chatting", date: "Thursday", venue:"Harare" , id: 4},
        {title: "The Future open source chatting", date: "Friday", venue:"Harare", id: 5 },
        {title: "The Future open source chatting", date: "Saturday", venue:"Harare" , id: 6},  
      ]);
      

      useEffect( () => {
      }, [] );
   

    const  auth  = props.auth;
    if (!auth.uid) return <Redirect to='/signin' /> 

  

    

 

    return (
        
        <div>

          <Hero />
          
           <Post posts={posts} hed="Latest Events" />
            <div> 
                      
               
            <div className="col-12 p-0">
                  <h2>Upcoming Events</h2>
                </div>
                <Events latest={true} />
                

               
            </div>

            

        </div>
    )
}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
