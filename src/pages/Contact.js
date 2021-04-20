import { Grid, Paper } from "@material-ui/core";
import React from "react";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <Grid
      container
      direction="column"
      style={{
        minHeight: "calc(100vh - 70px)",
        backgroundImage:
          "repeating-linear-gradient(284deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),repeating-linear-gradient(14deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),linear-gradient(90deg, rgb(222,222,222),rgb(222,222,222))",
      }}
    >
      <Grid item align="center" container>
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
