import React, {useEffect, useState} from "react";

import LinkButton from '../../UI/Button/Link-Button';
import Card from "../../UI/Card/Card";


import classes from "./ProjectsContainer.module.css";

const ProjectsContainer = (props) => {
  const [active, setActive] = useState(false);
  const [errorImage, setErrorImage ] = useState(false);

  const { projects } = props;

  const errorImageContent = (
    <div className={classes['error-images']}><h1>No Image Provided</h1></div>
  )
  

useEffect(()=> {
  const random = Math.floor(Math.random() * 2)+ 1;
  fetch('https://api.unsplash.com/photos/?client_id=LCFbGcyg3SjhCVRZl-9zxfL9glRT2PMEmgPM_u6kbMQ')
  .then(resp => {
    if(resp.status === 200){
      console.log(resp.status)
      return  resp.json();
    }
    setErrorImage(true)
  })
  .then(data => setActive(data[random].urls.thumb))
  return ()=>{
      setErrorImage(false)
  }
},[]);


  return (
    <React.Fragment>
      {projects.map( project => (

        <Card  key={`${Math.random()* 100}`} className={classes["project-card"]}>
             {errorImage && errorImageContent}
        <img  src={active} alt="img"/>
          <h1>{project.projectName}</h1>
          <p>{project.projectText}</p>
          <div className={classes["project-card_flex_container"]}>
            <div>
              <small>{project.projectLanguage}</small>
            </div>
            <div className={classes['btn-container']}>
              <LinkButton href="www.github.com">Github</LinkButton>
            </div>
          </div>
        </Card>
       
      ))}
     
    </React.Fragment>
  );
};

export default ProjectsContainer;
