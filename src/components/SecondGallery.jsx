import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pic: {
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
    height:"100%",
    width:"100%",
    opacity:0.8,
    filter: "grayscale(10%)",
    
    '&:hover': {
      opacity:1,
      transition:"0.3s",
      filter: "grayscale(0%)",
   },
  },
});

const SecondGallery = ({img}) => {
  const classes = useStyles();


  return (
    <Grid item  container spacing={1} xs={12} style={{backgroundColor:"white"}} >
      {img.map((image, id) => (
      <Grid   key={id} xs={6} md={2}   item container>
        <img className={classes.pic}  src={image.original} alt={img[0].original}/>
      </Grid>
      ))}
    </Grid>
  );
};

export default SecondGallery;
