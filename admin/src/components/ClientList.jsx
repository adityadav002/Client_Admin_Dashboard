/** @format */

import React, { useState, useEffect } from "react";
import API from "../api";
import "../style/ClientList.css";

function ClientList() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    designation: "",
  });

  const fetchClients = () => {
    API.get("/clients").then((res) => setClients(res.data));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const addClient = () => {
    API.post("/clients", form).then(() => {
      setForm({ name: "", description: "", image: "", designation: "" });
      fetchClients();
    });
  };

  const deleteClient = (id) => {
    API.delete(`/clients/${id}`).then(fetchClients);
  };

  return (
    <section className="client-list-section">
      <div className="client-list-container">
        <div className="client-list-header">
          <h2 className="client-list-title">Clients</h2>
        </div>

        <div className="client-form">
          <input
            className="client-input"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="client-input"
            placeholder="Designation"
            value={form.designation}
            onChange={(e) =>
              setForm((f) => ({ ...f, designation: e.target.value }))
            }
          />
          <input
            className="client-input"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
          />
          <input
            className="client-input"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
          />
          <button className="client-add-button" onClick={addClient}>
            Add Client
          </button>
        </div>

        <ul className="client-list">
          {clients.map((client) => (
            <li key={client._id} className="client-item">
              <span>
                {client.name} ({client.designation})
              </span>
              <button
                className="client-delete-button"
                onClick={() => deleteClient(client._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ClientList;
