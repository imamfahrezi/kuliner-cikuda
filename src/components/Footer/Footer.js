import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="my-footer">
    <div className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <h5>About FoodParadise</h5>
            <ul>
              <li>
                <a href="/#">About US</a>
              </li>
              <li>
                <a href="/#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="/#">FAQ</a>
              </li>
              <li>
                <a href="/#">Help desk</a>
              </li>
              <li>
                <a href="/#">Forums</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Download App</h5>
            <ul>
              <li>
                <a href="/#">Google Play</a>
              </li>
              <li>
                <a href="/#">App Store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-networks">
        <a href="/#" className="twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/#" className="facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="/#" className="instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="footer-copyright">Copyright &copy; 2020 FoodParadise </p>
    </div>
  </footer>
);

export default Footer;
