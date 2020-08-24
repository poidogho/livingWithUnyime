import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// general Resources
import NavBar from "./components/generalResources/Navbar";
import Landing from "./components/landing";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Landing />
      </div>
    </Router>
  );
}

export default App;
