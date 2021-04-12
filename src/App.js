
import React from "react";
import useStyles from "./styles"
import Navbar from "./Navbar"
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import content from "./content"




function App() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
