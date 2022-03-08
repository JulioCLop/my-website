import React from 'react';

import './Work_Containers.css';

const  WorkContainers = (props) => {
const {srcImage, link} = props;

  return (
    <div>
    <img src={srcImage} width='175' alt="Halen Logo"/>
    <span>
    <a href={link}>VIEW COMPANY SITE</a>
    </span>
    </div>
  );
};

export default WorkContainers;
