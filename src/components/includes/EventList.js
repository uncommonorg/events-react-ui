const EventList = ({title, description, location, id}) => (
                <div className="posts" >
                    <h3  className="date" >{title}</h3>
                    <p className="time" >{description}</p>
                    <p className="conference" >{location}</p>
                </div>          
       
)

export default EventList;