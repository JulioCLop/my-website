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
    <LinkButton className={classes["a-1"]} href={link}>VIEW COMPANY SITE</LinkButton>
    </span>
    </Card>
   
  );
};

export default WorkContainers;
