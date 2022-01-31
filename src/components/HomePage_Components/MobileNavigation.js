import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/Theme.Contexts";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import "./MobileNavigation.css";

const MobileNavigation = () => {
  const { sideNav, setSideNav } = useContext(ThemeContext);

  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

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
          <div onClick={closeHanlder} className="mobile-background" />
          <nav onClick={closeHanlder} className="mobile-nav">
            <ul className="mobile-nav_items">
              <li className="mobile-nav_item">
                <Link className="mobile-nav_link" to="/">
                  Home
                </Link>
              </li>
              <li className="mobile-nav_item">
                <Link className="mobile-nav_link" to="/about">
                  About
                </Link>
              </li>
              <li className="mobile-nav_item">
                <Link className="mobile-nav_link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="mobile-nav_item">
                <Link className="mobile-nav_link" to="/contact">
                  Contact
                </Link>
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
