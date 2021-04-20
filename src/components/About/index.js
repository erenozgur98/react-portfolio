import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

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
        </section>
    )
}

export default About;