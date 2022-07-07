import React from 'react';
import { FiLink } from 'react-icons/fi';



import classes from './Card.module.css';


const Card = (props) => {
 
  return (
    <div className={classes.projectCard}>
    <div className={classes['projectCard-header']}>
    <img src={require(`../../../assets/ProjectPage/VBC-${props.id}.png`)} alt="" />
    </div>
    <div className={classes['projectCard-body']}>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <small>{props.language}</small>
    </div>
    <div className={classes['projectCard-Container']}>
    <ul className={classes['projectCard-Container-items']}>
      {
        props.links.map((link,index)=> {
          const {id, text, url} = link;
          return(
            <li className={classes['projectCard-Container-item']} id={id} key={index}><a href={url}>{text}</a></li>
          )
        })
      }
      </ul>
    </div>
    </div>
  
  )
}

export default React.memo(Card);
