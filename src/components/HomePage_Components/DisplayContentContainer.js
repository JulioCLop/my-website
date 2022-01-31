import React from "react";

import "./DisplayContentContainer.css";



const  DisplayContentContainer = (props) => {
  const { className, image, content } = props;

  return (
    <div className={`display-content  flex-display ${className} `}>
      <div className="content-img-container">
        <img src={image} width="200" alt="" />
      </div>
      <div className="content-body-container">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default DisplayContentContainer;
