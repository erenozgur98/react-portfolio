import React from 'react'
import { Carousel } from 'react-bootstrap';
import freshairfinder from '../../img/fresh-air-finder.jpg';
import cupets from '../../img/cupets.jpg';
import avengers from '../../img/avengers.jpg';
import './style.css';

function Projects() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={5000} className="carousel">
                    <img
                        className="d-block"
                        src={freshairfinder}
                        alt="Fresh Air Finder"
                    />
                    <Carousel.Caption>
                        <h3>First Project</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="carousel">
                    <img
                        className="d-block"
                        src={cupets}
                        alt="Cupets"
                    />

                    <Carousel.Caption>
                        <h3>Second Project</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="carousel">
                    <img
                        className=""
                        src={avengers}
                        alt="Avengers"
                    />

                    <Carousel.Caption>
                        <h3>Third Project</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Projects;
