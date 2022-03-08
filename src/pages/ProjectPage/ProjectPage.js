import React, { useContext } from "react";

import { ThemeContext } from "../../context/Theme.Contexts";

import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";

import Laptop  from '../../assets/ProjectPage/projectLaptop.png';
import TTT from '../../assets/ProjectPage/TicTacToe.png';

import "./ProjectPage.css";
import ProjectsContainer from "../../components/ProjectPage_Components/Projects_Container/ProjectsContainer";

const ProjectPage = () => {
  const { darkMode, darkModeStyles } = useContext(ThemeContext);


  return (
    <div style={darkMode ? darkModeStyles : {}}>
      <NavbarComponent />
      <MobileNavigation />
      <div className="project-page">
        <section className="section-one_project">
        <div className="background-design"></div>
          <h2>Projects</h2>
          <h1>Since Beginning <span>My Journey</span></h1>
          <div className="section-one_project-grid">
          <div className="section-one_project-content">
          <p>Go ahead, check out my projects below or visit my Github Repo and check out my previous projects. Building Javascript applications has given me the ability to function independantly, and able to deliver fast, optimized, scalable apps. I'm currenly working on creating a Ecommerce website which will provide the user an exclusive experience. As I develop, my main focus will be on fast, elegant and accessible user experience.  </p>
          <div className="section-one_project-btns">
          <a>View Current Project</a>
          <a>View Github Repo</a>
          </div>
          </div>
          <div className="section-one_project-img">
            <img  src={Laptop} alt="project image"/>
          </div>
          </div>
        </section>
        <section className="section-two_project">
        <h2>Most Recent <span>projects</span></h2>
        <div className="section-two_project-cards">
          <div className="section-two_project-card">
          <img src={TTT}/>
            <div className="section-two_project-card-content">
            <h4>Tic, Tac, Toe App</h4>
            <p>HTML, CSS, JS</p>
            <a href="">view</a>
            </div>
          </div>
          <div className="section-two_project-card">
          <img src="https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGV4cGVuc2UlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
            <div className="section-two_project-card-content">
            <h4>Expense App</h4>
            <p>ReactJS</p>
            <a href="">View</a>
            </div>
          </div>
        </div>
        </section>
        <section className="section-three_project">
        <div className="section-three_project_header">
        <h2>Project</h2>
        </div>
      
      <div className="section-three_project_search" >
      <div>
        <label>Search Project</label>
        <input/>
      </div>
      </div>
      <main className="section-three_project_inner_main">
        <div className="section-three_project_cards_container" >
        <ProjectsContainer/>
        </div>
      </main>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ProjectPage;
