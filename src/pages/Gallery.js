import { Grid, Typography } from "@material-ui/core";
import React from "react";
import FirstGallery from "../components/FirstGallery";
import SecondGallery from "../components/SecondGallery";
import { OldImages, imagesBig } from "../data/galleryData";


console.log(OldImages);
const Gallery = () => {
  return (
    <Grid
      style={{
        minHeight: "calc(100vh - 70px)",
        backgroundColor: "rgba(251, 201, 196, 0.06)",
      }}
      container
      direction="column"
    >
      {/* Karakószörcsök 1960-ig. */}
      <Grid item container>
        <Grid item xs={false} md={2} />
        <Grid
          align="center"
          style={{ height: "600px", margin: "70px 0px", overflowY: "scroll" }}
          xs={12}
          md={8}
          item
          container
        >
          <Typography
            style={{ width: "100%", marginBottom: "20px" }}
            variant="h3"
          >
            Karakószörcsök 1960-ig.
          </Typography>
          <Typography
            style={{ width: "100%", marginBottom: "20px" }}
            variant="h6"
          >
            Szabó Rezső Tibor gyűjtése
          </Typography>
          <SecondGallery img={OldImages} />
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
      {/* régi fotók */}
      {/* eszter fotói */}
      <Grid item container>
        <Grid item xs={false} md={2} />
        <Grid
          align="center"
          style={{
            height: "600px",
            marginTop: "20px",
            overflowY: "scroll",
            borderRadius: "8px",
          }}
          xs={12}
          md={8}
          item
          container
        >
          <Typography
            style={{ width: "100%", marginBottom: "20px" }}
            variant="h3"
          >
            Környékbeli fotók
          </Typography>
          <FirstGallery img={imagesBig} />
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>

      {/* eszter fotói */}
    </Grid>
  );
};

export default Gallery;
