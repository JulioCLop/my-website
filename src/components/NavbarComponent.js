import React, { useContext, useState } from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import NavbarLogo from "../assets/LoadingPage/newLogoNoBackround.png";

import { ThemeContext } from "../context/Theme.Contexts";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import Toggle from "react-toggle";

import "./NavbarConponent.css";

const NavbarComponent = () => {
  const theme = useTheme();

  const { sideNav, setSideNav } = useContext(ThemeContext);
  const [activeBtn, setActiveBtn] = useState(false);
  const { setDarkMode} = useContext(ThemeContext);
 

  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  let activeStyle = {
    color: "gray",
    textDecoration: "line-through",
  };

  const clickHandler = () => {
    setActiveBtn(false);
    setSideNav(true);
  };

  const buttonActive = () => {
    setActiveBtn(true);
  };

  const buttonInactive = () => {
    setActiveBtn(false);
  };

  const darkModeHandler = (e) => {
    const checked = e.target.checked;
    setDarkMode(checked);
  };

  return (
    <>
      <header>
        <nav id="nav-query">
          <div className="navbar-container-1">
            <Link to="/">
              <img src={NavbarLogo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-container-2">
            {!sideNav && !matchesMD ? (
              <div
                onClick={clickHandler}
                onMouseLeave={buttonInactive}
                onMouseEnter={buttonActive}
                className={`toggle-button  ${activeBtn && "active"} ${
                  !activeBtn && "not-active"
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              ""
            )}
            {(!sideNav && matchesMD) || (sideNav && matchesMD) ? (
              <ul className="navbar-inner-ul">
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="nav-btn"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-btn"
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
                    className="nav-btn"
                    to="/projects"
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-btn"
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
          <div className="moon-icon">
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
      <div id="margin" />
    </>
  );
}

export default NavbarComponent;
