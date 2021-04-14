import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  anchor: {
    textDecoration: "none",
    color: "black",
  },
  anchorBold: {
    fontWeight: "bolder",
    textDecoration: "none",
    color: "black",
  },
  gridList: {
    width: "50%",
    height: "70vh",
    cols: 3,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default useStyles;
