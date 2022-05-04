import React, { useContext, useState, useRef} from "react";


import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/Theme.Contexts";

import WorkContainers from "../../components/AboutPage_Components/Work_Containers";
import Bar from "../../components/UI/Bar/Bar";
import ScrollBtn from "../../components/UI/Button/ScrollBtn";

import classes from  "./AboutPage.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MainHomePage from "../HomePage/MainHomePage";
import BorderLine from "../../components/UI/Border_Line/Border-Line";

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
  const { darkMode, darkModeStyles } = useContext(ThemeContext);
  const [cvShow, setShow] = useState(false);
  const [isContent, setContent] = useState(skillsBarContent);
  

  const elementTitle = useRef();
  const elementWork = useRef();
  const topElement = useRef();
 

  const barElements = isContent.map(bar => (
    <Bar
    title={bar.title}
    fraction={bar.fraction}
    key={bar.key}
    />
  ));

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
      <section className={classes["section-one-about"]}>
      <ScrollBtn  onClick={handleBackClick}>
      <span id='arrow-down' className={classes.span}>{ <KeyboardArrowDownIcon fontSize='large' sx={{color: "white"}} />}</span>
      </ScrollBtn>
        <div
          className={classes["section-main-img"]}
          style={darkMode ? { backgroundImage:"url('https://images.unsplash.com/photo-1468906824284-242b500c38b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80')"} : { backgroundImage:"url('https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')"}} 
        
        />
        <div
          className={
            ` ${classes["section-one-containers"]} ${classes["section-one-flex-helper"]}`
          }
        >
          <div className={classes["section-one-div1"]}>
            <h1>
              &ldquo;When something is important enough, you do it, even if the
              odds are not in your favor. &rdquo;
              <header-quote>
                <small className={classes["s"]}>-Elon Musk-</small>
              </header-quote>
            </h1>
          </div>
          <div className={classes["section-one-div2"]}>
            <h3>
              <Link to="/contact">Let’s fuel your creativity!</Link>
            </h3>
          </div>
        </div>
      </section>
      <div style={{height: '50px'}} ref={elementTitle} />
      <section  className={classes["section-two-react-intro"]}>
        <div className={classes["react-header"]}>
          <h2>UI/UX REACT<br/><span  className={classes["title-developer"]}>DEVELOPER</span></h2>
        </div>
        <div className={classes["developer-intro"]}>
          <p>
            <span className={classes["about-name"]}>Hello, I'm Julio Lopez.</span> <br/> I am a <span  className={classes.spanWhite}>React Developer</span>. But,
            still exploring other technologies that spike my interest. I work on
            builds and maintenance for a variety of client requests. Attentive
            to UI/UX details and high quality and maintainable code. 
          </p>
        </div>
      </section>
   <section  className={`${classes["F-AC"]} ${classes["about-section-3"]}`}>
     <div className={classes["about-section-3-img-container"]}>
          <img src="https://images.unsplash.com/photo-1637044527986-1727785b1fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt='office' />
     </div>
     <div className={`${classes["FC-AC"]} ${classes["about-section-content-container"]}`}>
          <div className={classes["content-inner-container-1"]}>
            <h2>A litte about my skill sets</h2>
            <p>I began my journey as a developer nearly two years ago, I've mostly worked at startups and have collaberated with a variety of talented people to create web applications products for both businsess and consumer use.</p>
            <p>In my time as a developer, I have gained the neccesary skills to create responsive websites that are fast, user friendly, and built with best code practices. My main area of expertise is in front-end development, HTML, CSS, JS, ReactJS. I have used a variety of resources that collaborate with the coding interactive layouts.  </p>
            <p>If you're looking for a developer to
            add to your team, I'd love to hear from you!</p>
          </div>
          <div className={`${classes["F-AC"]} ${classes["content-inner-button-container"]}`}>
            <Link to="/see-more">see more</Link>
          </div>
        <div className={`${classes["content-inner-skill-view"]}`}>
          <div className={`${classes["inner-skill-view"]}`}>
                  {barElements}
          </div>
          </div>
     </div>
     <ScrollBtn  onClick={forwardWorkHandler}>
     <span id='arrow-down' className={classes.span}>{ <KeyboardArrowDownIcon fontSize='large' sx={{color: "white"}} />}</span>
     </ScrollBtn>
   </section>
   <div style={{paddingBottom: '10px'}} ref={elementWork}/>
   <section   className={classes["work-section"]}>
   <BorderLine/>
     <div className={classes["work-header"]}>
       <h1>Where I've <span style={darkMode ? {color: 'gray'} : {color: 'rgba(128, 128, 128, 0.822)'}}>worked</span></h1>
     </div>
     <div className={classes["work-main-job-containers"]}>
      <WorkContainers srcImage='https://gethalen.com/images/logo.png' link='https://gethalen.com/' alt="halen"/>
      <WorkContainers srcImage='https://orlandospencer.com/media/cache/73/04/73042ae0f959b479bc9fbf6dd7bfb3ee.jpg' link='https://orlandospencer.com/' alt='orlando spencer'/>
      <WorkContainers srcImage='https://couponseeker.com/storage/CCS-SUPPLY-STORE.jpg' link='https://ccssupplystore.com/' alt="ccs supply store"/>
     </div>
   </section>
   <section className={classes["CV_Section"]}>
   <h1>Learn More <span style={{color:'gray'}}>About Me...</span></h1>
    <div className={classes["cv-show-contianer"]} onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
    {
      cvShow ? 
    <div className={cvShow ? classes.viewCV : classes.viewCVAlt1}>
       <p>Check out my CV</p>
       <a href="www.google.com">Download</a>
     </div>
       : 
      <div className={cvShow ? classes.viewCV1 : classes.viewCVAlt}>
      <h1 >CV</h1>
      </div>
    }
      
     </div>
     <ScrollBtn  onClick={handleTopClick}>
       <p>Top</p>
     </ScrollBtn>
   </section>
    </div>
    </MainHomePage>
    </React.Fragment>
  );
}

export default AboutPage;
