import React from "react";

const footer = () => {
  return (
    <footer id="footer">
      <div class="footer-newsletter">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <h4>Join My Mailing List</h4>
              <p>
                Get to know how I plan my trips and live healthy by signing up
                for my monthly newsletter
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>LivingWithUnyime</h3>
              <p>
                2344 Somewhere <br />
                Houston, TX 455566
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +1 2345454657
                <br />
                <strong>Email:</strong> unyimesomething.com
                <br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">About Me</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>My Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Tour Guide</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Healthy Living tips</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Travel Advisind</a>
                </li>
                {/* <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li> */}
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>My Social Networks</h4>
              <p>
                Follow me on social Media for up to date information on travels
                and healthy living
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                {/* <a href="#" class="google-plus">
                  <i class="bx bxl-skype"></i>
                </a> */}
                <a href="#" class="linkedin">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container footer-bottom clearfix">
        <div class="copyright">
          &copy; Copyright 2020{" "}
          <strong>
            <span>LivingWithUnyime</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
export default footer;
