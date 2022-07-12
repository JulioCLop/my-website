import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/LoadingPage/newLogoNoBackround.png";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MdArrowForwardIos } from "react-icons/md";
import {BsArrowRightCircle} from 'react-icons/bs';

import classes from "./HomePage.module.css";

const HomePage = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <React.Fragment>
      <main className={classes["home-page"]}>
        <div className={classes.imageTwo} />
        <div
          style={{ backgroundImage: `url(${Logo})` }}
          className={classes.logo}
        />
        <section className={classes["section-flex"]}>
          <div className={classes["section-flex-center"]}>
            <article>
              <h1>Front End Developer</h1>
                <h3>Building Amazing React Applications</h3>
              <p>
                I'm a Front-end Developer, and I build anything from mobile to
                web apps.
              </p>
            </article>
            <article>
              <div>
               <Link to="/about"><BsArrowRightCircle className={classes.arrowIcon} />  | Let's get started</Link>
              </div>
            </article>
          </div>
        </section>
        <div
          className={`${
            !matchesMD ? classes["sideLink-mobile"] : classes.sideLink
          } }`}
        >
          <MdArrowForwardIos className={classes.arrowRight} />
          <Link to="/contact">
            <small>Let's get to talking</small>
          </Link>
        </div>
      </main>
    </React.Fragment>
  );
};

export default React.memo(HomePage);
