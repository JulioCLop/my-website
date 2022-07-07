import React from "react";

import classes from "./Work_Containers.module.css";

const WorkContainers = (props) => {
  const { srcImage, link, name, position } = props;

  return (
    <div className={classes["work-job-containers"]}>
      <div className={classes.backgroundAnimation} />
      <img
        src={srcImage}
        style={{ background: "white" }}
        width="175"
        alt={props.alt}
      />
      <section className={classes.workCardSection}>
        <div>
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
        <a href={link}>View</a>
      </section>
    </div>
  );
};

export default React.memo(WorkContainers);
