import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <h3>sunnyside</h3>
      <div className="footer__content">
        <h6>About</h6>
        <h6>Services</h6>
        <h6>Projects</h6>
      </div>
      <div className="footer__social">
        <img src="/icons/icon-facebook.svg" alt="" />
        <img src="/icons/icon-instagram.svg" alt="" />
        <img src="/icons/icon-twitter.svg" alt="" />
        <img src="/icons/icon-pinterest.svg" alt="" />

      </div>
    </div>
  );
}

export default Footer;
