import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      {/* Yigit Eren Ozgur | 2021 */}
      <Link
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
        to="github.com/erenozgur98"
        class="footer-link"
      >
        <i className="fab fa-github"></i>
      </Link>
    </div>
  )
}

export default Footer;
