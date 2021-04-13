import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import HistoryContent from "../components/HistoryContent";

const History = () => {
  return (
    <>
      
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10}>
              <HistoryContent />
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
    </>
  );
};

export default History;
