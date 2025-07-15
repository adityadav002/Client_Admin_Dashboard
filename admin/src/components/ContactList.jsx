/** @format */

import React, { useState, useEffect } from "react";
import API from "../api";
import "../style/ContactList.css";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    API.get("/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Error fetching contacts:", err));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = (id) => {
    API.delete(`/contacts/${id}`)
      .then(fetchContacts)
      .catch((err) => console.error("Error deleting contact:", err));
  };

  return (
    <section className="contact-list-section">
      <div className="contact-list-container">
        <div className="contact-list-header">
          <h2 className="contact-list-title">Contact Form Submissions</h2>
        </div>

        {contacts.length === 0 ? (
          <p className="no-contacts">No contact submissions yet.</p>
        ) : (
          <ul className="contact-list">
            {contacts.map((contact) => (
              <li key={contact._id} className="contact-item">
                <div className="contact-details">
                  <strong>{contact.fullName}</strong> — {contact.emailAddress} |{" "}
                  {contact.mobileNumber} | {contact.city}
                </div>
                <button
                  className="contact-delete-button"
                  onClick={() => deleteContact(contact._id)}>
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

export default ContactList;
