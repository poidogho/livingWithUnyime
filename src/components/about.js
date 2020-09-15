import React from "react";

const about = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
        style={{ height: "70vh" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100 about-img"
              src="assets/img/about.jpg"
              alt="First slide"
              height="700"
              style={{ backgroundPosition: "center", position: "relative" }}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="assets/img/about2.jpg"
              alt="Second slide"
              height="700"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="assets/img/about3.jpg"
              alt="Third slide"
              height="700"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div style={{ textAlign: "left", fontStyle: "italic" }}>
          <h3>
            <strong>
              <h2 style={{ fontStyle: "italic" }}>
                <strong>A bit about myself</strong>
              </h2>
            </strong>
          </h3>
        </div>
        <p className="lead">
          Hi there! I'm Unyime, the creator of LivingWithUnyime. I love Jesus,
          traveling, and cooking up healthy dishes. I created this blog to share
          my faith, my amazing travel experiences, and my healthy recipes. I am
          on a mission to spread God’s love, visit all the beautiful
          destinations in the world, and share my beautiful creations in the
          kitchen. I have a passion for encouraging and helping people thrive to
          their full potential. So if you need some encouragement, there is a
          place for you here. Thank you for visiting and I hope you’ll stick
          around.
        </p>
      </div>
      <br />
      <br />
      <div className="container">
        <div>
          <h2 style={{ textAlign: "center" }}>
            <strong>Some of my Life Passion</strong>
            <br />
          </h2>{" "}
        </div>
        <div className="row">
          <div
            className="col-sm-6 col-md-6 col-lg-6"
            style={{ marginRight: "0px" }}
          >
            <h3>
              <strong>Me as a Professional Accountant</strong>
              <p className="lead">
                I am an account Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ullam voluptatibus adipisci numquam
                blanditiis, molestiae quis accusamus quia quas totam. Harum
                perspiciatis corrupti necessitatibus iste architecto minima,
                repellendus et impedit nisi.
              </p>
            </h3>
          </div>
          <div
            className="col-sm-6 col-md-6 col-lg-6"
            style={{ marginLeft: "0px" }}
          >
            <img
              src="assets/img/about.jpg"
              alt=""
              style={{ height: "40vh", width: "100%" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6" style={{ margin: "0px" }}>
            <img
              src="assets/img/3.jpeg"
              alt=""
              style={{ height: "40vh", width: "100%" }}
            />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6" style={{ margin: "0px" }}>
            <br />
            <h3>
              <strong>My Love for Healthy living</strong>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                voluptatibus adipisci numquam blanditiis, molestiae quis
                accusamus quia quas totam. Harum perspiciatis corrupti
                necessitatibus iste architecto minima, repellendus et impedit
                nisi.
              </p>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6" style={{ margin: "0px" }}>
            <br />
            <h3>
              <strong>Exploring the world</strong>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                voluptatibus adipisci numquam blanditiis, molestiae quis
                accusamus quia quas totam. Harum perspiciatis corrupti
                necessitatibus iste architecto minima, repellendus et impedit
                nisi.
              </p>
            </h3>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6" style={{ margin: "0px" }}>
            <img
              src="assets/img/about3.jpg"
              alt=""
              style={{ height: "40vh", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default about;
