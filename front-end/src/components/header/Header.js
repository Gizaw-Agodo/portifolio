import React from "react";
import "./header.css";
import CV from "../../assets/Resume.gizaw.pdf";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";

const Header = () => {
  return (
    <header style={{ marginTop: 50 }} id="home">
      <div className="container header__container " >
        <div className="header__socials">
          <a href="https://www.linkedin.com/in/gizaw-agodo-671390218/">
            <LinkedIn fontSize="large" />
          </a>
          <a href="https://github.com/Gizaw-Agodo">
            <GitHub fontSize="large" />
          </a>
          <a href="https://www.facebook.com/gech.yeag/">
            <Facebook fontSize="large" />
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div>
            <h4 className="header_middle">Hello I'm</h4>
            <div className="content">
              <h2>Gizaw</h2>
              <h2>Gizaw</h2>
            </div>
            <h4 className="text_light header_middle" style={{ marginTop: 120 }}>
              Fullstack Developer
            </h4>
          </div>

          <div className="cta">
            <a href={CV} download className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="me">
          <img
            src="/assets/me2.png"
            alt="me"
            className="profile-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
