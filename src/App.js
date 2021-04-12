import { Route, Switch, Redirect } from "react-router";
import React from "react";
import useStyles from "./styles"
import Navbar from "./Navbar"
import content from "./content"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import News from "./pages/News"
import History from "./pages/History"
import Gallery from "./pages/Gallery"
function App() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
