
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    anchor:{
      textDecoration:"none", 
      color:"black",
    },
    anchorBold:{
      fontWeight:"bolder",
      textDecoration:"none", 
      color:"black",
    }
  }));

  export default useStyles;