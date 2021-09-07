import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure To Get Entertainment
        </p>
        <p className="footer-subscription-text">Subscribe us and Support Us</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How It Works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms Of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact US</h2>
            <Link to="/sign-up">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destination</Link>
            <Link to="/">Sponserships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassador</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Peniel <img src="./images/logo2.jpeg" alt="/" />
            </Link>
          </div>
          <small className="website-rights">
            Peniel{" "}
            <i class="fa fa-copyright" aria-hidden="true">
              2020
            </i>
          </small>
          <div className="social-icon">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              arial-label="Facebook"
            >
              <i class="fab fa-facebook    "></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              arial-label="Instagram"
            >
              <i class="fab fa-instagram    "></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              arial-label="Linkedin"
            >
              <i class="fab fa-linkedin    "></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
