import React from 'react'
import FirstGallery from '../components/FirstGallery';
import { imagesBig,  imagesSmall} from "../data/galleryData"

const Gallery = () => {
    return (
        <div style={{minHeight:"calc(100vh - 70px)"}}>
        <FirstGallery/>
        </div>
    )
}

export default Gallery
