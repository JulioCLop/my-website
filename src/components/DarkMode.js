import React, {useContext} from 'react';

import { ThemeContext } from '../context/Theme.Contexts';


import { MdBrightness3} from "react-icons/md";
import {FiSun} from "react-icons/fi";

import classes from './DarkMode.module.css';


const DarkMode = () =>  {

    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const darkModeHandler = () => {
        setDarkMode((prevState)=> {
          return !prevState
        });
      };


  return (
    <div className={`${classes["darkmode-icon"]}`}>
    {darkMode ? 
       <MdBrightness3 
          onClick={darkModeHandler} 
          className={classes.brightMode}/>
       :
       <FiSun 
         onClick={darkModeHandler} 
          style={{fontSize: '1.6rem'}}
          className={classes.lightMode}

          />
        }
    </div>
  )
};

export default DarkMode;
