import React, { useContext, useRef} from "react";


import { ThemeContext } from "../../context/Theme.Contexts";

import ScrollBtn from "../../components/UI/Button/ScrollBtn";

import classes from  "./AboutPage.module.css";
import MainHomePage from "../HomePage/MainHomePage";
import { ContainerIntro } from "../../components/AboutPage_Components/ContainerIntro";
import SmallDesc from "../../components/AboutPage_Components/SmallDesc";
import SkillSetSection from "../../components/AboutPage_Components/SkillSetSection";
import Worked from "../../components/AboutPage_Components/Worked";
import {BiArrowToTop} from 'react-icons/bi';
import CVSection from "../../components/AboutPage_Components/CVSection";


const  AboutPage = () => {
  const { darkMode} = useContext(ThemeContext);
  const elementTitle = useRef();
  const topElement = useRef();
 

  

const handleTopClick = () => {
  topElement.current.scrollIntoView({behavior: 'smooth'})
};

 
  
  return (
  <React.Fragment>
   <span ref={topElement}/>
  <MainHomePage >
    <div style={{height: '50px'}} ref={elementTitle} />
    <div  className={classes["about-Page" ]} >
     <ContainerIntro/>
     <SmallDesc/>
     <SkillSetSection/>
     <Worked/>
      <CVSection/>
    </div>
    <ScrollBtn  onClick={handleTopClick}>
     Top
     </ScrollBtn>
    </MainHomePage>
    </React.Fragment>
  );
}

export default React.memo(AboutPage);
