import React from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import FirstGallery from '../components/FirstGallery';

const Gallery = () => {
    return (
        <div style={{minHeight:"calc(100vh - 70px)"}}>
        <FirstGallery/>
        </div>
    )
}

export default Gallery
