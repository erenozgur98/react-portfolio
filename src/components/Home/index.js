import React from 'react'
import { Container } from 'react-bootstrap';
import Type from './Type';
import pic from './pic.jpeg'
import { Fade } from 'react-reveal';
import Skills from '.././Skills';
import './style.css';

const HomePage = () => {
    return (
        <div>
            <section className="section-header">
                <Fade bottom cascade>
                    <Container className="home-section">
                        <h2 className="heading-name">
                            Hey there! I'm <span class="name">Yigit Eren Ozgur</span>
                        </h2>
                        <div className="type">
                            <Type />
                        </div>
                        <p className="home-about-me">
                            Full-stack web developer leveraging customer service background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of North Carolina Charlotte, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience
                    </p>
                    </Container>
                </Fade>
                <Container className="picture">
                    <img src={pic} className="profile-picture" alt="profilePicture" />
                </Container>
            </section>
            <Container className="skills">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {Skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <img src={skill.img} alt="css" style={{ height: '3rem', background: 'white' }} />
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default HomePage;
