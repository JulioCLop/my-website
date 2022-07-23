import React, {useContext} from 'react';
import { ThemeContext } from '../../context/Theme.Contexts';

import MainView from '../../components/UI/MainView/MainView';
import classes from './MainHomePage.module.css';


const MainHomePage = (props) => {
const {darkMode, darkModeStyles} = useContext(ThemeContext);

  return (
  <React.Fragment>
      <MainView className={classes["main-view"]} darkMode={darkMode && `${classes["main-view"]} `} style={darkMode ? darkModeStyles : {}} >
      {props.children}
      </MainView>
  </React.Fragment>
  )
}

export default React.memo(MainHomePage);
