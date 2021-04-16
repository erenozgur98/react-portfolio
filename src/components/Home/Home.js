import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import Particle from '../Particles/Particles';
import '../../styles/style.css';

const HomePage = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Row>
                    <Col md={7} className="home-header">
                        {/* <h2 className="heading-name">
                            Hey there! I'm Yigit Eren Ozgur
                            </h2> */}
                        <div className="type">
                            <Type />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Particle />
        </section>
    )
}

export default HomePage;
