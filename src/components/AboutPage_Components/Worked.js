import React, {useContext} from 'react';

import { ThemeContext } from '../../context/Theme.Contexts';
import { jobList } from '../../module/job-list';
import WorkContainers from '../AboutPage_Components/Work_Containers';
import classes from './Worked.module.css';


const Worked = () => {
    const {darkMode} = useContext(ThemeContext);

  return (
    <section   className={classes["work-section"]}>
    <div className={classes.workSectionContainer}>
    <div className={classes["work-header"]}>
      <h3>Where I've worked</h3>
    </div>
    <div className={classes["work-main-job-containers"]}>
    {jobList.map(job => {
      const {id, company, position, imageUrl, link} = job;
      return(
     <WorkContainers key={id} id={id} position={position} company={company} imageUrl={imageUrl} link={link} alt={company}/>
      )
    })}
  
    </div>
    </div>
  </section>
  )
}

export default Worked;
