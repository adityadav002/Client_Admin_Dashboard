/** @format */

import React, { useState, useEffect } from "react";
import API from "../api";
import "../style/SubscriberList.css";

function SubscriberList() {
  const [subscribers, setSubscribers] = useState([]);

  const fetchSubscribers = () => {
    API.get("/subscribers")
      .then((res) => setSubscribers(res.data))
      .catch((err) => console.error("Error fetching subscribers:", err));
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const deleteSubscriber = (id) => {
    API.delete(`/subscribers/${id}`)
      .then(fetchSubscribers)
      .catch((err) => console.error("Error deleting subscriber:", err));
  };

  return (
    <section className="subscriber-list-section">
      <div className="subscriber-list-container">
        <h2 className="subscriber-list-title">Newsletter Subscribers</h2>
        {subscribers.length === 0 ? (
          <p className="no-subscribers">No subscribers yet.</p>
        ) : (
          <ul className="subscriber-list">
            {subscribers.map((sub) => (
              <li key={sub._id} className="subscriber-item">
                <span className="subscriber-email">{sub.email}</span>
                <button
                  className="subscriber-delete-button"
                  onClick={() => deleteSubscriber(sub._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default SubscriberList;
