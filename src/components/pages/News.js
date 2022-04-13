import React from 'react'
import NewsItem from './NewsItem';

function News() {
    const list = [
                {
                    date:'32423',
                    title:'News 1',
                    body:"I don't know about you, but I'm still riding high in the afterglow of the Hashnode Writing Bootcamp, which came to a close earlier this week. "
                },

                {
                    date:'32423',
                    title:'News 2',
                    body:"I don't know about you, but I'm still riding high in the afterglow of the Hashnode Writing Bootcamp, which came to a close earlier this week. "
                },
                {
                    date:'32423',
                    title:'News 3',
                    body:"I don't know about you, but I'm still riding high in the afterglow of the Hashnode Writing Bootcamp, which came to a close earlier this week. "
                },
                {
                    date:'32423',
                    title:'News 4',
                    body:"I don't know about you, but I'm still riding high in the afterglow of the Hashnode Writing Bootcamp, which came to a close earlier this week. "
                }
            ];

    return (

        <div className="container">
            <h1>NEWS</h1> 
            <div className="row">
                {
                 list.map( (item, i) => {
                    return <NewsItem date={item.date} title={item.title} body={item.body} key={i}/>
                    })
                }
           </div>
        </div>
    )
}

export default News;

