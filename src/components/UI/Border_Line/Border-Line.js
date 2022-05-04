import React, {useContext} from 'react';

import {ThemeContext} from '../../../context/Theme.Contexts';

import NavbarLogo from "../../../assets/LoadingPage/newLogoNoBackround.png";

import classes from './Border-Line.module.css'



const BorderLine = () => {
  const { darkMode } = useContext(ThemeContext);


  return (
    <div id={classes["container"]}>
    <span className={darkMode ? classes["style-a"] : classes["style-b"]}>
    <img  src={NavbarLogo} width="70" height="70" alt='logo' />
    </span>
    </div>
  )
};

export default BorderLine;
