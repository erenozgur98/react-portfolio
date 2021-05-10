import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Navbar/logo.png'
import './style.css';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand='lg' bg='transparent' variant='dark' fixed='top'>
            <NavbarBrand as={Link} className='navbar-brand' to='/'>
                <img src={logo} className='logo' alt='logo' />
            </NavbarBrand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' />
            <Nav className='ml-auto navbar'>
                <Nav.Link as={Link} to='/' href='/' className='nav-link'>
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            className="fas fa-home"></i>
                        Home
                        </div>
                </Nav.Link>
                <Nav.Link as={Link} to='/about' href='/about' className='nav-link'>
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            className="fas fa-user"></i>
                        About
                        </div>
                </Nav.Link>
                <Nav.Link as={Link} to='/projects' href='/projects' className='nav-link'>
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            className="fas fa-code"></i>
                        Projects
                        </div>
                </Nav.Link>
                <Nav.Link
                    href={'https://docs.google.com/document/d/1FFk85d-l13BikC6rqBUw_uN6JEtmDJ17f0Cq9ZhaK7g/edit'}
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
        </Navbar>
    )
}

export default NavBar
