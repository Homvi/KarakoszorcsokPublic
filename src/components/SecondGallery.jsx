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
    backgroundColor: "black",

    '&:hover': {
      opacity: 1,
      transition: "0.3s",
      filter: "grayscale(0%)",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 40,
  },
  img: {
    maxWidth: "100vw",
    maxHeight: "80vh",
    zIndex: 40,

  }
});

const SecondGallery = ({ img }) => {


  const [isModalVisibleOld, setModalVisibilityOld] = useState(false);
  const [clickedImageSrcOld, setClickedImageSrcOld] = useState("");

  const clickHandlerTwo = (e) => {
    console.log(e.target.src);
    setModalVisibilityOld(!isModalVisibleOld)
    setClickedImageSrcOld(e.target.src);
  }


  const classes = useStyles();


  return (
    <Grid item container spacing={1} xs={12} style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      {img.map((image, id) => (

        <Grid key={image.original} xs={6} md={2} item container>
          {isModalVisibleOld && <div key={`${image.original}1`} onClick={clickHandlerTwo} className={classes.modal} ><img className={classes.img} src={clickedImageSrcOld} alt={image.original} /></div>}
          <img className={classes.pic} onClick={e => clickHandlerTwo(e)} src={image.original} alt={image.original} />
        </Grid>

      ))}
    </Grid>
  );
};

export default SecondGallery;
