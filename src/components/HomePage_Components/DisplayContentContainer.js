import React from "react";

import classes from "./DisplayContentContainer.module.css";



const  DisplayContentContainer = (props) => {
  const { className, image, content } = props;

  return (
    <div className={`${classes["display-content"]}  ${classes["flex-display"]} ${className} `}>
      <div className={classes["content-img-container"]}>
        <img src={image} width="200" alt="icons" />
      </div>
      <div className={classes["content-body-container"]}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default DisplayContentContainer;
