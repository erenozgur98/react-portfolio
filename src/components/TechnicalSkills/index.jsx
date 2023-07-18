import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import Tools from "./tools";
import Card from "./Card";

function About() {
  return (
    <div className="main" id="about">
      <Container className="skills">
        <h2>Technical Skills</h2>
      </Container>
      <Container className="skills-flex">
        {Tools.map((tool, i) => (
          <Card key={i} image={tool.image} title={tool.title} />
        ))}
      </Container>
    </div>
  );
}

export default About;
