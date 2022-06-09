import React from 'react';

import LinkButton from '../UI/Button/Link-Button';
import Card from '../UI/Card/Card';

import classes from './Work_Containers.module.css';

const  WorkContainers = props => {
  
const {srcImage, link} = props;

  return (
   
    <Card className={classes["work-job-containers"]}>
    <img src={srcImage} style={{background: 'white'}} width='175' alt={props.alt}/>
    <span>
    <a className={classes["a-1"]} href={link}>View</a>
    </span>
    </Card>
   
  );
};

export default React.memo(WorkContainers);
