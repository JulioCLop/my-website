import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../context/Theme.Contexts";


import classes from "./AboutPage.module.css";
import MainHomePage from "../HomePage/MainHomePage";
import { ContainerIntro } from "../../components/AboutPage_Components/ContainerIntro";
import SmallDesc from "../../components/AboutPage_Components/SmallDesc";
import SkillSetSection from "../../components/AboutPage_Components/SkillSetSection";
import Worked from "../../components/AboutPage_Components/Worked";
import CVSection from "../../components/AboutPage_Components/CVSection";
import ScrollBtn from "../../components/UI/Button/ScrollBtn";

const AboutPage = () => {
  const { darkMode, handleTopClick } = useContext(ThemeContext);
  const topElement = useRef();

  return (
    <React.Fragment>
    <span ref={topElement}/>
      <MainHomePage>
        <div />
        <div className={classes["about-Page"]}>
          <ContainerIntro />
          <SmallDesc />
          <SkillSetSection />
          <Worked />
          <CVSection />
        </div>
        <ScrollBtn className={classes.toTop} onClick={()=> handleTopClick(topElement)}>Top</ScrollBtn>
      </MainHomePage>
    </React.Fragment>
  );
};

export default React.memo(AboutPage);
