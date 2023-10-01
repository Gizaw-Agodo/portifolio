import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Gizaw
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/gech.yeag/">
          <Facebook />
        </a>
        <a href=" http://www.instagram.com/gizawag123">
          <Instagram />
        </a>
        <a href="https::/twitter.com">
          <Twitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 Gizaw All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
