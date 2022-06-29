import React, { useState } from "react";

import classes from "./SectionThree.module.css";

import { FiGithub } from "react-icons/fi";

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
      <main className={classes.projects}>
        {seeMoreFunction.map((items) => {
          return (
            <React.Fragment>
            <div className={classes.mainProjectContainer}>
              <div className={classes.containerOne}>
                <img
                  src={require(`../../assets/ProjectPage/VBC-${items.projectId}.png`)}
                  alt={items.projectName}
                />
              </div>
              <div className={classes.containerTwo}>
                <div className={classes.innerContainerOne}>
                  <h3>{items.projectName}</h3>
                  <hr />
                </div>
                <div className={classes.innerContainerTwo}>
                  <p>{items.projectText}</p>
                  <small>{items.projectLanguage}</small>
                  <a target="_blank" rel="noreferrer" href={items.projectLink}>
                    <FiGithub className={classes.icon} />
                  </a>
                </div>
              </div>
             
            </div>
            <hr style={{width: '70%', margin: '0px  auto 20px auto'}}  />
            </React.Fragment>
          );
        })}
        {isProjects.length >= 4 && (
          <button
            className={classes.seeMoreBtn}
            onClick={() => setSeeMore((prev) => !prev)}
          >
            {seeMore ? "Show more" : "Show less"}
          </button>
        )}
      
      </main>
    </section>
  );
};

export default SectionThree;
