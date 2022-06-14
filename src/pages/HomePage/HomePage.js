import React from "react";

import NavbarComponent from "../../components/NavbarComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";


import classes from "./HomePage.module.css";



const HomePage = () => {

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
         <div>
           <button>Let's get started</button>
         </div>
         </article>
        </section>
      <div className={classes.sideLink}><small>Let's get to talking</small></div>
    </main>
    </React.Fragment>
  );
}

export default React.memo(HomePage);
