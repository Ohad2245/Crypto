import React from "react";
// import bg from '../assets/footer-bg.jpg';
// import bg from '../assets/footer2.png';
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import bg from '../../assets/footer.jpg';

function Footer() {
  return (
    <div className="footer" style={{backgroundImage: `url(${bg})`}} >
    {/* */}
    <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100000848391807" target="_blank" rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://github.com/Ohad2245" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/ohad-cohen-6b2393211/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All Rights Reserved.</small>
      </div>
    </div>
  );
}

export default Footer;
