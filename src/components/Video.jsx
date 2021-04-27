import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <div style={{ display:"flex", zIndex:200 , justifyContent:"center", width:"92%" ,margin:"0 auto"}} >
            <ReactPlayer widt="100%" controls={true} playing={true} volume={0.5} muted={true}	 url="https://youtu.be/CpZWHk6kCD8" />
        </div>
    )
}

export default Video
