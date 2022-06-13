
// import PostForm from "../forms/PostForm";
import * as api from "../../api";

import Events from "./Events";
import EventForm from "../forms/EventForm";

const EventPage= () => {

   //  const eventId = 1;
   //  const [events, setEvents] = useState([]);
   //  const show = !hide;
//     const [show, setShow ] = useState(false)
  
   
    


//     useEffect(() => {
//         api.fetchAllEvents().then((response) => {
//             setEvents(response);
//         });
//     },
//         [eventId]);

//     const addEvent = (event) => {
//         api.addEvent(event).then(data => {
//             setEvents(oldEvents => [...oldEvents, data]);
//         });
//     } 

// // end of API code
// // cards
//     const If = ({conditional, component}) => {
//         if (conditional) return component;
//         return null;   
//     }
    return (
        <div className="container">
            <div className="row">
                 
               <div className="col-12 p-0">
                  <h2>ALL Events</h2>
                </div>
             
              {/* {events.map(function (item) {
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
            )} */}
            <Events/>
            <table>
               
            </table>
            <EventForm/>
            {/* <PostForm/> */}

            
           
               
           </div>
        </div>
    )
}

export default EventPage;
