import React from 'react'

function NewsItem(props) {
    return (
        <div className="col-md-6">
            <p>{props.date}</p>
            <p>{props.title}</p>
            <p>{props.body}</p>
                  
        </div>
    )
}

export default NewsItem
