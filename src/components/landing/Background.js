import React from "react";

const Background = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Stay in touch</h1>
              <h2>
                Hi! I'm Unyime, an Accountant who's now an award-winning
                traveland healthy living blogger blogger. I love travelling and
                Im here to share my experience with you.
              </h2>
              <div className="d-lg-flex">
                <a href="#about" className="btn-get-started scrollto">
                  Join Me
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="venobox btn-watch-video"
                  data-vbtype="video"
                  data-autoplay="true"
                >
                  {" "}
                  My Travels <i className="icofont-play-alt-2"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="assets/img/test.jpg"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Background;
