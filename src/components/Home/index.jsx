import React from 'react'
import { Container } from 'react-bootstrap'
import Type from './Type'
import './style.css'

function Home() {
  return (
    <div className='section-header'>
      <Container className='home-section'>
        <h2 className='heading-name'>
          Hey there! I'm <span className='name'>Eren Ozgur</span>
        </h2>
        <Container>
          <div className='type'>
            <Type />
          </div>
          <p className='home-about-me'>
            Software Engineer with 3 years of experience, I have been deeply
            involved in developing robust and scalable software applications,
            utilizing a diverse set of programming languages and technologies.
            Particularly with HTML, CSS, Node.js, React.js, MySQL and
            JavaScript. My capabilities, innovative solutions, and successful
            project outcomes demonstrate my proficiency and dedication to
            delivering high-quality software products. Here is a summary of the
            evidence that showcases my excellence; Robust and Scalable
            Applications, Reusable and Maintainable Code, Cross-platform
            Compatibility, Extensive Testing and Quality Assurance, Performance
            Optimization, Continuous Learning and Innovation
          </p>
        </Container>
      </Container>
      <div className='contact-section'>
        <h2>
          <span className='contact'>Contact</span>
        </h2>
      </div>
      <div className='contact-links'>
        <div>
          <a
            href={'mailto:yigiterenozgur@outlook.com'}
            target='_blank'
            rel='noreferrer'
            className='footer-link'
          >
            <i className='fas fa-envelope' style={{ color: '#D1920D' }}></i>
          </a>
          <a
            href={'mailto:yigiterenozgur@outlook.com'}
            target='_blank'
            rel='noreferrer'
            className='real-link'
          >
            Mail
          </a>
        </div>
        <div>
          <a
            href={'https://www.linkedin.com/in/yigit-eren-ozgur/'}
            target='_blank'
            rel='noreferrer'
            className='footer-link'
          >
            <i className='fab fa-linkedin-in' style={{ color: '#D1920D' }}></i>
          </a>
          <a
            href={'https://www.linkedin.com/in/yigit-eren-ozgur/'}
            target='_blank'
            rel='noreferrer'
            className='real-link'
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href={'https://github.com/erenozgur98'}
            target='_blank'
            rel='noreferrer'
            className='footer-link'
          >
            <i className='fab fa-github' style={{ color: '#D1920D' }}></i>
          </a>
          <a
            href={'https://github.com/erenozgur98'}
            target='_blank'
            rel='noreferrer'
            className='real-link'
          >
            Github
          </a>
        </div>
        <div>
          <a
            href={
              'https://docs.google.com/document/d/15RRjtY9lOy9PZPcvcRgrS7AKtrmzav-G0PrCnHjnOzQ/edit?usp=sharing'
            }
            target='_blank'
            rel='noreferrer'
            className='footer-link'
          >
            <i style={{ color: '#D1920D' }} className='far fa-file-alt'></i>
          </a>
          <a
            href={
              'https://docs.google.com/document/d/15RRjtY9lOy9PZPcvcRgrS7AKtrmzav-G0PrCnHjnOzQ/edit?usp=sharing'
            }
            target='_blank'
            rel='noreferrer'
            className='real-link'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
