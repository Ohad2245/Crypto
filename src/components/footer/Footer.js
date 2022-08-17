/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import bg from '../assets/footer-bg.jpg';
// import bg from '../assets/footer2.png';
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import bg2 from "../../assets/one.svg";

function Footer() {
  return (
    <div className="footer">
       <div className="permalinks">
           <a href='./upCoins'>Up Coins </a>
           <a href='./downCoins'>Down Coins</a>
           <a href='./about'>Contact</a>
           <a href='./register'>Register</a>
           <a href='./login'>Login</a>
        </div> 

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100000848391807"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://github.com/Ohad2245" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ohad-cohen-6b2393211/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          We endeavor to publish and maintain accurate information on external
          listings,
          <br></br>but we do not guarantee accuracy,
          <br></br>
          The completeness, or usefulness of information in this site,
          <br></br> we do not make or endorse, and are not responsible for,
          <br></br> other factors. You hereby agree that we do not provide our
          own opinions,
          <br></br> advice or recommendations.
          <br></br>
          <br></br>
        </small>
        <small>
          &copy; All Rights Reserved by Ohad{" "}
          <a
            className="oneBi"
            href="https://www.one1.co.il/services/bi/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bg2} width="70" />
          </a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
