import React, {useContext} from 'react';

import { ThemeContext } from '../../context/Theme.Contexts';
import { useLocation } from "react-router-dom";

import NavbarComponent from '../../components/NavbarComponent';
import MobileNavigation from '../../components/MobileNavigation';
import MainView from '../../components/UI/MainView/MainView';
import FooterComponent from '../../components/FooterComponent';

import classes from './MainHomePage.module.css';


const MainHomePage = (props) => {
const {darkMode, darkModeStyles} = useContext(ThemeContext);
const location = useLocation();


const activeLocation = () => {
  const path = location.pathname.toString();
   const pathName =  path.split('').splice(2)
   const pathNameCase = path.split('').splice(1)[0].toUpperCase();
    return pathNameCase + pathName.join('')
 };

  return (
  <React.Fragment>
     <NavbarComponent  />
      <MobileNavigation  /> 
      <h1 className={classes.activePage}>{`/${activeLocation()}`} page</h1>
      <MainView className={classes["main-view"]} darkMode={darkMode && `${classes["main-view"]} `} style={darkMode ? darkModeStyles : {}} >
      {props.children}
      </MainView>
      <FooterComponent />
  </React.Fragment>
  )
}

export default React.memo(MainHomePage);
