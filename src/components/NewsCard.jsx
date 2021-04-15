import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const NewsCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={data.mediaType} 
          alt={data.title}
          height="240"
          src={data.src}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" >
          {data.date}
        </Button>
        <Button size="small" color="primary">
       {data.outerSource && <a rel="noopener noreferrer" target="_blank" href={data.outerSource}>tovább(külső hivatkozás)...</a>}   
        </Button>
      </CardActions>
    </Card>
    </Grid>
  )
};

export default NewsCard;
