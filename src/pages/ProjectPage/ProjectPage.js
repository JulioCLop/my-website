import React, { useContext, useState, useEffect} from "react";

import { ThemeContext } from "../../context/Theme.Contexts";

import projects from '../../module/project';

import ProjectsContainer from "../../components/ProjectPage_Components/ProjectsContainer";



import TTT from '../../assets/ProjectPage/TicTacToe.png';

import classes from "./ProjectPage.module.css";
import Card from "../../components/UI/Card/Card";
import MainHomePage from "../HomePage/MainHomePage";
import SectionOne from "../../components/ProjectPage_Components/SectionOne";
import SectionTwo from "../../components/ProjectPage_Components/SectionTwo";
import SectionThree from "../../components/ProjectPage_Components/SectionThree";






const ProjectPage = () => {
  const { darkMode, darkModeStyles } = useContext(ThemeContext);
  const [ isProjects, setProjects ] = useState([]);
  const [isSearch, setSearch ] = useState('');
  const [sorted, setSorted] = useState(false);
  const [projectLength, setProjectLength] = useState(true);
  


  useEffect(()=>{
    setProjects(projects);
   
  },[]);
 
  const  filteredProjects = [...isProjects].filter((project)=> {
    return project.projectName.toLowerCase().includes(isSearch.toLowerCase())
   });

  
const sortHandler = () => {
  setSorted(prevSort => !prevSort);
  if(sorted){
    const newSort =  filteredProjects.sort((a,b)=> {
      let fa =  a.projectName.toLowerCase(), 
           fb = b.projectName.toLowerCase();

           if(fa < fb){
             return -1
           }
           if(fa > fb){
             return 1
           }
           return 0
    });
    setProjects(newSort)
  }
  if(!sorted){
    const newSort =  filteredProjects.sort((a,b)=> {
      let fa =  a.projectName.toLowerCase(), 
           fb = b.projectName.toLowerCase();

           if(fa > fb){
             return -1
           }
           if(fa < fb){
             return 1
           }
           return 0
    });
    setProjects(newSort)
  }
 
  return;
  
   
}

const onChangeInputHandler = (e) => {
  setSearch(e.target.value);
}

    const noMatches = () =>  {
      if(filteredProjects >= 0){
       return (
       <div className={classes.noMatches}>
         <h1 >No Matches</h1> 
       </div>)
      }else{
      return  <ProjectsContainer 
               
                 projectLength={projectLength}
                   projects={filteredProjects}
                    />;
      }

    };

  
  return (
    <MainHomePage>
    <div style={darkMode ? darkModeStyles : {}}>
      <div className={classes['project-page']}>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree setProjectLength={setProjectLength} projectLength={projectLength} noMatches={noMatches} filteredProjects={filteredProjects} onChangeInputHandler={onChangeInputHandler} sortHandler={sortHandler}/>
      </div>
    
    </div>
    </MainHomePage>
  );
};

export default React.memo(ProjectPage);
