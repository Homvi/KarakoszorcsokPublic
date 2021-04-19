import { Grid, Paper } from "@material-ui/core";
import React from "react";

const ContactCard = () => {
  return (
    <Grid container style={{ marginTop:"30px"}} direction="column"  align="center">
      <Grid item  container align="center">
        <Grid item container direction="column" style={{marginTop:"30px"}} >
          <h2>Kapcsolat</h2>
          <div className="address">
            <h3>Cím:</h3>
            <p>Karakószörcsök, Kossuth u. 1.</p>
          </div>
          <Paper variant="outlined">
          <h3>Honvédő Szandra</h3>
            <h5>polgármester</h5>
            <div className="mail">
              <p>e-mail:</p>
              <p>szandra99@gmail.com</p>
            </div>
            <div className="phone">
              <p>Telefon:</p>
              <p>+36706311114</p>
            </div>
          </Paper>
          <Paper variant="outlined">
          <h3>Farkasné Tóth Bettina</h3>
            <h5>kulturális munkatárs</h5>
            <div className="phone">
              <p>Telefon:</p>
              <p>+36205134705</p>
            </div>
          </Paper >
          <Paper variant="outlined">
          <h3>Kovácsné Szakály Krisztina</h3>
              <h5>hivatalsegéd</h5>
              <div className="phone">
                <p>Telefon:</p>
                <p>+36305631397</p>
              </div>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactCard;