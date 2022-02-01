import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/Theme.Contexts";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

import "./AboutPage.css";

const  AboutPage = () => {
  const theme = useTheme();

  const { darkMode, darkModeStyles } = useContext(ThemeContext);
  const { sideNav } = useContext(ThemeContext);

  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
  <>
   <MobileNavigation />
   <NavbarComponent />
    <div  className="about-Page" style={darkMode ? darkModeStyles : {}}>
      <section className="section-one-about">
        <div
          className="section-main-img"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585801449826-641a04b5fb3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
          }}
        />
        <div
          className={
            matchesMD
              ? "section-one-containers "
              : "section-one-containers section-one-flex-helper"
          }
        >
          <div className="section-one-div1">
            <h1>
              &ldquo;When something is important enough, you do it, even if the
              odds are not in your favor. &rdquo;
              <header-quote>
                <small className="s">-Elon Musk-</small>
              </header-quote>
            </h1>
          </div>
          <div className="section-one-div2">
            <h3>
              <Link to="/contact">Let’s fuel your creativity!</Link>
            </h3>
          </div>
        </div>
      </section>
      <section className="section-two-react-intro">
        <div className="react-header">
          <h2>UI/UX REACT DEVELOPER</h2>
        </div>
        <div className="developer-intro">
          <p>
            I am a <span className="spanWhite">React Developer</span>. But,
            still exploring other technologies that spike my interest. I work on
            builds and maintenance for a variety of client requests. Attentive
            to UI/UX details and high quality and maintainable code. 
          </p>
        </div>
      </section>
   <section className="F-AC about-section-3">
     <div className="about-section-3-img-container">
          <img src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
     </div>
     <div className="FC-AC about-section-content-container">
          <div className="content-inner-container-1">
            <h2>A litte about my skill sets</h2>
            <p>I began my journey as a developer nearly two years ago, I've mostly worked at startups and have collaberated with a variety of talented people to create web applications products for both businsess and consumer use.</p>
            <p>In my time as a developer, I have gained the neccesary skills create responsive websites that are fast, user friendly, and built with best code practices. My main area of expertise is in front-end development, HTML, CSS, JS, ReactJS. I have used a variety of resources that collaborate with the coding interactive layouts.  </p>
            <p>If you're looking for a developer to
            add to your team, I'd love to hear from you!</p>
          </div>
          <div className=" F-AC content-inner-button-container">
            <Link to="/projects">see more</Link>
          </div>

        <div className="F-AC  content-inner-skill-view">
          <div className="FC-AC inner-skill-view">
            <span>9/10</span>
            <h4>Front-end</h4>
          </div>
          <div className="FC-AC inner-skill-view">
          <span>6/10</span>
            <h4>Back-end</h4>
          </div>
          <div className="FC-AC inner-skill-view">
          <span>9/10</span>
            <h4>ReactJS</h4>
          </div>
        </div>
     </div>
   </section>
   <section>
     
   </section>
    </div>
    <FooterComponent />
    </>
  );
}

export default AboutPage;
