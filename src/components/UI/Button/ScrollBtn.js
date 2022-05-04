import React from "react";

import styled from "styled-components";
import classes from "./ScrollBtn.module.css";

const ScrollBtn = (props) => {
  const ScrollBtn = styled.button`
    display: flex;
    background-color: rgb(75, 4, 4);
    border: none;
    color: white;
    transform: rotate(0deg);
    width:50px;
    height: 50px;
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 3px;
    right: 3px;
    cursor: pointer;
  `;

  return (
    <ScrollBtn className={classes.scroll} onClick={props.onClick}>
      {props.children}
    </ScrollBtn>
  );
};

export default ScrollBtn;
