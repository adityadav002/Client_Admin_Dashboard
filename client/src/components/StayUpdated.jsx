/** @format */
import React, { useState } from "react";
import toast from "react-hot-toast";
import "../style/StayUpdated.css";
import api from "../api";

const StayUpdated = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/subscribers", { email });
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Failed to subscribe. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="stay-updated-section">
      <div className="stay-updated-container">
        <div className="stay-updated-center">
          <h2 className="heading">Stay Updated</h2>
          <p className="description">
            Subscribe to our newsletter and get the latest insights on
            technology trends, industry news, and exclusive updates from our
            team.
          </p>

          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="input-email"
              />
              <button type="submit" disabled={loading} className="btn-submit">
                {loading ? <div className="spinner" /> : "Subscribe"}
              </button>
            </div>
          </form>

          <p className="footer-text">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
