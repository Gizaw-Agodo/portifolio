import React, { useEffect, useState } from "react";
import "./portifolio.css";
import { urlFor, client } from "../../client";

const Portfolio = () => {
  const [projects,setProjects] = useState([])
   
  useEffect(() => {
     const query = `*[_type == "projects"]`;
     client.fetch(query).then((data) => {
       setProjects(data);
     });
   }, []);
  return (
    <section id="portfolio">
      <h5>What I have Done</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={urlFor(project.imgurl)} alt="" />
            </div>
            <h3>{project.title}</h3>

            <div className="portfolio__item-cta">
              <div>
                <a href={`${project.githubLink}`} className="btn">
                  Github
                </a>
              </div>
              <div>
                <a href={`${project.demoLink}`} className="btn btn-primary">
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
