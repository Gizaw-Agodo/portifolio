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
      <h2>About Me</h2>
      <h5>Get To Know</h5>

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
              <small>4+ Years Working</small>
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
          I'm a passionate full-stack web developer hailing from the vibrant city of Addis Ababa, Ethiopia. With a deep love for both reading and coding, I've embarked on an exciting journey as a student of software engineering at Addis Ababa University. My driving force? Harnessing the power of engineering principles to tackle real-world problems head-on. Join me on this exhilarating quest to transform challenges into innovative solutions!
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
