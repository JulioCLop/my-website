import React from "react";

import reactImage  from "../../assets/HomePage/react.png";

import { Link } from "react-router-dom";

import Card from '../../components/UI/Card/Card';
import NavbarComponent from "../../components/NavbarComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";


import classes from "./HomePage.module.css";



const HomePage = () => {

  return (
    <React.Fragment> 
     <NavbarComponent  />
      <MobileNavigation  /> 
      <div className={classes["home-page"]}>
      <main>
        <section className={classes["section-flex"]}>
        <Card className={classes.cardContainer}>
        <div className={classes.cardContainerSections}>
        <div>
        <h1>React Developer</h1>
        <p>I'm a React developer, and I build anything from mobile to web apps.</p>
        </div>
        </div>
        <img src={`${reactImage}`} className={classes["react-image"]} alt='react logo'/>
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
    </React.Fragment>
  );
}

export default React.memo(HomePage);
