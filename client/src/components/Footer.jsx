/** @format */

// /** @format */

/** @format */

import React from "react";
import {
  FaCode,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import "../style/FooterStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and About */}
          <div className="footer-about">
            <div className="footer-logo">
              <FaCode className="logo-icon" />
              <span className="logo-text">TechCorp</span>
            </div>
            <p className="footer-description">
              Building innovative digital solutions that transform businesses
              and create exceptional user experiences. Your technology partner
              for the future.
            </p>
            <div className="footer-socials">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">Consulting</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2024 TechCorp. All rights reserved.</p>
          <div className="footer-policy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
