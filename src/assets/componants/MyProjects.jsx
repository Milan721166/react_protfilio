import React from 'react';
import projectData from "../../api/project.json";
import '../css/MyProjects.css';

const MyProjects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectData.map(project => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              <h4>Tech Stack:</h4>
              <ul className="tech-list">
                {project.tech.map((tech, index) => (
                  <li key={index} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
              <span className="link-icon">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;