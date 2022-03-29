import React, { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import NavbarLogo from "../assets/LoadingPage/newLogoNoBackround.png";

import { ThemeContext } from "../context/Theme.Contexts";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import Toggle from "react-toggle";
import classes from "./NavbarConponent.module.css";
import  "./toggle.css";




const NavbarComponent = () => {
  const theme = useTheme();
  const { sideNav, setSideNav } = useContext(ThemeContext);
  const { setDarkMode} = useContext(ThemeContext);
  const [activeBtn, setActiveBtn] = useState(false);
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  let activeStyle = {
    color: "gray",
    textDecoration: "line-through",
  };

  const clickHandler = () => {
    setActiveBtn( prevActiveBtn => !prevActiveBtn)
    setSideNav(prevSideNav => !prevSideNav)
   
  };

  const darkModeHandler = (e) => {
    const checked = e.target.checked;
    setDarkMode(checked);
    return checked;
  };

  useEffect(()=> {
    setDarkMode(prevMode => prevMode);
  },[])
  
  return (
    <>
      <header className={classes.header}>
        <nav id={classes["nav-query"]}>
          <div className={classes["navbar-container-1"]}>
            <Link to="/">
              <img src={NavbarLogo} alt="logo" />
            </Link>
          </div>
          <div className={classes["navbar-container-2"]}>
            {!sideNav && !matchesMD || sideNav ? (
              <div
                onClick={clickHandler}
                className={`${classes["toggle-button"]}  ${activeBtn ? classes.active : classes["not-active"] } `}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              ""
            )}
            {(!sideNav && matchesMD) || (sideNav && matchesMD) ? (
              <ul className={classes["navbar-inner-ul"]}>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className={classes["nav-btn"]}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={classes["nav-btn"]}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className={classes["nav-btn"]}
                    to="/projects"
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={classes["nav-btn"]}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
          <div className={`${classes["moon-icon"]}`}>
          <Toggle
             icons={{
               checked: <Brightness3Icon style={{fontSize: '1rem',heigth:'100%'}}/>,
               unchecked:<WbSunnyIcon style={{fontSize: '1rem',heigth:'100%'}}/>,
             }}
             onChange={darkModeHandler}
           />
          </div>
        </nav>
      </header>
      <div id={classes.margin} />
    </>
  );
}

export default NavbarComponent;
