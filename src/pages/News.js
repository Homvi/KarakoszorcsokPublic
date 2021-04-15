import React from "react";
import { news } from "../data/news";
import NewsContent from "../components/NewsContent";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";



const News = () => {
  return (
    <div style={{minHeight:"calc(100vh - 70px)", marginBottom:"30px"}}>
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
