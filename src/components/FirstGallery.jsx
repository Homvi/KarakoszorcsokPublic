import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";

const useStyles = makeStyles({
  pic: {
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
    height: "100%",
    width: "100%",
    opacity: 0.8,
    filter: "grayscale(10%)",

    '&:hover': {
      opacity: 1,
      transition: "0.3s",
      filter: "grayscale(0%)",
    },
  },
  modal: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "black",
    color: "white",
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
    bottom:0,
    width: "auto",
    zIndex: 40,
  },
  img:{
    height:"80%"
  }
});

const FirstGallery = ({ img }) => {


  const [isModalVisible, setModalVisibility] = useState(false);
  const [clickedImageSrc, setClickedImageSrc] = useState("");

  const clickHandler = (e) => {
    console.log(e.target.src);
    setModalVisibility(!isModalVisible)
    setClickedImageSrc(e.target.src);
  }


  const classes = useStyles();
  return (

    <Grid item container spacing={1} xs={12} style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} >
      {img.map((image, id) => (
        <Grid key={id} xs={6} md={2} item container>
          {isModalVisible && <div onClick={clickHandler} className={classes.modal} ><img className={classes.img} src={clickedImageSrc} alt={image.original} /></div>}
          <img className={classes.pic} onClick={e => clickHandler(e)} src={image.original} alt={image.original} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FirstGallery;
