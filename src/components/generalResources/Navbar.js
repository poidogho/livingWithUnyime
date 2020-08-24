import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center">
        <h1 class="logo mr-auto">
          <Link to="#">Living with Unyime</Link>
        </h1>
        {/* <Link to="#" class="logo mr-auto">
          <img src="" alt="Living with Unyime" class="img-fluid" />
        </Link> */}

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active">
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

        <a href="#" class="get-started-btn scrollto">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
