/** @format */

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import api from "../api"; // ✅ Import Axios instance
import "../style/HappyClient.css";

function HappyClient() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="clients" className="clients-section">
        <div className="clients-container">
          <div className="text-center">
            <div className="loader">
              <div className="line h8"></div>
              <div className="line h4"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        <div className="section-header">
          <h2 className="title">Happy Clients</h2>
          <p className="subtitle">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our work.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client._id} className="client-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              <blockquote className="testimonial">
                "{client.description}"
              </blockquote>

              <div className="client-info">
                <img
                  src={client.image}
                  alt={client.name}
                  className="client-avatar"
                />
                <div>
                  <h4 className="client-name">{client.name}</h4>
                  <p className="client-role">{client.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HappyClient;
