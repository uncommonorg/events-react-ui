import { useEffect, useState } from "react";
import PostForm from "../forms/PostForm";
import * as api from "../../api";
import EventList from "../includes/EventList";


const Events = ({latest}) => {
    

    const eventId = 1;
    const [events, setEvents] = useState([]);
    const [show, setShow ] = useState(false)
    // const show = !hide;
   
    


    useEffect(() => {
        api.fetchAllEvents().then((response) => {
            if (latest){
                setEvents([response.pop()]);
            } else{
                setEvents(response);
            }
            
        });
    },
        [latest]);

    const addEvent = (event) => {
        api.addEvent(event).then(data => {
            setEvents(oldEvents => [...oldEvents, data]);
        });
    } 

// end of API code
// cards
    // const If = ({conditional, component}) => {
    //     if (conditional) return component;
    //     return null;   
    // }
    return (
        <div className="container">
            <div className="row">
                

               

              
             
              {events.map(function (item) {
                return <div className="col-md-4">
                 <div className="latest" >
                    <div className="item one" >
                           <EventList 
                              title={item.title}
                              id={item.id}
                              description={item.description}
                              location={item.location}
                              key={item.id} />
                    </div>
                 </div>
              </div>
               }  
            )}

            
           
                {/* <If conditional={show} component={<PostForm addEvent={addEvent} />} /> */}
           </div>
        </div>
    )
}

export default Events;
