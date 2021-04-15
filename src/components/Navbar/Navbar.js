import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                erenozgur
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item bg-light">
                        <Link
                            to="/about"
                            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About Me
                </Link>
                    </li>
                    <li className="nav-item bg-light">
                        <Link
                            to="/projects"
                            className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                        >
                            Projects
                </Link>
                    </li>
                    <li className="nav-item bg-light">
                        <Link
                            to="/games"
                            className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                        >
                            Games
                </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
