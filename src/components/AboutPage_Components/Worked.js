import React, {useContext} from 'react';

import { ThemeContext } from '../../context/Theme.Contexts';


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
     <WorkContainers position="React Developer" name='Halen' srcImage='https://gethalen.com/images/logo.png' link='https://gethalen.com/' alt="halen"/>
     <WorkContainers position="Full Stack Developer" name='Orlando Spencer' srcImage='https://orlandospencer.com/media/cache/73/04/73042ae0f959b479bc9fbf6dd7bfb3ee.jpg' link='https://orlandospencer.com/' alt='orlando spencer'/>
     <WorkContainers position="Front-end Developer" name='CCS Supply Store' srcImage='https://couponseeker.com/storage/CCS-SUPPLY-STORE.jpg' link='https://ccssupplystore.com/' alt="ccs supply store"/>
    </div>
    </div>
  </section>
  )
}

export default Worked;
