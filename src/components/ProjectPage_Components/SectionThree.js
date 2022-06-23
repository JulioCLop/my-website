import React from 'react';

import Input from "../../components/UI/Input/Input";

import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import classes from './SectionThree.module.css';

const SectionThree = ({setProjectLength,projectLength,noMatches,sortHandler, onChangeInputHandler, filteredProjects }) => {
  return (
    <section className={classes["section-three_project"]}>
    <div className={classes["section-three_project_header"]}>
    <h2>Projects</h2>
    <hr/>
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
    <div className={classes.showBtnContainer}>
    <button onClick={()=> setProjectLength(prev => !prev)}>
      {projectLength ? 'see more': 'show less'}
  </button>
    </div>
  </main>
    </section>
  )
}

export default SectionThree;
