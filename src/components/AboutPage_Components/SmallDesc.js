import React from "react";

import classes from './SmallDesc.module.css';
import {RiLayout5Line} from 'react-icons/ri';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {BiCodeBlock} from 'react-icons/bi';

const SmallDesc = () => {
  return (
    <section className={classes.smallDesc}>
    <div className={classes.smallDescContainer}>
    <div className={classes.smallDescContainers}>
  <div className={classes.iconContainers}>
  <RiLayout5Line className={classes.websiteIcon}/>
  </div>
        <div>
          <h3>Web Design</h3>
        </div>
        <div>
            <p>Crafting company brand identities that communicate and connect with all types of users.</p>
        </div>
      </div>
      <div className={classes.smallDescContainers}>
      <div className={classes.iconContainers}>
  <FaChalkboardTeacher className={classes.websiteIcon}/>
  </div>
        <div>
          <h3>Web Accessibility</h3>
        </div>
        <div>
        <p>Creating websites that are free of any barriers that will prevent users access or interaction to any website.</p>
        </div>
      </div>
      <div className={classes.smallDescContainers}>
      <div className={classes.iconContainers}>
  <BiCodeBlock className={classes.websiteIcon}/>
  </div>
        <div>
          <h3>Efficiency</h3>
        </div>
        <div>
        <p>Taking measures to achieve a higher level of effectiveness and usability for all users. </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SmallDesc;
