import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// general Resources
import NavBar from "./components/generalResources/Navbar";
import Landing from "./components/landing";
import Footer from "./components/generalResources/footer";
import About from "./components/about";

// destinations
import Destinations from "./components/destinations/home";
import PuertoRico from "./components/destinations/pRico";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/aboutMe">
            <About />
          </Route>
          <Route exact path="/destinations">
            <Destinations />
          </Route>
          <Route exact path="/destinations/puerto-rico">
            <PuertoRico />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
