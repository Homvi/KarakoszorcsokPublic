import { Grid, Typography } from "@material-ui/core";
import React from "react";
import FirstGallery from "../components/FirstGallery";
import SecondGallery from "../components/SecondGallery";
import { OldImages, imagesBig } from "../data/galleryData";
import { Helmet } from "react-helmet";


const Gallery = () => {
  return (
    <Grid
      style={{
        minHeight: "calc(100vh - 70px)",
        backgroundImage:
          "repeating-linear-gradient(284deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),repeating-linear-gradient(14deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),linear-gradient(90deg, rgb(222,222,222),rgb(222,222,222))",
      }}
      container
      direction="column"
    >
       <Helmet>
        <title>Galéria</title>
        <meta
          name="description"
          content="Képek Szabó Rezső Tibor gyűjtése, Képek Veszprém megyéből. "
        />
      </Helmet>
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
