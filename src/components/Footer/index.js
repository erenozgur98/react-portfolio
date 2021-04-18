import React from "react";
import '../../styles/style.css';

function Footer() {
  return (
    <div className="footer">
      Yigit Eren Ozgur | 2021
     <a
        href="mailto:yigiterenozgur@outlook.com"
        style={{ color: "#D1920D" }}
     >
       <i class="fas fa-envelope"></i>
     </a>
     <a
        href="https://www.linkedin.com/in/yigit-eren-ozgur/"
        style={{ color: "#D1920D" }}
     >
       <i className="fab fa-linkedin-in"></i>
     </a>
     <a
        href="github.com/erenozgur98"
        style={{ color: "#D1920D" }}
     >
       <i className="fab fa-github"></i>
     </a>
    </div >
  );
}

export default Footer;
