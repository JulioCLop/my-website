import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/Theme.Contexts";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import DarkModeAlert from "../UI/Alert/DarkModeAlert";
import classes from "./DarkMode.module.css";

const DarkMode = () => {
  // const theme = useTheme();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [showMode, setShowMode] = useState({
    show: false,
    mode: "",
  });

  const darkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
    if (darkMode) {
      showModeAlert(true, "light mode");
    } else if (!darkMode) {
      showModeAlert(true, "dark mode");
    }
  };
  const showModeAlert = (show = false, mode = "") => {
    setShowMode({ show, mode });
  };

  return (
    <div className={classes.darkMode}>
      <ul className={classes["darkMode-container"]}>
        <li>
          {showMode.show && (
            <DarkModeAlert
              {...showMode}
              removeAlert={showModeAlert}
              className={darkMode && classes["p-darkMode"]}
            />
          )}
        </li>
        <li>
          <IconButton sx={{ ml: 1 }} onClick={darkModeHandler} color="primary">
            {darkMode ? (
              <Brightness7Icon sx={{ color: "white" }} />
            ) : (
              <Brightness4Icon sx={{ color: "hsl(209, 34%, 30%)" }} />
            )}
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default DarkMode;
