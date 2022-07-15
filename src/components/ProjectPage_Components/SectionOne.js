import React from "react";

import classes from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <section className={classes["section-one_project"]}>
      <div className={classes.sectionOneProjectImageContainer}>
        <div className={classes.sectionOneImage} />
        <div className={classes.sectionOneContent}>
          <h1>Since Beginning My Journey</h1>
          <p>
            Building React applications has given me the ability to function
            independantly, and able to deliver fast, optimized, scalable apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
