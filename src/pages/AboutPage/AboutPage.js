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

  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="about-Page" style={darkMode ? darkModeStyles : {}}>
      <NavbarComponent />
      <MobileNavigation />
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
            to UI/UX details and high quality and maintainable code. My current
            toolset includes React, Redux, Hooks, and other various frameworks,
            libraries, and technologies related to them. Open to evolving in
            Java, Python, and many more. if you're looking for a developer to
            add to your team, I'd love to hear from you!
          </p>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default AboutPage;
