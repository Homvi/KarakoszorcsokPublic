import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./styles";
import content from "./content"


const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Karakoszorcsok
          </Typography>
                    <Button
                        color="inherit"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        Menü
          </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose} >
                            <a  className={classes.anchorBold} href="/home"><MenuItem style={{ fontWeight:"bold" }} onClick={handleClose} >Főoldal</MenuItem></a>
                        {content.menuItems.map((item, index) => (
                            <a className={classes.anchor} key={index} href={item.href}><MenuItem onClick={handleClose} >{item.desc}</MenuItem></a>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
