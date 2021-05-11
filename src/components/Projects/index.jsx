import React from 'react'
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Project from './data.js';
import Card from './Card';
import './style.css';

function Projects() {
    return (
        <div className='projects'>
            <Container>
                <Fade bottom cascade>
                    <h2>Projects</h2>
                </Fade>
            </Container>
            <div className='grid'>
                {Project.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        url={project.url}
                        github={project.github}
                        className='images'
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
