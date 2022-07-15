import React from "react";

import classes from "./CVSection.module.css";

const CVSection = () => {
  return (
    <section className={classes["CV_Section"]}>
      <div className={classes.title}>
        <h3>
          From the great adventures of a <br /> Front-end Developer!
        </h3>
        <p>Check out my resume and lets get in touch!</p>
      </div>
      <div className={classes.btn}>
        <a href="/Resume_2022.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>
      <div className={classes.cvImage} />
    </section>
  );
};
export default CVSection;
