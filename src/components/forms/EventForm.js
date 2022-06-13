import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const EventForm = (props) => {
   
    return (
        <Formik
            initialValues={{
                title: '',
                description: ''
            }}
            validate={values => {
                const errors = {};
                if (!values.title) {
                    errors.title = 'Title Required';
                } else if (values.title.length < 3) {
                    errors.title = 'Title must be at least 3 characters';
                }
                if (!values.description) {
                    errors.description = 'Description Required';
                } else if (values.description.length < 3) {
                    errors.description = 'Description must be at least 3 characters';
                }
                return errors;
            }}
            onSubmit={(values, { resetForm }) => {
                const event = {
                    title: values.title,
                    description: values.description,
                    
                    Id: -1
                }
                props.addEvent(event).then(() => {
                    resetForm();
                    
                });
            }}
        >
            {({ isSubmitting }) => (
                <Form className="form-group form-inline">
                    <label className="control-label">Title:
                <Field type="text" className="form-control" name="title" />
                    </label>
                    <label className="control-label">Description:
                <Field type="text" className="form-control" name="author" />
                    </label>
                   
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Add Event</button>
                    <ErrorMessage name="title" className="alert alert-danger" component="div" />
                    <ErrorMessage className="alert alert-danger" name="author" component="div" />
                </Form>
            )}
        </Formik>
    )
}
EventForm.propTypes = { addEventook: PropTypes.func.isRequired };
export default EventForm;