import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import logo from '../Navbar/logo.png'

function NavBar() {
    return (
        <div className="navigation">
            <nav className="navbar">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <Link
                    to="/home"
                    className="nav-link"
                >
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            className="fas fa-home"></i>
                        Home
                    </div>
                </Link>
                <Link
                    to="/about"
                    className="nav-link"
                >
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            className="fas fa-user"></i>
                        About Me
                    </div>
                </Link>
                <Link
                    to="/projects"
                    className="nav-link"
                >
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            class="fas fa-code"></i>
                        Projects
                    </div>
                </Link>
                {/* <Link
                    to="/games"
                    className="nav-link"
                >
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            class="fas fa-dice"></i>
                            Games

                    </div>
                </Link> */}
                <a
                    href={"https://docs.google.com/document/d/1FFk85d-l13BikC6rqBUw_uN6JEtmDJ17f0Cq9ZhaK7g/edit"}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                >
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            class="far fa-file-alt"></i>
                            Resume

                    </div>
                </a>
            </nav>
        </div>
    );
}

export default NavBar;
