import React, { useContext } from "react";
import { Link } from "react-router-dom";

import HeadShot from "../../assets/AboutPage/headshot.jpg";

import { ThemeContext } from "../../context/Theme.Contexts";

import classes from "./ContainerInto.module.css";

export const ContainerIntro = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section
      style={darkMode ? { color: "white" } : { color: "black" }}
      className={classes["section-one-about"]}
    >
      <div className={classes.containerOne}>
        <article>
          <img
            className={classes.containerIntroImage}
            src={HeadShot}
            width="310"
            height="417"
            alt="head shot"
          />
        </article>
      </div>
      <div className={classes.containerTwo}>
        <article>
          <div className={classes["inner-container"]}>
            <h1>A Little About Me</h1>
            <div className={classes.underline}>
              <span
                style={darkMode ? { backgroundColor: "white" } : {}}
                className={classes.underlineBox}
              ></span>
            </div>
          </div>
          <div className={classes["inner-container"]}>
            <p>
              Hello, I'm <span className={classes.nameSpan}>Julio</span>. I am a
              Front-end Developer that loves exploring technologies and other
              languages that spike my interest. I work on builds and maintenance
              for a variety of client requests. Attentive to all aspects of web
              development, details and high quality maintainable code.
            </p>
          </div>
          <div className={classes["inner-container"]}>
            <Link style={darkMode ? { color: "white" } : {}} to="/contact">
              <div className={classes["btn-background"]} />
              Lets fuel your creativity
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};
