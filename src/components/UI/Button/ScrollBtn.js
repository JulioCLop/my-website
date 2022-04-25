import React from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styled from "styled-components";
import classes from './ScrollBtn.module.css';





const ScrollBtn = (props) => {
    const ScrollBtn = styled.button`
    display: flex;
    background-color: rgb(75, 4, 4);
    opacity: 0.8;
    border: none;
    color: white;
    box-shadow: 1px 2px 1px rgba(0,0,0,0.5);
    width:50px;
    height: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    position: absolute;
    bottom: -23px;
    right: 1%;
    cursor: pointer;
    `;

  return (
    <ScrollBtn className={classes.scroll} onClick={props.onClick}><span id='arrow-down' className={classes.span}><KeyboardArrowDownIcon fontSize='large' sx={{color: "white"}} /></span></ScrollBtn>
  )
}
export default ScrollBtn;