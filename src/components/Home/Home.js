import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import Particle from '../Particles/Particles';
import Snake from 'react-simple-snake';
import '../../styles/style.css';

const HomePage = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Row>
                    <Col className="home-header">
                        <h2 style={{ textAlign: 'center', marginTop: "24px", background: "transparent" }} className="heading">
                            Hey there! <span className="emoji"></span>

                                I'm Yigit Eren Ozgur
                            </h2>
                        <div style={{ textAlign: 'center', padding: "24px", marginBottom: "24px" }}>
                            <Type />
                        </div>
                    </Col>
                </Row>
                {/* <div>
                    <h2 style={{ textAlign: 'center' }}>Here is a snake game for you</h2>
                <Snake />
                </div> */}
                <Particle />
            </Container>
        </section>
    )
}

export default HomePage;
