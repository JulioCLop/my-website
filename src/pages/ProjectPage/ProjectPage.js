import React from "react";

import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";

import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div>
      <NavbarComponent />
      <MobileNavigation />
      <div className="project-page">
        <h1>ProjectPage</h1>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ProjectPage;
