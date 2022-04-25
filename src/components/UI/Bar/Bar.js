import React from "react";
import classes from "./Bar.module.css";
import styled, { keyframes } from "styled-components";



const Bar = (props) => {
  const {fraction,title} = props;




const increaseHeight = keyframes`
from {height: 0%;}
to {height: ${fraction}0%;}

`;

console.log(increaseHeight)
const Div1 = styled.div`
    background-color: rgb(75, 4, 4);
    width: 100%;
    height: ${fraction}0%;
    display: flex;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    flex-direction: column;
    align-items:center;
    justify-content: flex-end;
    animation: ${increaseHeight} 2s linear;
`;

  return (
    <React.Fragment>
      <div className={`${classes.bar}`} >
        <Div1>
          <span>{fraction}/10</span>
          <h4>{title}</h4>
        </Div1>
      </div>
    </React.Fragment>
  );
};

export default Bar;
