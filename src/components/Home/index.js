import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import '../../styles/style.css';

const HomePage = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                    <Row>
                        <Col className="home-header" style={{ textAlign: 'center' }}>
                            <h2 className="heading-name">
                                Hey there! I'm Yigit Eren Ozgur
                            </h2>
                            <div className="type" style={{ textAlign: 'center' }}>
                                <Type />
                            </div>
                        </Col>
                    </Row>
            </Container>
        </section>
    )
}

export default HomePage;
