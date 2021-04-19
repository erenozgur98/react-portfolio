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
                    className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
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
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
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
                    className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                >
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            class="fas fa-code"></i>
                        Projects
                    </div>
                </Link>
                <Link
                    to="/games"
                    className={window.location.pathname === "/games" ? "nav-link active" : "nav-link"}
                >
                    <div className="navLinks">
                        <i
                            style={{ paddingRight: "8px", color: "#D1920D" }}
                            class="fas fa-dice"></i>
                            Games

                    </div>
                </Link>
            </nav>
        </div>
    );
}

export default NavBar;
