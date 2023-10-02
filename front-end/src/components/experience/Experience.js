import React from "react";
import "./experience.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <h5>What Skills I Have</h5>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />

              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>Tailwind Css</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>Asp.Net core</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>MySQl</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>Postgress SQl</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>

            <article className="experience__details">
              <CheckCircleOutlineIcon className="experience__details-icons" />
              <div>
                <h4>Mongo Db</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
