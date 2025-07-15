/** @format */

import React, { useState } from "react";
import { FiSend, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "../style/GetInTouch.css";
import toast from "react-hot-toast";
import api from "../api";

function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/contacts", formData);
      toast.success("Message sent successfully!");
      setFormData({
        fullName: "",
        emailAddress: "",
        mobileNumber: "",
        city: "",
      });
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="title">Get In Touch</h2>
          <p className="subtitle">
            Ready to start your next project? Let's discuss how we can help
            bring your ideas to life.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-block">
              <div className="icon-box">
                <FiPhone className="icon" />
              </div>
              <div>
                <h3 className="info-title">Phone</h3>
                <p className="info-text">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-block">
              <div className="icon-box">
                <FiMail className="icon" />
              </div>
              <div>
                <h3 className="info-title">Email</h3>
                <p className="info-text">hello@techcorp.com</p>
              </div>
            </div>

            <div className="info-block">
              <div className="icon-box">
                <FiMapPin className="icon" />
              </div>
              <div>
                <h3 className="info-title">Office</h3>
                <p className="info-text">
                  123 Innovation Drive
                  <br />
                  Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="emailAddress"
                  type="email"
                  required
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  name="mobileNumber"
                  type="tel"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={loading}>
                {loading ? (
                  <div className="spinner" />
                ) : (
                  <>
                    Send Message
                    <FiSend className="send-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
