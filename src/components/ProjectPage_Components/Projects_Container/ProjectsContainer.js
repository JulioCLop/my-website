import React from "react";

import LinkButton from '../../UI/Button/Link-Button';
import Card from "../../UI/Card/Card";


import classes from "./ProjectsContainer.module.css";

const ProjectsContainer = (props) => {

  const { projects } = props;



  return (
    <>
      {projects.map( project => (
        <Card key={`${Math.random()* 100}`} className={classes["project-card"]}>
        <img src="https://images.unsplash.com/photo-1645318588650-f0fb322cd740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="img"/>
          <h1>{project.projectName}</h1>
          <p>{project.projectText}</p>
          <div className={classes["project-card_flex_container"]}>
            <div>
              <small>{project.projectLanguage}</small>
            </div>
            <div>
              <LinkButton href="www.github.com">Github</LinkButton>
            </div>
          </div>
        </Card>
      ))}
     
    </>
  );
};

export default ProjectsContainer;
