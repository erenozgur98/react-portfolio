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
