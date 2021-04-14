import { Grid, Paper } from "@material-ui/core";
import React from "react";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <Grid
      container
      direction="column"
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
      <Grid
        item
        align="center"
        container
      >
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8}>
          <Paper>
            <ContactCard />
          </Paper>
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
    </Grid>
  );
};

export default Contact;
