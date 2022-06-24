import React, { useContext, useState, useEffect } from "react";

import { ThemeContext } from "../../context/Theme.Contexts";

import projects from "../../module/project";

import classes from "./ProjectPage.module.css";
import MainHomePage from "../HomePage/MainHomePage";
import SectionOne from "../../components/ProjectPage_Components/SectionOne";
import SectionTwo from "../../components/ProjectPage_Components/SectionTwo";
import SectionThree from "../../components/ProjectPage_Components/SectionThree";


const allCategories =['all',...new Set(projects.map( item=> item.type)) ] 

console.log(allCategories)


const ProjectPage = () => {
  const { darkMode, darkModeStyles } = useContext(ThemeContext);
  const [isProjects, setProjects] = useState([]);
  const [projectLength, setProjectLength] = useState(true);
  const [categories, setCategories] = useState(allCategories);

  useEffect(() => {
    setProjects(projects);
  }, []);

  
  return (
    <MainHomePage>
      <div style={darkMode ? darkModeStyles : {}}>
        <div className={classes["project-page"]}>
          <SectionOne />
          <SectionTwo />
          <SectionThree
            projects={projects}
            setProjects={setProjects}
            isProjects={isProjects}
            categories={categories}
            setProjectLength={setProjectLength}
            projectLength={projectLength}
            allCategories={allCategories}
          />
        </div>
      </div>
    </MainHomePage>
  );
};

export default React.memo(ProjectPage);
