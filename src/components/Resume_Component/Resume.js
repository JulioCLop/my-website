import React from 'react';

import ResumeImage from '../../assets/Resume_2022.pdf';

import classes from './Resume.module.css';


const Resume = ({onMouseLeave, viewPdf}) => {
  return (
    <div onMouseLeave={onMouseLeave} className={classes.resume}>
   <embed   
    type="application/pdf"
    height="600px"
    title='resume'
    width="700px"
      src={ResumeImage} 
      > 
      </embed>
    </div>
  )
}
export default React.memo(Resume);