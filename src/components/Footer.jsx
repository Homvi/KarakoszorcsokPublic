import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import EEM from "../img/tamogatok/EEM.png";
import EKMK from "../img/tamogatok/EKMK.png";
import magyarfaluprogramlogo from "../img/tamogatok/magyarfaluprogramlogo.png";
import nka from "../img/tamogatok/nka.png";
import NMI from "../img/tamogatok/nmi.png";
import SMBleader from "../img/tamogatok/SMBleader.jpg";



const useStyles = makeStyles((theme) => ({
    appBar: {
        position:"relative",
        display: "flex",
        height: "170px",
        justifyContent: "space-between",
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        alignItems: "center"
    },
    logoContainer: {
        top: 'auto',
        bottom: 0,
        display: "flex",
        height: "80px",
        justifyContent: "space-between",
        alignItems: "center"
    },
    img: {
        height: "7.5vh",
        margin: "6px",
        borderRadius: "1px",
    }


}));

const Footer = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <div className={classes.logoContainer}>
                    <img className={classes.img} src={EKMK} alt="Veszprém EKMK" />
                    <img className={classes.img} src={nka} alt="Nemzeti Kulturális Alap" />
                    <img  style={{background:"#185230"}} className={classes.img} src={NMI} alt="Emberi Erőforrások Minisztériuma" />
                </div>
                <div className={classes.logoContainer}>
                    <img className={classes.img} src={EEM} alt="Emberi Erőforrások Minisztériuma" />
                    <img className={classes.img} src={magyarfaluprogramlogo} alt="Emberi Erőforrások Minisztériuma" />
                    <img className={classes.img} src={SMBleader} alt="Emberi Erőforrások Minisztériuma" />
                </div>

            </AppBar>
        </React.Fragment>
    )
}

export default Footer
