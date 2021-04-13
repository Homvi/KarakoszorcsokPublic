import React from "react";
import { news } from "../data/news";
import NewsContent from "../components/NewsContent";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const News = () => {
  const classes = useStyles();
  console.log(news);
  return (
    <>
    <Typography variant="h2" align="center" >Hírek, aktualitások</Typography>
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8} >
        <Paper>
          <NewsContent data={news} />
        </Paper>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
    </>
  );
};

export default News;
