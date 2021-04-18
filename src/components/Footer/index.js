import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/style.css';

function Footer() {
  return (
    <div className="footer">
      Yigit Eren Ozgur | 2021
     <a
        href="https://www.linkedin.com/in/yigit-eren-ozgur/"
        style={{ color: "#fff" }}
     >
       <i className="fab fa-linkedin-in"></i>
     </a>
     <a
        href="github.com/erenozgur98"
        style={{ color: "#fff" }}
     >
       <i className="fab fa-github"></i>
     </a>
    </div >
  );
}

export default Footer;
