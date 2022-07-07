import React, { useState } from "react";

import { projectLinks } from "../../module/projectLinks";

import classes from "./SectionThree.module.css";

import { FiGithub } from "react-icons/fi";

import Card from "../UI/Card/Card";

const SectionThree = ({
  allCategories,
  setProjects,
  projects,
  isProjects,
  categories,
}) => {
  const [value, setValue] = useState(0);
  const [seeMore, setSeeMore] = useState(true);

  const filterItems = (type) => {
    if (type === "all") {
      setProjects(projects);
      setSeeMore(true);
      return;
    }
    const newItems = projects.filter((item) => item.type === type);
    setProjects(newItems);
  };

  const listButtonHandler = (item, index) => {
    filterItems(item);
    setValue(index);
  };
  const seeMoreFunction = seeMore ? isProjects.slice(0, 5) : isProjects;

  return (
    <section className={classes["section-three_project"]}>
      <div className={classes["section-three_project_header"]}>
        <h2>Projects List</h2>
        <hr />
      </div>
      <div className={classes.listProjects}>
        {allCategories.map((item, index) => {
          return (
            <React.Fragment>
              <button
                className={`${classes.btn} ${
                  index === value && classes["active-btn"]
                } `}
                onClick={() => listButtonHandler(item, index)}
                type="button"
                key={index}
              >
                {item}
              </button>
            </React.Fragment>
          );
        })}
      </div>
      
      <main  className={classes.projectsContainer} >
      <div className={classes.projects}>
        {seeMoreFunction.map((items,index) => {
          const {projectName, projectLanguage, projectId, projectImage, projectText} = items;
          return (
           <Card
            image={projectImage}
            id={projectId}
            key={index}
             name={projectName}
             content={ projectText}
             language={ projectLanguage}
             links={projectLinks}
             />
          );
        })}
      </div>
      </main>
       {isProjects.length >= 4 && (
          <button
            className={classes.seeMoreBtn}
            onClick={() => setSeeMore((prev) => !prev)}
          > 
            {seeMore ? "Show more" : "Show less"}
          </button>
        )}
    </section>
  );
};

export default SectionThree;
