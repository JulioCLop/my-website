import React, { useState, useContext} from "react";

import { ThemeContext } from "../../../context/Theme.Contexts";

import Card from "../../UI/Card/Card";

import GitHubIcon from '@mui/icons-material/GitHub';


import classes from "./ProjectsContainer.module.css";


const ProjectsContainer = ({projects} ) => {
  const {darkMode} = useContext(ThemeContext)
  const [active, setActive] = useState(false);
  const [errorImage, setErrorImage ] = useState(false);
 

  const errorImageContent = (
    <div className={classes['error-images']}><h1>No Image Provided</h1></div>
  )
  
  const images  = (imageid) => {
    const newImage = `/VBC-${imageid}.png`;

    console.log(newImage)

    return newImage;
  }

  return (
    <React.Fragment>
      {projects.map( project => (
        <Card  key={`${Math.random()* 100}`} className={classes["project-card"]}>
             {errorImage && errorImageContent}
        <img style={darkMode ? {filter: 'grayscale(45%)'}: {}} src={images(project.projectId)}  alt={project.projectName}/>
          <h1>{project.projectName}</h1>
          <p>{project.projectText}</p>
          <div className={classes["project-card_flex_container"]}>
            <div>
              <small>{project.projectLanguage}</small>
            </div>
            <div className={classes['btn-container']}>
            <a className={`${classes.updatedLinkBtn}`} href={project.projectLink}><GitHubIcon className={classes.icon}/></a>
            </div>
          </div>
        </Card>
       
      ))}
     
    </React.Fragment>
  );
};

export default ProjectsContainer;
