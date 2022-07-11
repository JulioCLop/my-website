import React, {useContext} from "react";

import { ThemeContext } from "../../context/Theme.Contexts";



import classes from "./FooterComponent.module.css";

import Logo from "../../assets/LoadingPage/newLogoNoBackround copy.png";



const FooterComponent = () => {
  const {darkMode} = useContext(ThemeContext);
  
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };


  return (
    <footer  className={`${classes.footer} ${darkMode && classes['darkMode-footer']}`}>
      <div className={classes.footContainer}>
        <div className={classes["footContainer-image"]}>
          <div className={classes["foot-image"]}>
            <img  className={classes.logo} src={Logo} width="130" alt="logo" />
          </div>
        </div>
        <div className={classes.footContainer2}>
          <div className={classes["foot-content"]}>
            <p>
              Copyright {`${"\u00A9"}`} <span>{getYear()}</span> Julio Lopez.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(FooterComponent);
