import React from 'react'
import { Fade } from 'react-reveal';
import { Container } from 'react-bootstrap';
import './style.scss';
import Tools from './tools';
import Card from './Card';

function About() {
    return (
        <div className='main'>
            <Container className='about-me'>
                <Fade bottom cascade>
                    <h1>About Me</h1>
                </Fade>
            </Container>
            <Fade bottom cascade>
                <Container>
                    <p>
                        I was born and raised in Turkey, moved to United States of America when I was 20. After a year of living in America I have discovered my passion for coding and started a community college on Software Development. After discovering Coding Bootcamp's that is why I decided to sign up for one. After few weeks into the Bootcamp I fell in love even more, the posibilities are endless of what I can do with the small information that I knew at the time. I couldn't get enough, I wanted to do more and more every day. I have successfully completed UNC Charlotte Coding Bootcamp in May 2021. In the mean time, I have done big projects with my teammates and worked on small projects on the side. Now that I have completed my education I am learning new technologies and training on my newly learned skills more and more everyday. I am looking forward to the future where I can create more and have fun doing it. I'm excited to get more skills and more experience.
                    </p>
                    <h3>September - 2021 Update</h3>
                    <p>
                        Starting a new role as a Software Engineer at Newfold Digital
                    </p>
                </Container>
            </Fade>
            <Container className='skills'>
                <Fade bottom cascade>
                    <h2>Technical Skills</h2>
                </Fade>
            </Container>
            <Container className='skills-flex'>
                {Tools.map((tool, i) => (
                    <Card
                        key={i}
                        image={tool.image}
                        title={tool.title}
                    />
                ))}
            </Container>
        </div>
    )
}

export default About;
