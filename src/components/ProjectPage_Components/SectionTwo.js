import React from 'react';


import classes from './SectionTwo.module.css';

 const SectionTwo = () => {
  return (
    <section className={classes["section-two_project"]}>
   <div className={classes.sectionTwoProjectTitle}>
    <h2>Projects</h2>
    <hr />
    <div className={classes.innerContainerContent}>
    <h3>Collaborated and built projects ideas with teams and individually. </h3>
    <p>I began my journey as a developer nearly two years ago, I've mostly worked at startups and have collaberated with a variety of talented people to create web applications products for both businsess and consumer use. I have created an abundant amount of simple projects that use technologies such as  HTML, CSS, and JS to projects that utilize node.js, PostgreSQL, MongoDB, and React. In conjunction with these technologies, I have understood version control systems like Gitlab and Git. I gained an excellent knowledge of web services and using RESTful APIs.</p>
    </div>
    <div className={classes.projectTypes}>
    <div>
        <p>Language</p>
        <h3>Javascript</h3>
    </div>
    <div>
       <p>Library/Framework</p>
        <h3>React</h3>
    </div>
    <div>
       <p>Back-end</p>
        <h3>Node</h3>
    </div>
    </div>
   </div>
    </section>
  )
}


export default SectionTwo;
