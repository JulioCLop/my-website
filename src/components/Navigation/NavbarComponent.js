import React, { useContext,useRef,useEffect, useState} from "react";

import { NavLink } from "react-router-dom";
import NavbarLogo from "../../assets/LoadingPage/newLogoNoBackround copy.png";
import { ThemeContext } from "../../context/Theme.Contexts";
import DarkMode from "../Darkmode/DarkMode";
import {links, socialMedia} from '../../module/NavbarData';
import classes from "./NavbarConponent.module.css";
import { FaBars } from "react-icons/fa";



const NavbarComponent = () => {
  const { darkMode } = useContext(ThemeContext)
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
 
}, [showLinks]);

  let activeStyle = {
    color: "hsl(205, 78%, 60%)",
    fontWeight: 'bold',
  };
  const toggleHandler = () => {
    setShowLinks(prev => !prev)
  }

  return (
   <nav  className={`${classes.nav} ${ darkMode && classes['nav-darkmode']}`}>
   <div  className={classes["nav-center"]}>
    <div className={classes["nav-header"]}>
    <img src={NavbarLogo} alt='logo'/>
    <button onClick={toggleHandler} className={classes["nav-toggle"]}>
    <FaBars/>
    </button>
    </div>
    <div ref={linksContainerRef} className={classes['links-container']}>
    <ul ref={linksRef} className={classes.links}>
    {links.map((link, index)=>{
      const {id, url, text} = link;
      return (
        <li id={id} key={index}>
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
      {socialMedia.map((eachSocial,index) => {
        const {id, url, icon} = eachSocial;
        return (
          <li id={id} key={index}>
            <a target='_blank' rel="noreferrer" href={url}>
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
   </div>
   <DarkMode/>
   </nav>
  );
}

export default React.memo(NavbarComponent);
