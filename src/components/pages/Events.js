
import {useEffect} from 'react';
import { eventsAsync, selectAllEvents } from './eventSlice';
import { useSelector } from 'react-redux';
import EventList from "../includes/EventList";
// import EventForm from '../forms/PostForm';
import PostForm  from '../forms/PostForm'
import { store } from "../../app/store";


const Events = ({latest}) => {
    const events = useSelector(state => selectAllEvents(state));
        useEffect(() => {
            store.dispatch(eventsAsync());
          },
            []);
    return (
        <div className="container">
            <PostForm/>
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
                                    key={item.id}/>
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
