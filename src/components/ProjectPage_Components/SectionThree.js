import React, {useState} from 'react';

import classes from './SectionThree.module.css';

import {FiGithub} from 'react-icons/fi';

const SectionThree = ({allCategories,setProjects,projects,isProjects,categories}) => {
    const filterItems = (type) => {
        if(type === 'all'){
            setProjects(projects)
            return;
        }
        const newItems = projects.filter(item=> item.type === type)
        setProjects(newItems)
    };
    
     
    const listButtonHandler = (item)=> {
            filterItems(item);
            
    };
 
  return (
    <section className={classes["section-three_project"]}>
    <div className={classes["section-three_project_header"]}>
    <h2>Projects List</h2>
    <hr/>
    </div>
    <div className={classes.listProjects}>
       {allCategories.map((item,index)=> {
     
        return(
            <React.Fragment>
              <button 
               onClick={()=>listButtonHandler(item)}
               type='button'
                key={index}>
               {item}
               </button>
               </React.Fragment>
        )
       })}
  
    </div>
    <main>
        {
            isProjects.map(items => {
                return(
                    <div className={classes.mainProjectContainer}>
                        <div className={classes.containerOne}>
                         <img src={require(`../../assets/ProjectPage/VBC-${items.projectId}.png`)} alt={items.projectName}/>
                        </div>
                        <div className={classes.containerTwo}>
                            <div className={classes.innerContainerOne}>
                                <h3>{items.projectName}</h3>
                                <hr/>
                            </div>
                            <div className={classes.innerContainerTwo}>
                            <p>{items.projectText}</p>
                            <small>{items.projectLanguage}</small>
                                <a target='_blank' rel='noreferrer' href={items.projectLink}><FiGithub className={classes.icon}/></a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </main>
    </section>
  )
}

export default SectionThree;
