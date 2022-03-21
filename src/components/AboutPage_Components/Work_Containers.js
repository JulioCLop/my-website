import React from 'react';

import classes from './Work_Containers.module.css';

const  WorkContainers = (props) => {
const {srcImage, link} = props;

  return (
    <div className={classes["work-job-containers"]}>
    <img src={srcImage} style={{background: 'white'}} width='175' alt="Halen Logo"/>
    <span>
    <a href={link}>VIEW COMPANY SITE</a>
    </span>
    </div>
  );
};

export default WorkContainers;
