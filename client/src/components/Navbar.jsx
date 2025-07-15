/** @format */

import React, { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import "../style/NavbarStyle.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <FaCode className="logo-icon" />
          <span className="logo-text">TechCorp</span>
        </div>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("clients")}>Clients</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="navbar-menu-icon">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("clients")}>Clients</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
