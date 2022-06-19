import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import HeadShot from '../../assets/AboutPage/headshot.jpg';


import { ThemeContext } from '../../context/Theme.Contexts';

import classes from './ContainerInto.module.css';

export const ContainerIntro = () => {
    const {darkMode} = useContext(ThemeContext)
  return (
    <section style={darkMode ? {color: 'white'} : {color: 'black'}} className={classes["section-one-about"]}>
    <div className={classes.containerOne}>
    <article>
        <img className={classes.containerIntroImage} src={HeadShot} width='310' height='417' alt='head shot'  />
    </article>
    </div>
    <div className={classes.containerTwo}>
    <article>
       <div className={classes["inner-container"]}>
            <h1>A Little More About Me</h1>
            <div className={classes.underline}><span style={darkMode ? {backgroundColor: 'white'}: {}} className={classes.underlineBox}></span></div>
       </div>
       <div className={classes["inner-container"]}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus explicabo alias quidem. Minus iusto odit incidunt? Qui a cum, eos, dolor consequuntur, nesciunt nisi et tempora deserunt quis maiores laboriosam.</p>
       </div>
       <div className={classes["inner-container"]}>
            <Link style={darkMode ? {color: 'white'}:{}}  to='/contact'>
            <div className={classes['btn-background']} />
            Lets fuel your creativity
            </Link>
       </div>
    </article>
    </div>
  </section>
  )
}


// <div className={classes["section-one-div2"]}>
// <h3>
//   <Link style={darkMode ? {color: 'white'} : {color: 'black'}} to="/contact">
//   <div className={classes.animation}/>
//   Let’s fuel your creativity!
//   </Link>
// </h3>
// </div>