import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import '../styles/style.css';

const HomePage = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ color: "#fff" }} className="heading">
                                Hello, I'm Yigit Eren Ozgur but you can call me Eren
                            </h1>
                            <Type />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default HomePage;
