import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo mr-auto">
          <Link to="#">Living with Unyime</Link>
        </h1>
        {/* <Link to="#" className="logo mr-auto">
          <img src="" alt="Living with Unyime" className="img-fluid" />
        </Link> */}

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <Link to="#">The Blog</Link>
            </li>
            <li>
              <Link to="#">Destinations</Link>
            </li>
            <li>
              <Link to="#">Inspiration & Tips</Link>
            </li>
            <li>
              <Link to="#">Eat Healthy</Link>
            </li>
            <li>
              <Link to="#">About Me</Link>
            </li>
          </ul>
        </nav>

        <a href="#" className="get-started-btn scrollto">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
