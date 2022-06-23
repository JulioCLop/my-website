import React from "react";

import { Link } from "react-router-dom";

import classes from "./SkillSetSection.module.css";

const SkillSetSection = () => {
  return (
    <section className={classes.SkillSetSectionContainer}>
      <div className={classes.SkillSetSectionContainers}>
        <img
          src="https://images.unsplash.com/photo-1637044527986-1727785b1fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className={classes.SkillSetSectionContainers}>
        <h1>About my skill sets</h1>
        <p>
          I began my journey as a developer nearly two years ago, I've mostly
          worked at startups and have collaberated with a variety of talented
          people to create web applications products for both businsess and
          consumer use. In my time as a developer, I have gained the neccesary
          skills to create responsive websites that are fast, user friendly, and
          built with best code practices. My main area of expertise is in
          front-end development, HTML, CSS, JS, ReactJS. I have used a variety
          of resources that collaborate with the coding interactive layouts.
        </p>
        <small>
          If you're looking for a developer to add to your team, I'd love to
          hear from you!
        </small>
        <Link to="/seemorepage">View</Link>
      </div>
    </section>
  );
};

export default SkillSetSection;
