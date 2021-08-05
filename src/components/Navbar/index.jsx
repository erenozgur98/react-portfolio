import React, { useState } from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Navbar/logo.png'
import './style.css';

function NavBar() {
    const [navColor, setNavColor] = useState('navColor2');

    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            setNavColor('navColor1');
        } else {
            setNavColor('navColor2');
        }
    };

    window.addEventListener('scroll', scrollHandler);

    return (
        <Navbar
            collapseOnSelect
            expand='lg'
            variant='dark'
            sticky='top'
            className={navColor}
        >
            <NavbarBrand as={Link} className='navbar-brand' to='/'>
                <img src={logo} className='logo' alt='logo' />
            </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto navbar'>
                    <Nav.Link as={Link} to='/home' className='nav-link'>
                        <div className="navLinks">
                            <i
                                style={{ paddingRight: "8px", color: "#D1920D" }}
                                className="fas fa-home"></i>
                        Home
                        </div>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/about' className='nav-link'>
                        <div className="navLinks">
                            <i
                                style={{ paddingRight: "8px", color: "#D1920D" }}
                                className="fas fa-user"></i>
                        About Me
                        </div>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/projects' className='nav-link'>
                        <div className="navLinks">
                            <i
                                style={{ paddingRight: "8px", color: "#D1920D" }}
                                className="fas fa-code"></i>
                        Projects
                        </div>
                    </Nav.Link>
                    <Nav.Link
                        href={'https://docs.google.com/document/d/1FN5bYEZK7chY812prm7P1zVjzIeWqsW6tqu5cPUG4pg/edit?usp=sharing'}
                        target='_blank'
                        rel='noreferrer'
                        className='nav-link'
                    >
                        <div className="navLinks">
                            <i
                                style={{ paddingRight: "8px", color: "#D1920D" }}
                                className="far fa-file-alt"></i>
                        Resume
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
