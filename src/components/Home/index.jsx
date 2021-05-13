import React from 'react'
import { Fade } from 'react-reveal';
import { Container } from 'react-bootstrap';
import Type from './Type';
import './style.scss';

function Home() {
    return (
        <div className="section-header">
            <Container className='home-section'>
                <Fade bottom cascade>
                    <h2 className="heading-name">
                        Hey there! I'm <span className='name'>Yigit Eren Ozgur</span>
                    </h2>
                </Fade>
                <Fade bottom cascade>
                    <Container>
                        <div className="type">
                            <Type />
                        </div>
                        <p className="home-about-me">
                            Full-stack web developer leveraging customer service background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of North Carolina Charlotte, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience.
                        </p>
                        <p className='about-link-p'>
                            Read more about me <span>
                                <a href='/about' className='about-link'>
                                    here
                                </a></span>
                        </p>
                    </Container>
                </Fade>
            </Container>
            <Fade bottom cascade>
                <Container className='contact-section'>
                    <h2><span className='contact'>Contact</span></h2>
                </Container>
            </Fade>
            <Fade bottom cascade>
                <Container className='contact-links'>
                    <div>
                        <a
                            href={'mailto:yigiterenozgur@outlook.com'}
                            target='_blank'
                            rel='noreferrer'
                            class='footer-link'
                        >
                            <i class='fas fa-envelope'></i>
                        </a>
                        <a
                            href={'mailto:yigiterenozgur@outlook.com'}
                            target='_blank'
                            rel='noreferrer'
                            class='real-link'
                        >
                            yigiterenozgur@outlook.com
                        </a>
                    </div>
                    <div>
                        <a
                            href={'https://www.linkedin.com/in/yigit-eren-ozgur/'}
                            target='_blank'
                            rel='noreferrer'
                            class='footer-link'
                        >
                            <i className='fab fa-linkedin-in'></i>
                        </a>
                        <a
                            href={'https://www.linkedin.com/in/yigit-eren-ozgur/'}
                            target='_blank'
                            rel='noreferrer'
                            class='real-link'
                        >
                            linkedin.com/in/yigit-eren-ozgur/
                        </a>
                    </div>
                    <div>
                        <a
                            href={'https://github.com/erenozgur98'}
                            target='_blank'
                            rel='noreferrer'
                            className='footer-link'
                        >
                            <i class='fab fa-github'></i>
                        </a>
                        <a
                            href={'https://github.com/erenozgur98'}
                            target='_blank'
                            rel='noreferrer'
                            class='real-link'
                        >
                            github.com/erenozgur98
                        </a>
                    </div>
                </Container>
            </Fade>
        </div>
    )
}

export default Home
