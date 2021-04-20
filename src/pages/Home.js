import { Grid } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import Welcome from "../components/Welcome"

const myStyles = {
  home: {
    minHeight: "calc(120vh - 70px)",
    backgroundImage:
      "repeating-linear-gradient(284deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),repeating-linear-gradient(14deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),linear-gradient(90deg, rgb(222,222,222),rgb(222,222,222))",
  },
  welcome: {
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(194, 194, 194,0.1) 0px, rgba(194, 194, 194,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255),rgb(255,255,255))",
    height: "650px",
    width: "50vw",
    borderTop: "1px solid #ffffff",
  },
};

const Home = () => {
  return (
    <Grid style={myStyles.home} direction="column" container >
      <Helmet>
        <title>Karakózörcsök official </title>
        <meta
          name="description"
          content="Karakózörcsök község hivatalos honlapja"
        />
      </Helmet>
      <Grid item container>
        <Grid item  xs={false} md={2} />
        <Grid style={{ height: "80vh", alignItems: "center" }} item xs={12} md={8} container>
          <Welcome />
        </Grid>
        <Grid item xs={false} md={2}  />
      </Grid>
    </Grid>
  );
};

export default Home;
