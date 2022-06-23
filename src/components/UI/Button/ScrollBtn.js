import React from "react";

import styled from "styled-components";
import classes from "./ScrollBtn.module.css";

const ScrollBtn = (props) => {
  const ScrollBtn = styled.button`
    display: flex;
    font-size: 2.5rem;
    position: absolute;
    left: 50%;
    border-radius: 80px;
    padding: 10px;
    border: none;
    transform: translate(-28%,-40%);
    background-color: #002bdc;
    color: white;
    cursor: pointer;
  `;

  return (
    <ScrollBtn className={classes.scroll} onClick={props.onClick}>
      {props.children}
    </ScrollBtn>
  );
};

export default React.memo(ScrollBtn);
