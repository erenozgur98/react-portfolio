import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/style.css';

function NavBar() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">
                    erenozgur
            </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/home"
                            className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                        >
                            <i className="fas fa-home"></i>Home
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            <i className="fas fa-user"></i>About Me
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/projects"
                            className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                        >
                            Projects
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/games"
                            className={window.location.pathname === "/games" ? "nav-link active" : "nav-link"}
                        >
                            Games
                </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
