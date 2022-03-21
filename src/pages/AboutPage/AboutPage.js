import React, { useContext, useState} from "react";

import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/Theme.Contexts";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import WorkContainers from "../../components/AboutPage_Components/Work_Containers";

import classes from  "./AboutPage.module.css";


const  AboutPage = () => {
  const theme = useTheme();
  const { darkMode, darkModeStyles } = useContext(ThemeContext);
  const { sideNav } = useContext(ThemeContext);
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  const [cvShow, setShow] = useState(false);


  


  return (
  <>
   <NavbarComponent />
    <div  className={classes["about-Page" ]}style={darkMode ? darkModeStyles : {}}>
    <MobileNavigation />
      <section className={classes["section-one-about"]}>
        <div
          className={classes["section-main-img"]}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
          }}
        />
        <div
          className={
            matchesMD
              ? classes["section-one-containers"]
              :` ${classes["section-one-containers"]} ${classes["section-one-flex-helper"]}`
          }
        >
          <div className={classes["section-one-div1"]}>
            <h1>
              &ldquo;When something is important enough, you do it, even if the
              odds are not in your favor. &rdquo;
              <header-quote>
                <small className={classes["s"]}>-Elon Musk-</small>
              </header-quote>
            </h1>
          </div>
          <div className={classes["section-one-div2"]}>
            <h3>
              <Link to="/contact">Let’s fuel your creativity!</Link>
            </h3>
          </div>
        </div>
      </section>
      <section className={classes["section-two-react-intro"]}>
        <div className={classes["react-header"]}>
          <h2>UI/UX REACT<br/><span className={classes["title-developer"]}>DEVELOPER</span></h2>
        </div>
        <div className={classes["developer-intro"]}>
          <p>
            <span className={classes["about-name"]}>Hello, I'm Julio Lopez.</span> <br/> I am a <span className={classes.spanWhite}>React Developer</span>. But,
            still exploring other technologies that spike my interest. I work on
            builds and maintenance for a variety of client requests. Attentive
            to UI/UX details and high quality and maintainable code. 
          </p>
        </div>
      </section>
   <section className={`${classes["F-AC"]} ${classes["about-section-3"]}`}>
     <div className={classes["about-section-3-img-container"]}>
          <img src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
     </div>
     <div className={`${classes["FC-AC"]} ${classes["about-section-content-container"]}`}>
          <div className={classes["content-inner-container-1"]}>
            <h2>A litte about my skill sets</h2>
            <p>I began my journey as a developer nearly two years ago, I've mostly worked at startups and have collaberated with a variety of talented people to create web applications products for both businsess and consumer use.</p>
            <p>In my time as a developer, I have gained the neccesary skills to create responsive websites that are fast, user friendly, and built with best code practices. My main area of expertise is in front-end development, HTML, CSS, JS, ReactJS. I have used a variety of resources that collaborate with the coding interactive layouts.  </p>
            <p>If you're looking for a developer to
            add to your team, I'd love to hear from you!</p>
          </div>
          <div className={`${classes["F-AC"]} ${classes["content-inner-button-container"]}`}>
            <Link to="/see-more">see more</Link>
          </div>

        <div className={`${classes["F-AC"]}  ${classes["content-inner-skill-view"]}`}>
          <div className={`${classes["FC-AC"]} ${classes["inner-skill-view"]}`}>
            <span>9/10</span>
            <h4>Front-end</h4>
          </div>
          <div className={`${classes["FC-AC"]} ${classes["inner-skill-view"]}`}>
          <span>6/10</span>
            <h4>Back-end</h4>
          </div>
          <div className={`${classes["FC-AC"]} ${classes["inner-skill-view"]}`}>
          <span>9/10</span>
            <h4>ReactJS</h4>
          </div>
        </div>
     </div>
   </section>
   
   <section className={classes["work-section"]}>
     <div className={classes["work-header"]}>
       <h1>Where I've <span style={{color: 'white'}}>worked</span></h1>
     </div>
     <div className={classes["work-main-job-containers"]}>
      <WorkContainers srcImage='https://gethalen.com/images/logo.png' link='https://gethalen.com/'/>
      <WorkContainers srcImage='https://orlandospencer.com/media/cache/73/04/73042ae0f959b479bc9fbf6dd7bfb3ee.jpg' link='https://gethalen.com/'/>
      <WorkContainers srcImage='https://couponseeker.com/storage/CCS-SUPPLY-STORE.jpg' link='https://gethalen.com/'/>
     </div>
   </section>
   <section className={classes["CV_Section"]}>
   <h1>Learn More <span style={{color:'white'}}>About Me...</span></h1>
    <div className={classes["cv-show-contianer"]} onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
    {
      cvShow ? 
    <div className={cvShow ? classes.viewCV : classes.viewCVAlt1}>
       <p>Check out my CV</p>
       <a>Download</a>
     </div>
       : 
      <div className={cvShow ? classes.viewCV1 : classes.viewCVAlt}>
      <h1 >CV</h1>
      </div>
    }
      
     </div>
   </section>
    </div>
    <FooterComponent />
    </>
  );
}

export default AboutPage;
