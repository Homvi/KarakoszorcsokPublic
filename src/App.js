import { Route, Switch, Redirect } from "react-router";
import React from "react";
import Navbar from "./Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";
import History from "./pages/History";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <Redirect to="/news" />
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
      <Footer/>
    </>
  );
}

export default App;
