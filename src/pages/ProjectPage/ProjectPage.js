import React, { useContext, useState, useEffect} from "react";

import { ThemeContext } from "../../context/Theme.Contexts";

import projects from '../../module/project';

import ProjectsContainer from "../../components/ProjectPage_Components/Projects_Container/ProjectsContainer";

import LinkButton from "../../components/UI/Button/Link-Button";
import Input from "../../components/UI/Input/Input";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

import Laptop  from '../../assets/ProjectPage/projectLaptop.png';
import TTT from '../../assets/ProjectPage/TicTacToe.png';

import classes from "./ProjectPage.module.css";
import Card from "../../components/UI/Card/Card";
import MainHomePage from "../HomePage/MainHomePage";






const ProjectPage = () => {
  const { darkMode, darkModeStyles } = useContext(ThemeContext);
  const [ isProjects, setProjects ] = useState([]);
  const [isSearch, setSearch ] = useState('');
  const [sorted, setSorted] = useState(false);
  
 
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
      return  <ProjectsContainer  projects={filteredProjects} />;
      }

    };

    useEffect(()=>{
      setProjects(projects);
     
    },[]);
  
  return (
    <MainHomePage>
    <div style={darkMode ? darkModeStyles : {}}>
      <div className={classes['project-page']}>
      <div className={classes.outterdiv} >
    <section className={classes["section-one_project"]}>
          <h2>Projects</h2>
          <h1>Since Beginning <span>My Journey</span></h1>
          <div className={classes["section-one_project-grid"]}>
          <div className={classes["section-one_project-content"]}>
          <p>Go ahead, check out my projects below or visit my Github Repo and check out my previous projects. Building Javascript applications has given me the ability to function independantly, and able to deliver fast, optimized, scalable apps. I'm currenly working on creating a Ecommerce website which will provide the user an exclusive experience. As I develop, my main focus will be on fast, elegant and accessible user experience.  </p>
          <div className={classes["section-one_project-btns"]}>
          <LinkButton href="https://github.com/JulioCLop/ecommerce">View Current Project</LinkButton>
          <LinkButton href="https://github.com/JulioCLop">View Github Repo</LinkButton>
          </div>
          </div>
          <div className={classes["section-one_project-img"]}>
            <img  src={Laptop} alt="project_image"/>
          </div>
          </div>
        </section>
    </div>
        <section className={classes["section-two_project"]}>
        <h2>Most Recent <span>projects</span></h2>
        <div className={classes["section-two_project-cards"]}>
          <Card className={classes["section-two_project-card"]}>
          <img src={TTT} alt="img"/>
            <div className={classes["section-two_project-card-content"]}>
            <h4>Tic, Tac, Toe App</h4>
            <p>HTML, CSS, JS</p>
            <LinkButton className={classes["a-2"]} href="https://github.com/JulioCLop/Tic-Tac-Toe-Game">view</LinkButton>
            </div>
          </Card>
          <Card className={classes["section-two_project-card"]}>
          <img src="https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGV4cGVuc2UlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="img"/>
            <div className={classes["section-two_project-card-content"]}>
            <h4>Expense App</h4>
            <p>ReactJS</p>
            <LinkButton className={classes["a-2"]} href="https://github.com/JulioCLop/expense-app">View</LinkButton>
            </div>
          </Card>
        </div>
        </section>
        <section className={classes["section-three_project"]}>
        <div className={classes["section-three_project_header"]}>
        <h2>Projects</h2>
        <div className={classes.sort} onClick={sortHandler}><SortByAlphaIcon/></div>
        </div>
      
      <div className={classes["section-three_project_search"]} >
      <div>
        <label>Search Project</label>
        <Input type="search" placeholder='Search project' onChange={onChangeInputHandler }/>
      </div>
      </div>
      <main className={classes["section-three_project_inner_main"]}>
        <div style={filteredProjects >= 0 ? {gridTemplateColumns: '1fr'} : {}} className={classes["section-three_project_cards_container" ]}>
      {noMatches()}
        </div>
      </main>
        </section>
      </div>
    
    </div>
    </MainHomePage>
  );
};

export default React.memo(ProjectPage);
