import React from 'react'
import { Container } from 'react-bootstrap';
import Type from './Type';
import './style.css';
import pic from './pic.jpeg'

const HomePage = () => {
    return (
        <section>
            <Container className="home-section">
                <h2 className="heading-name">
                    Hey there! I'm Yigit Eren Ozgur
                            </h2>
                <div className="type">
                    <Type />
                </div>
            </Container>
            <Container className="picture">
                <img src={pic} className="profile-picture"alt="profilePicture" />
            </Container>
        </section>
    )
}

export default HomePage;
