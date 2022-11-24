import React from "react";
import "./nav.css";
import { useState } from "react";
import { Home, Person } from "@mui/icons-material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import Tooltip from "@mui/material/Tooltip";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <Tooltip title="home">
          <Home />
        </Tooltip>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <Tooltip title="about">
          <Person />
        </Tooltip>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <Tooltip title="experinces">
          <BookmarksIcon />
        </Tooltip>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <Tooltip title="projects">
          <AddHomeWorkIcon />
        </Tooltip>
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <Tooltip title="testimonials">
          <VolunteerActivismIcon />
        </Tooltip>
      </a>
    </nav>
  );
};

export default Nav;
