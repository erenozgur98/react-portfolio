import React from 'react'
import { Card } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import ProjectData from '../ProjectData';
import './style.scss';

function Projects() {
    return (
        <div className="section">
            <div className="container">
                <div className="projects-wrapper">
                    <Fade bottom>
                        <h1>Projects</h1>
                    </Fade>

                    <div className="grid">
                        <Fade bottom cascade>
                            {ProjectData.map((project, index) => (
                                <Card
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    url={project.url}
                                    github={project.github}
                                />
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
