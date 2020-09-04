import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Recent Travels</h2>
          <p>
            Traveling is a passion. Meeting people and learning new cultures and
            exploring our differences to better u nderstand the world is a
            lifelong goal.Having toured 4 continents, These are my latest tours.
          </p>
        </div>

        <div className="row">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-umbrella-beach"></i>
              </div>
              <h4>
                <Link to="">Summer 2020 travel</Link>
              </h4>
              <p>Journey to the roots at Bahamas</p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-mountain"></i>
              </div>
              <h4>
                <Link to="">A trip to the himalayas</Link>
              </h4>
              <p>
                A mountain range like no other. See the highets mountains in the
                world and have your percepective
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4>
                <Link to="">Get Context from Unyime</Link>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-layer"></i>
              </div>
              <h4>
                <Link to="">Get Context from Unyime</Link>
              </h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
