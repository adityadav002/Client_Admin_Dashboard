/** @format */

import React, { useState, useEffect } from "react";
import API from "../api";
import "../style/ProjectList.css";

function ProjectList() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", image: "" });

  const fetch = () => API.get("/projects").then((res) => setItems(res.data));

  useEffect(() => {
    fetch();
  }, []);

  const add = () => {
    API.post("/projects", form).then(() => {
      setForm({ name: "", description: "", image: "" });
      fetch();
    });
  };

  const del = (id) => API.delete(`/projects/${id}`).then(fetch);

  return (
    <section className="project-list-section">
      <div className="project-list-container">
        <div className="project-list-header">
          <h2 className="project-list-title">Projects</h2>
        </div>

        <div className="project-list-form">
          <input
            className="project-input"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="project-input"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
          />
          <input
            className="project-input"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
          />
          <button className="project-add-button" onClick={add}>
            Add
          </button>
        </div>

        <ul className="project-list">
          {items.map((i) => (
            <li key={i._id} className="project-item">
              <span>{i.name}</span>
              <button
                className="project-delete-button"
                onClick={() => del(i._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectList;
