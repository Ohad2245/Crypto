/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      {/* <Routes className="route">
        <Route path="/upCoins" element={<UpCoins />} />
      </Routes>

      <div className="permalinks">
        <a href="/upCoins">Up Coins </a>
        <a href="./downCoins">Down Coins</a>
        <a href="./about">Contact</a>
        <a href="./register">Register</a>
        <a href="./login">Login</a>
      </div> */}
      

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
        <div style={{color:'gray'}}>
        <h4>This page was viewed</h4>
        <h2 id="count">0</h2>
        <h4>times</h4>
        </div>
          &copy; All Rights Reserved by Ohad{" "}
        </small>
      </div>
    </div>
  );
}

export default Footer;
