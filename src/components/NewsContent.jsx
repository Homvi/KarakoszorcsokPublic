import { Grid } from '@material-ui/core'
import React from 'react'
import NewsCard from "./NewsCard.jsx"

const NewsContent = ({ data }) => {
    return (
        <Grid container style={{marginTop:"22px"}} spacing={3}>
            {data.map((element, id) => (
            <Grid key={id} item xs={12} sm={6} md={4} >
              {data && <NewsCard data={element}/>}  
            </Grid>
            ))}
        </Grid>
    )
}

export default NewsContent
