import React from "react";

import { Link } from "react-router-dom";

import NavbarComponent from "../../components/NavbarComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";
import Card from '../../components/UI/Card/Card'


import classes from "./HomePage.module.css";



const HomePage = () => {

  return (
<div className={classes["home-page"]}>
      <NavbarComponent  />
      <MobileNavigation  /> 
      <main >
        <section className={classes["section-flex"]}>
        <Card className={classes.cardContainer}>
        <div className={classes.cardContainerSections}>
        <div>
        <h1>React Developer</h1>
        <p>I'm a React developer, and I build anything from mobile to web apps.</p>
        </div>
        </div>
      
       <div className={classes.cardContainerSections}>
         <div>
         <small>Feel free to start by looking at my projects!</small>
         <Link  to="/projects">Check it out!</Link>
         </div>
       </div>
        </Card>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
