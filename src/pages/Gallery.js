import { Grid, Typography } from "@material-ui/core";
import React from "react";
import FirstGallery from "../components/FirstGallery";
import SecondGallery from "../components/SecondGallery";
import { OldImages, imagesSmall } from "../data/galleryData";

console.log(OldImages);
const Gallery = () => {
  return (
    <Grid
      style={{ minHeight: "calc(100vh - 70px)" }}
      container
      direction="column"
    >
      {/* eszter fotói */}
      <Grid item container>
        <Grid item xs={false} md={2} />
        <Grid
          align="center"
          style={{ height: "600px", marginTop: "20px", overflowY: "scroll" }}
          xs={12}
          md={8}
          item
          container
        >
          <Typography style={{ width: "100%" }} variant="h3">
            Fotók
          </Typography>
          <FirstGallery img={imagesSmall} />
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
      {/* eszter fotói */}
      {/* Karakószörcsök 1960-ig. */}
      <Grid item container>
        <Grid item xs={false} md={2} />
        <Grid
          align="center"
          style={{ height: "600px", marginTop: "20px", overflowY: "scroll" }}
          xs={12}
          md={8}
          item
          container
        >
          <Typography style={{ width: "100%" }} variant="h3">
            Fotók
          </Typography>
          <SecondGallery img={OldImages} />
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
      {/* régi fotók */}
    </Grid>
  );
};

export default Gallery;
