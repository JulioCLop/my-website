import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../../context/Theme.Contexts";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import "./MobileNavigation.css";



const MobileNavigation = () => {
  const { sideNav, setSideNav } = useContext(ThemeContext);
  const {disabled,setDisabled} = useState(false);

  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  let activeStyle = {
    color: "gray",
    textDecoration: "line-through",
  };

  const closeHanlder = () => {
    setSideNav(false);
  };

  if (!matchesMD) {
    setSideNav(false);
  };

  return (
    <>
      {sideNav && matchesMD ? (
        <>
          <div className="mobile-background" />
          <nav className="mobile-nav">
            <ul className="mobile-nav_items">
              <li className="mobile-nav_item">
                <NavLink
                style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                 className="mobile-nav_link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="mobile-nav_item">
                <NavLink
                style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                 className="mobile-nav_link" to="/about"
               
               
                 >
                  About
                </NavLink>
              </li>
              <li className="mobile-nav_item">
                <NavLink
                style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                 className="mobile-nav_link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="mobile-nav_item">
                <NavLink
                style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                 className="mobile-nav_link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default MobileNavigation;
