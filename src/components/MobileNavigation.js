import React, { useContext, useState } from "react";


import { NavLink } from "react-router-dom";

import { ThemeContext } from "../context/Theme.Contexts";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import classes from  "./MobileNavigation.module.css";



const MobileNavigation = () => {
  const { sideNav, setSideNav } = useContext(ThemeContext);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  let activeStyle = {
    textDecoration: 'underline',
  };
  if (!matchesMD) {
    setSideNav(false);
  };

  const closeHandler = () => {
    setSideNav(prev=> !prev);
    
  }

  

  

  return (
    <React.Fragment>
      {sideNav && matchesMD ? (
        <React.Fragment>
          <nav  className={`${classes["mobile-nav"]} ${sideNav && classes['open-mobile-nav']}`}>
            <ul className={classes["mobile-nav_items"]}>
              <li className={classes["mobile-nav_item"]}>
                <NavLink
                style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                 className={classes["mobile-nav_link"]} to="/">
                  Home
                </NavLink>
              </li>
              <li className={classes["mobile-nav_item"]}>
                <NavLink
                style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                 className={classes["mobile-nav_link"]} to="/about"
               
               
                 >
                  About
                </NavLink>
              </li>
              <li className={classes["mobile-nav_item"]}>
                <NavLink
                style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                 className={classes["mobile-nav_link"]} to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className={classes["mobile-nav_item"]}>
                <NavLink
                style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                 className={classes["mobile-nav_link"]} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div onClick={closeHandler} className={classes["mobile-background"]} />
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default React.memo(MobileNavigation);
