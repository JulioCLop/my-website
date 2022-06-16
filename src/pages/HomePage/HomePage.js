import React from "react";

import { Link } from "react-router-dom";

import NavbarComponent from "../../components/NavbarComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";

import {  useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import classes from "./HomePage.module.css";



const HomePage = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <React.Fragment> 
     <NavbarComponent  />
      <MobileNavigation  /> 
      <main className={classes["home-page"]}>
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
      <div className={`${!matchesMD  ? classes['sideLink-mobile'] : classes.sideLink} }`}><Link to="/contact"><small>Let's get to talking</small></Link></div>
    </main>
    </React.Fragment>
  );
}

export default React.memo(HomePage);
