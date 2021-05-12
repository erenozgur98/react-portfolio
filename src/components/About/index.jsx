import React from 'react'
import { Fade } from 'react-reveal';
import { Container } from 'react-bootstrap';
import './style.scss';
import Applications from './application';
import Tools from './tools';
import Language from './language';
import Card from './Card';

function About() {
    return (
        <div className='main'>
            <Container className='about-me'>
                <Fade bottom cascade>
                    <h1>About Me</h1>
                </Fade>
            </Container>
            <Container>
                <Fade bottom cascade>
                    <p>
                        I was born and raised in Turkey, fell in love with America and decided I wanted to move here. After a year of living in America I have discovered my passion for coding and started a community college on Software Development. After watching tons of Youtube videos about how could I learn to code faster than 4 years of eductaion, I have discovered a concept called Coding Bootcamp where they teach you how to code in short amount of time. That is why I decided to sign up for one. After few weeks into the Bootcamp I fell in love even more, the posibilities are endless of what I can do with the small information that I knew at the time. I couldn't get enough, I wanted to do more and more every day. I have successfully completed UNC Charlotte Coding Bootcamp in May 2021. In the mean time, I have done 3 big projects with my teammates and worked on small projects on the side. Now that I have completed my education I am learning new technologies and training on my newly learned skills more and more everyday. I am looking forward to the future where I can create more and have fun doing it. I am excited to get more skills and more experience.
                    </p>
                </Fade>
            </Container>
            <Container className='skills'>
                <Fade bottom cascade>
                    <h2>Technical Skills</h2>
                </Fade>
            </Container>
            <Container className='languages'>
                <Fade bottom cascade>
                    <h3>Languages:</h3>
                    {Language.map((language, i) => (
                        <Card
                            key={i}
                            image={language.image}
                            title={language.title}
                            className='language'
                        />
                    ))}
                </Fade>
            </Container>
            <Container className='applications'>
                <Fade bottom cascade>
                    <h3>Applications:</h3>
                    {Applications.map((application, i) => (
                        <Card
                            key={i}
                            image={application.image}
                            title={application.title}
                            className='application'
                        />
                    ))}
                </Fade>
            </Container>
            <Container className='tools'>
                <Fade bottom cascade>
                    <h3>Tools:</h3>
                    {Tools.map((tool, i) => (
                        <Card
                            key={i}
                            image={tool.image}
                            title={tool.title}
                            className='tool'
                        />
                    ))}
                </Fade>
            </Container>
        </div>
    )
}

export default About;
