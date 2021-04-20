import React from 'react'
import { Container } from 'react-bootstrap';
import Type from './Type';
import pic from './pic.jpeg'
import './style.css';

const HomePage = () => {
    return (
        <section className="section-header">
            <Container className="home-section">
                <h2 className="heading-name">
                    Hey there! I'm <span class="name">Yigit Eren Ozgur</span>
                </h2>
                <p className="small-about-me">Full-stack web developer leveraging customer service background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of North Carolina Charlotte, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience</p>
            </Container>
            <Container className="picture">
                <img src={pic} className="profile-picture" alt="profilePicture" />
                <div className="type">
                    <Type />
                </div>
            </Container>
        </section>
    )
}

export default HomePage;
