import React, {useContext} from 'react';

import { ThemeContext } from '../../context/Theme.Contexts';

import NavbarComponent from '../../components/NavbarComponent';
import MobileNavigation from '../../components/HomePage_Components/MobileNavigation';
import MainView from '../../components/UI/MainView/MainView';
import FooterComponent from '../../components/FooterComponent';

import classes from './MainHomePage.module.css';


const MainHomePage = (props) => {
const {darkMode, darkModeStyles} = useContext(ThemeContext);



  return (
  <React.Fragment>
     <NavbarComponent  />
      <MobileNavigation  /> 
      <MainView darkMode={darkMode && `${classes["main-view"]} `} style={darkMode ? darkModeStyles : {}} >
      {props.children}
      </MainView>
      <FooterComponent />
  </React.Fragment>
  )
}

export default MainHomePage;
