// import { useEffect, useState } from "react";
import PostForm from "../forms/PostForm";
// import * as api from "../../api";
// import EventList from "../includes/EventList";
import Events from "./Events";


const EventPage= () => {
    return (
        <div className="container">
            <div className="row">
               <div className="col-12 p-0">
                <h2>ALL Events</h2>
                </div>
            <Events/>
            <PostForm/>

            
           
               
           </div>
        </div>
    )
}

export default EventPage;
