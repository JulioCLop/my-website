import React, { useContext,useRef,useEffect, useState} from "react";


import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import NavbarLogo from "../assets/LoadingPage/newLogoNoBackround.png";

import { ThemeContext } from "../context/Theme.Contexts";

import DarkMode from "./DarkMode";
import {links, socialMedia} from '../module/NavbarData';

import {  useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";



import classes from "./NavbarConponent.module.css";
import { FaBars } from "react-icons/fa";



const NavbarComponent = () => {
 
  const theme = useTheme();
  const { sideNav, setSideNav } = useContext(ThemeContext);
  const [activeBtn, setActiveBtn] = useState(false);
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

useEffect(() => {
 
  const linksHeight = linksRef.current.getBoundingClientRect().height;
  if(showLinks){
    linksContainerRef.current.style.height = `${linksHeight}px`
  }else{
    linksContainerRef.current.style.height = '0px';
  }
 
}, [showLinks])


  let activeStyle = {
    color: "hsl(205, 78%, 60%)",
    fontWeight: 'bold',
  };

 
  const toggleHandler = () => {
    setShowLinks(prev => !prev)
  }


  return (
   <nav>
   <div className={classes["nav-center"]}>
    <div className={classes["nav-header"]}>
    <img src={NavbarLogo} alt='logo'/>
    <button onClick={toggleHandler} className={classes["nav-toggle"]}>
    <FaBars/>
    </button>
    </div>
    <div ref={linksContainerRef} className={classes['links-container']}>
    <ul ref={linksRef} className={classes.links}>
    {links.map(link=>{
      const {id, url, text} = link;
      return (
        <li key={id}>
          <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to={url}>
            {text}
          </NavLink>
        </li>
      )
    })}
    </ul>
     </div>
    <ul className={classes["social-icons"]}>
      {socialMedia.map(eachSocial => {
        const {id, url, icon} = eachSocial;
        return (
          <li key={id}>
            <a target='_blank' rel="noreferrer" href={url}>
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
   </div>
   </nav>
  );
}

export default React.memo(NavbarComponent);
