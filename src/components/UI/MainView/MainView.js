import React, {useContext} from 'react';
import { ThemeContext } from '../../../context/Theme.Contexts';


import classes from './MainView.module.css';

const  MainView = (props) => {

  const {darkModeStyles, darkMode, lightModeStyles } = useContext(ThemeContext);

  return (
    <div style={darkMode ? darkModeStyles : lightModeStyles  } className={`${classes['main-view']} ${props.darkMode} `}>
       {props.children}  
    </div>
  )
};


export default React.memo(MainView);