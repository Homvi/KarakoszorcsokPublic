import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <div style={{ display:"flex", justifyContent:"center", width:"80%" ,margin:"0 auto"}} >
            <ReactPlayer widt="100%"  url="https://youtu.be/CpZWHk6kCD8" />
        </div>
    )
}

export default Video
