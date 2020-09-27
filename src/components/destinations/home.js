import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <div className="destination-bg">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <div style={{ backgroundColor: "grey" }}>
        <img src="/assets/img/map.png" />
      </div> */}
        <h1>Explore some amazing places I have visited</h1>
        <h3 style={{ display: "inline-block" }}>
          Hear my experiences, See my recommedations
        </h3>
        <span>
          <i className="far fa-hand-point-down fa-2x "></i>
        </span>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <h1>
          <b>Destinations</b>
        </h1>
      </div>
      <div className="container">
        <p className="lead">
          I'll also be sharing my travel experiences : how to travel solo and
          get good deals. Most of my travel stories are hilarious. I've met the
          nicest people during traveling, gained lifelong friendships and the
          experiences will remain with me for a long time. I decided to start
          with my trip to Bali because I had the most fun there. In Bali, I got
          the chance to hike, explore the monkey forest, visit temples, watch
          how coffee was made, went for a swing in the jungle and enjoyed the
          Balinese culture. If you’re looking for a place to just relax and
          enjoy the beautiful culture, Bali, Indonesia is the place to visit.
        </p>
      </div>
      <div className="container">
        <h1>
          <b>North America</b>
        </h1>
        <div className="p-rico">
          <br />
          <br />
          <br />
          <Link to="/destinations/puerto-rico">
            <h1 style={{ backgroundColor: "#ECF0F1 ", width: "300px" }}>
              <b> Puerto Rico</b>
            </h1>
          </Link>
        </div>
        <br />
        <h1>
          <b>Asia</b>
        </h1>
        <div className="asia">
          <br />
          <br />
          <br />
          <h1 style={{ backgroundColor: "#ECF0F1 ", width: "300px" }}>
            <b> Explore Bali</b>
          </h1>
        </div>
        <br />
        <h1>
          <b>Middle East</b>
        </h1>
        <div className="dubai">
          <br />
          <br />
          <br />
          <h1 style={{ backgroundColor: "#ECF0F1 ", width: "300px" }}>
            <b> Dubai</b>
          </h1>
        </div>
        <br />
        <h1>
          <b>Europe</b>
        </h1>
        <div className="brussels">
          <br />
          <br />
          <br />
          <h1 style={{ backgroundColor: "#ECF0F1 ", width: "300px" }}>
            <b> Brussels</b>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default home;
