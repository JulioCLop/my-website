import React, { useState} from "react";


import Card from "../../UI/Card/Card";

import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from '@mui/icons-material/Preview';

import classes from "./ProjectsContainer.module.css";

const ProjectsContainer = ({ projects, newList, projectLength }) => {
  
  const images = (imageid) => {
    const newImage = `/VBC-${imageid}.png`;
    return newImage;
  };


  return (
    <React.Fragment>
      {newList.map((project) =>{ 

        return (

        <Card
          key={`${Math.random() * 100}`}
          className={classes["project-card"]}
        >
           <img
            src={images(project.projectId)}
            alt={project.projectName}
          />
          <div className={classes.MainContent}>
                <div className={classes.MainContent1}>
                <h1>{project.projectName}</h1>
                <p>{project.projectText}</p>
                </div>
                <div className={classes.MainContent2}>
                    <p>{project.projectLanguage}</p>
                    <div>
                     <a href={project.projectLink}><GitHubIcon className={classes.icon}/></a>  
                     <a href={project.projectUrl}><PreviewIcon className={classes.icon}/></a>  
                    </div>
                 </div>
            </div>
        </Card>
        )
      })}
     
    </React.Fragment>
  );
};

export default React.memo(ProjectsContainer);
