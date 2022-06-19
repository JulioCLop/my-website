import React, { useContext, useState} from "react";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import NavbarLogo from "../assets/LoadingPage/newLogoNoBackround.png";

import { ThemeContext } from "../context/Theme.Contexts";

import DarkMode from "./DarkMode";

import {  useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import classes from "./NavbarConponent.module.css";



const NavbarComponent = () => {
  const location = useLocation();
  const theme = useTheme();
  const { sideNav, setSideNav } = useContext(ThemeContext);
  const [activeBtn, setActiveBtn] = useState(false);
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  let activeStyle = {
    color: "gray",
    margin: '12px',
  
  };

 const activeLocation = () => {
  const path = location.pathname.toString();
   const pathName =  path.split('').splice(2)
   const pathNameCase = path.split('').splice(1)[0].toUpperCase();
    return pathNameCase + pathName.join('')
 };

  const clickHandler = () => {
    setActiveBtn( prevActiveBtn => !prevActiveBtn)
    setSideNav(prevSideNav => !prevSideNav)
   
  };


  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav>
          <div className={classes["navbar-container-1"]}>
            <Link to="/">
              <img src={NavbarLogo} alt="logo" />
            </Link>
          </div>
          <div className={`${classes["navbar-container-2"]} ${!matchesMD ? classes["navbar-mobile"]: ''}`}>
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
                    Projects
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
      <DarkMode/>
        </nav>
     <h1 className={classes.activePage}>{activeLocation()} page</h1>
      </header>
      
      <div />
    </React.Fragment>
  );
}

export default React.memo(NavbarComponent);
