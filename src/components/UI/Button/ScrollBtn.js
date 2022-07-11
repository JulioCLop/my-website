import React from "react";

import styled from "styled-components";
import classes from "./ScrollBtn.module.css";

const ScrollBtn = (props) => {
  const ScrollBtn = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    position: absolute;
    text-decoration: underline;
    z-index:6;
    right: 4%;
    bottom: 0%;
    padding: 10px;
    color: hsl(209, 34%, 30%);
    cursor: pointer;
  `;

  return (
    <ScrollBtn className={classes.scroll} onClick={props.onClick}>
      {props.children}
    </ScrollBtn>
  );
};

export default React.memo(ScrollBtn);
