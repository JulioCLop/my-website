import React from "react";

import { Link } from "react-router-dom";

import Logo from '../../assets/LoadingPage/newLogoNoBackround.png';

import {  useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {MdArrowForwardIos} from 'react-icons/md';

import classes from "./HomePage.module.css";



const HomePage = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <React.Fragment> 
      <main className={classes["home-page"]}>
      <div style={{backgroundImage: `url(${Logo})`}} className={classes.logo} />
        <section className={classes["section-flex"]}>
         <article>
         <div>
           <h1>Next Level</h1>
           <h1>Front End Developer</h1>
         </div>
         <div>
           <p>I'm a Front-end Developer, and I build anything from mobile to web apps.</p>
         </div>
         </article>
         <article>
         <div id={classes.container}>
       
           <Link to='/about'>Let's get started</Link>
         </div>
         </article>
        </section>
      <div className={`${!matchesMD  ? classes['sideLink-mobile'] : classes.sideLink} }`}><MdArrowForwardIos className={classes.arrowRight}/><Link to="/contact"><small>Let's get to talking</small></Link></div>
    </main>
    </React.Fragment>
  );
}

export default React.memo(HomePage);
