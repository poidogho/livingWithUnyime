import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// general Resources
import NavBar from "./components/generalResources/Navbar";
import Landing from "./components/landing";
import Footer from "./components/generalResources/footer";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Landing />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
