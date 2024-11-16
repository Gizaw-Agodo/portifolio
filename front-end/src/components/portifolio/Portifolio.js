import React, { useEffect, useState } from "react";
import "./portifolio.css";
import { urlFor, client } from "../../client";
import projects from "../../data/projectsData";

const Portfolio = () => {
  // const myprojects = projects;

  // useEffect(() => {
  //   const query = `*[_type == "projects"]`;
  //   client.fetch(query).then((data) => {
  //     setProjects(data);
  //   });
  // }, []);

  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <h5>What I have Done</h5>

      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={project.imgurl} alt={project.title} />
            </div>
            <h3>{project.title}</h3>

            <div className="portfolio__item-techstack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>

            {/* Add project description with scrolling */}
            <div className="portfolio__item-description">
              {project.description}
            </div>

            <div className="portfolio__item-cta">
              <div>
                <a href={`${project.githubLink}`}   target="_blank" className="btn">
                  Github
                </a>
              </div>
              <div>
                <a href={`${project.demoLink}`}   target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
