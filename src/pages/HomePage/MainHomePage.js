import React, {useContext} from 'react';

import { ThemeContext } from '../../context/Theme.Contexts';

import NavbarComponent from '../../components/Navigation/NavbarComponent';
import MainView from '../../components/UI/MainView/MainView';
import FooterComponent from '../../components/Footer/FooterComponent';

import classes from './MainHomePage.module.css';


const MainHomePage = (props) => {
const {darkMode, darkModeStyles} = useContext(ThemeContext);




  return (
  <React.Fragment>
     <NavbarComponent  />
      <MainView className={classes["main-view"]} darkMode={darkMode && `${classes["main-view"]} `} style={darkMode ? darkModeStyles : {}} >
      {props.children}
      </MainView>
      <FooterComponent  />
  </React.Fragment>
  )
}

export default React.memo(MainHomePage);
