import React from 'react'
import { Carousel } from 'react-bootstrap';
import freshairfinder from '../../img/fresh-air-finder.jpg';
import cupets from '../../img/cupets.jpg';
import avengers from '../../img/avengers.jpg';
import employeedirectory from '../../img/employee-directory.jpg';
import './style.css';

function Projects() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={5000} className="carousel">
                    <a
                        href="https://dylanjacobb.github.io/fresh-air-finder/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="image"
                            src={freshairfinder}
                            alt="Fresh Air Finder"
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>Fresh Air Finder</h3>
                        <p>National Park Locator which shows all the parks in the state you choose.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="carousel">
                    <a
                        href="https://ancient-dawn-51222.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="image"
                            src={cupets}
                            alt="Cupets"
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>cuPets</h3>
                        <p>An app for you and your pet to make new friends!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="carousel">
                    <a
                        href="https://erenozgur98.github.io/avengers-quiz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="image"
                            src={avengers}
                            alt="Avengers"
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>Employee Directory</h3>
                        <p>It's an employee directory that helps you keep track of your employees where you can sort them, filter them and see their information.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="carousel">
                    <a
                        href="https://erenozgur98.github.io/avengers-quiz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="image"
                            src={employeedirectory}
                            alt="Employee Directory"
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>Avengers Quiz</h3>
                        <p>Avengers Quiz is to test your knowledge on how much you actually know on Avengers! You can save your score and compete with others as well.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Projects;
