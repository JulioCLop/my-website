import React from "react";


import "./ProjectsContainer.css";

const ProjectsContainer = (props) => {
  const { filter } = props;
  return (
    <>
      {filter.map( project => (
      
        <div className="project-card">
        <img src="https://images.unsplash.com/photo-1645318588650-f0fb322cd740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="img"/>
          <h1>{project.projectName}</h1>
          <p>{project.projectText}</p>
          <div className="project-card_flex_container">
            <div>
              <small>{project.projectLanguage}</small>
            </div>
            <div>
              <a href="www.github.com">Github Repo</a>
            </div>
          </div>
        </div>
      ))}
     
    </>
  );
};

export default ProjectsContainer;
