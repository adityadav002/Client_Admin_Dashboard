/** @format */

import React from "react";
import "../style/Main.css"; // External CSS
import { HiSparkles } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

function Main() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text-center">
          <div className="hero-badge">
            <HiSparkles className="icon-small" />
            Building the Future of Technology
          </div>

          <h1 className="hero-heading">
            Innovative Solutions for
            <span className="hero-gradient-text"> Modern Businesses</span>
          </h1>

          <p className="hero-subtext">
            We create cutting-edge web applications, mobile solutions, and
            digital experiences that drive growth and transform industries.
            Partner with us to bring your vision to life.
          </p>

          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="btn-primary">
              View Our Work
              <FiArrowRight className="ml-icon" />
            </button>

            <button onClick={scrollToContact} className="btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-bg" />
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Team collaboration"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
