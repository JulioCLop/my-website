import React, {useContext} from 'react';
import { ThemeContext } from '../../../context/Theme.Contexts';


import classes from './MainView.module.css';

const  MainView = (props) => {

  const {darkModeStyles, darkMode} = useContext(ThemeContext);

  return (
    <div style={darkMode ? darkModeStyles : props.style } className={`${classes['main-view']} ${props.darkMode}`}>
       {props.children}  
    </div>
  )
};


export default React.memo(MainView);