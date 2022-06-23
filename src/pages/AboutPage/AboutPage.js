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

const skillsBarContent = [
  {
    key:'skill1',
    id: 'skill1',
    title: 'Front-end',
    fraction: "8"
  },
  {
    key:'skill2',
    id: 'skill2',
    title: 'Back-end',
    fraction: "5"
  },
  {
    key:'skill3',
    id: 'skill3',
    title: 'React',
    fraction: "9"
  }
];


const  AboutPage = () => {
  const { darkMode} = useContext(ThemeContext);
 

  const elementTitle = useRef();
  const elementWork = useRef();
  const topElement = useRef();
 

  

const handleTopClick = () => {
  topElement.current.scrollIntoView({behavior: 'smooth'})
};

  const handleBackClick = () => {
    elementTitle.current.scrollIntoView({behavior: 'smooth'});

  };

  const forwardWorkHandler = () => {
    elementWork.current.scrollIntoView({behavior: 'smooth'})

  };



 
  
  return (
  <React.Fragment>
  <MainHomePage>
    <div ref={topElement} className={classes["about-Page" ]} >
    <div style={{height: '50px'}} ref={elementTitle} />
     <ContainerIntro/>
     <SmallDesc/>
     <SkillSetSection/>
     <Worked/>
      <CVSection/>
     <ScrollBtn  onClick={handleTopClick}>
     <BiArrowToTop/>
     </ScrollBtn>
    </div>
    </MainHomePage>
    </React.Fragment>
  );
}

export default React.memo(AboutPage);
