import  { useState } from 'react';
import './PostForm.css';


function EventForm({addEvent}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    
     
    const createEvent = (e) => {
        e.preventDefault();
        addEvent({title, description, location});
    }

   
    

    return (
        <div>
              <h2>Add More Events</h2>
                <form className="form-group Post-form" onSubmit={createEvent}>
                    <label className="control-label">Title
                    <input type="text" className="form-control" 
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>

                    <label className="control-label">Description
                    <input type="text" className="form-control" 
                    value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>

                    <label className="control-label">Location
                    <input type="text" className="form-control" 
                    value={location} onChange={(e) => setLocation(e.target.value)} />
                    </label>
                    
                    <button type="submit" className="btn submit-button">Add Event</button>
                </form>
               

        </div>
        
    )
}

export default EventForm;