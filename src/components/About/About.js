import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particles/Particles';

function About() {
    return (
        <section>
            <Container fluid className="" id="about">
                <Row>
                    <Col>
                        <h2 style={{ textAlign: 'center' }}>This is where About Me Goes</h2>
                    </Col>
                </Row>
            </Container>
            <Particle />
        </section>
    )
}

export default About;