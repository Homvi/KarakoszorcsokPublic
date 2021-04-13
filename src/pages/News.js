import React from 'react'
import  {news}  from "../data/news"
import  New  from "../components/New"

const News = () => {
    console.log(news);
    return (
        <div className="data-card">
            {news.map((element, id) =>(
               <New data={element}/>
            ) )}
        </div>
    )
}

export default News
