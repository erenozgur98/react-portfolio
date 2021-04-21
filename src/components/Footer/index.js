import React from 'react';
import '../../styles/style.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <Link
        variant="nav"
        href="mailto:yigiterenozgur@outlook.com"
        class="footer-link"
      >
        <i class="fas fa-envelope"></i>
      </Link>
      <Link
        href="https://www.linkedin.com/in/yigit-eren-ozgur/"
        class="footer-link"
      >
        <i className="fab fa-linkedin-in"></i>
      </Link>
      <Link
        href="github.com/erenozgur98"
        class="footer-link"
      >
        <i className="fab fa-github"></i>
      </Link>
    </footer>
  );
}

export default Footer;
