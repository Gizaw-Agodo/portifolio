import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FolderIcon from "@mui/icons-material/Folder";
import CodeIcon from "@mui/icons-material/Code";
import { Typography } from "@mui/material";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <EmojiEventsIcon />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <CodeIcon />
              <h5>Coding </h5>
              <small> 4+ programing languages </small>
            </article>

            <article className="about__card">
              <FolderIcon />
              <h5>Projects</h5>
              <small>20 + completed</small>
            </article>
          </div>
          <Typography>
            I am a full stack web developer from Ethiopia addis ababa i
            like reading and codding and currently I am studing software
            engineering in Addis Ababa university my main moto is solving
            problems by employing engineering principles
          </Typography>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
