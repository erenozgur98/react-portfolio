import React from "react";
import { Container } from "react-bootstrap";
import Type from "./Type";
import "./style.css";

function Home() {
  return (
    <div className="section-header">
      <Container className="home-section">
        <h2 className="heading-name">
          Hey there! I'm <span className="name">Yigit Eren Ozgur</span>
        </h2>
        <Container>
          <div className="type">
            <Type />
          </div>
          <p className="home-about-me">
            Software Engineer leveraging customer service background to build a
            more intuitive user experience on the web. Earned certificate in
            full stack web development from the University of North Carolina at
            Charlotte, in May 2021 to start my career.
          </p>
          <br />
          <p className="home-about-me">
            Gained professional work experience with Newfold Digital,
            contributed valuable and quality code to Web.com and Ecomdash.com
            environments with FE using React ( JavaScript, TypeScript ),
            learning C# whilst working on BE tasks.
          </p>
        </Container>
      </Container>
      <div className="contact-section">
        <h2>
          <span className="contact">Contact</span>
        </h2>
      </div>
      <div className="contact-links">
        <div>
          <a
            href={"mailto:yigiterenozgur@outlook.com"}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i className="fas fa-envelope" style={{ color: "#D1920D" }}></i>
          </a>
          <a
            href={"mailto:yigiterenozgur@outlook.com"}
            target="_blank"
            rel="noreferrer"
            className="real-link"
          >
            Mail
          </a>
        </div>
        <div>
          <a
            href={"https://www.linkedin.com/in/yigit-eren-ozgur/"}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i className="fab fa-linkedin-in" style={{ color: "#D1920D" }}></i>
          </a>
          <a
            href={"https://www.linkedin.com/in/yigit-eren-ozgur/"}
            target="_blank"
            rel="noreferrer"
            className="real-link"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href={"https://github.com/erenozgur98"}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i className="fab fa-github" style={{ color: "#D1920D" }}></i>
          </a>
          <a
            href={"https://github.com/erenozgur98"}
            target="_blank"
            rel="noreferrer"
            className="real-link"
          >
            Github
          </a>
        </div>
        <div>
          <a
            href={
              "https://docs.google.com/document/d/15RRjtY9lOy9PZPcvcRgrS7AKtrmzav-G0PrCnHjnOzQ/edit?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i style={{ color: "#D1920D" }} className="far fa-file-alt"></i>
          </a>
          <a
            href={
              "https://docs.google.com/document/d/15RRjtY9lOy9PZPcvcRgrS7AKtrmzav-G0PrCnHjnOzQ/edit?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
            className="real-link"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
