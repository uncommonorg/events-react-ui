// import  { useState } from 'react';
import './PostForm.css';
import { store } from '../../app/store';
import { Formik, Form } from 'formik';
import {addEventAsync} from '../pages/eventSlice'




function EventForm({addEvent}) {
    return (
              <Formik onSubmit={(values, { resetForm }) => {
                store.dispatch(addEventAsync({
                    title: values.title,
                    author: values.author,
                }));
                // resetForm(); 
                }}
                initialValues={{
                title: '',
                author: ''
                }}
            >

          {({ isSubmitting }) => (
              <Form>
                    <label className="control-label">title
                    <input type="text" className="form-control" 
                    //  value={title} onChange={(e) => setTitle(e.target.value)} 
                     
                     />
                    </label>

                    <label className="control-label">Description
                    <input type="text" className="form-control" 
                    // value={description} onChange={(e) => setDescription(e.target.value)} 
                    />
                    </label>

                    <label className="control-label">Location
                    <input type="text" className="form-control" 
                    // value={location} onChange={(e) => setLocation(e.target.value)}
                     />
                    </label>
                    
                    <button type="submit" className="btn submit-button">Add Event</button>
                </Form>
    )}

          </Formik>
        
    );
}

export default EventForm;