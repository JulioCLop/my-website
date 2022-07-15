import React from "react";

import classes from "./Work_Containers.module.css";

const WorkContainers = ({id, position, company, imageUrl, link}) => {

  return (
    <div className={classes["work-job-containers"]}>
      <div className={classes.backgroundAnimation} />
      <img
        src={imageUrl}
        style={{ background: "white" }}
        width="175"
        alt={company}
      />
      <section className={classes.workCardSection}>
        <div>
          <h3>{company}</h3>
          <p>{position}</p>
        </div>
        <a href={link}>View</a>
      </section>
    </div>
  );
};

export default React.memo(WorkContainers);
