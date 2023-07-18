import React from "react";
import { Container } from "react-bootstrap";
import Project from "./data.js";
import Card from "../Card";
import "./style.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <Container className="project-h2">
        <h2>Projects</h2>
      </Container>
      <div className="project-card">
        {Project.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
            github={project.github}
            className="images"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
