import React from "react";
import { news } from "../data/news";
import NewsContent from "../components/NewsContent";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";

const News = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        backgroundImage:
          "repeating-linear-gradient(284deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),repeating-linear-gradient(14deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),linear-gradient(90deg, rgb(222,222,222),rgb(222,222,222))",
        marginBottom: "30px",
      }}
    >
      <Helmet>
        <title>Karakózörcsök hírek</title>
        <meta name="description" content="Karakózörcsök hírek" />
      </Helmet>
      <Typography variant="h2" align="center">
        Hírek, aktualitások
      </Typography>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Paper align="center">
              <NewsContent data={news} />
            </Paper>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default News;
