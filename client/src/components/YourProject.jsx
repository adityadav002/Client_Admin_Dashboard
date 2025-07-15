/** @format */

import React, { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import api from "../api";
import "../style/YourProject.css";

function YourProject() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
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
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="title">Our Projects</h2>
          <p className="subtitle">
            Discover the innovative solutions we've built for our clients across
            various industries
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-image-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <button className="read-more-btn">
                  Read More
                  <FiExternalLink className="read-more-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default YourProject;
