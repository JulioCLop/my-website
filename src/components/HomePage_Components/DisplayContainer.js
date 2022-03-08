import React, { useState } from "react";

import { Link } from "react-router-dom";

import DisplayContentContainer from "./DisplayContentContainer";

import "./DisplayContainer.css";

const DisplayContainer = (props) => {
  const { id } = props;

  const [activeDisplay1, setAciveDisplay1] = useState();
  const [activeDisplay2, setAciveDisplay2] = useState();
  const [activeDisplay3, setAciveDisplay3] = useState();

  const image =
    "https://i.insider.com/5f63cbe4323fc4001e0d6ff1?width=700&format=jpeg&auto=webp";
  const image2 =
    "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  const image3 =
    "https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?b=1&k=20&m=1168945108&s=170667a&w=0&h=vuUT6Qw8h-eRIHQEesB0_fC1V1xgQtPdWp4KyaVXq0M=";

  const content1Active = () => {
    setAciveDisplay1(true);
  };

  const content1ActiveRemove = () => {
    setAciveDisplay1(false);
  };

  const content2Active = () => {
    setAciveDisplay2(true);
  };
  const content2ActiveRemove = () => {
    setAciveDisplay2(false);
  };

  const content3Active = () => {
    setAciveDisplay3(true);
  };

  const content3ActiveRemove = () => {
    setAciveDisplay3(false);
  };

  const choices = () => {
    if (activeDisplay1) {
      return (
        <DisplayContentContainer
          image={image}
          content="hello I am from colorado intro"
          className={
            activeDisplay1 && "display-content-1 display-content-active"
          }
        />
      );
    } else if (activeDisplay3) {
      return (
        <DisplayContentContainer
          image={image2}
          content="Every project has its own personality. I bring ideas to life, create experiences & tell stories that people remember."
          className={
            activeDisplay3 && "display-content-2 display-content-active"
          }
        />
      );
    } else if (activeDisplay2) {
      return (
        <DisplayContentContainer
          image={image3}
          content="Ready when you are"
          className={
            activeDisplay2 && "display-content-3 display-content-active"
          }
        />
      );
    }
  };

  return (
    <div id={id} className="display-container">
      <div className="header-name">
        {activeDisplay1 || activeDisplay2 || activeDisplay3 ? (
          choices()
        ) : (
          <div>
            <h3>UI/UX React Developer</h3>
            <h2>
              I'm a React developer, and I build anything from <br/> mobile to web
              apps.
            </h2>
          </div>
        )}
      </div>

      <div className="display-options">
        <div
          onMouseLeave={content1ActiveRemove}
          onClick={content1Active}
          className="display-option-1 display-option-main"
        ></div>
        <div
          onMouseLeave={content3ActiveRemove}
          onClick={content3Active}
          className="display-option-3 display-option-main"
        ></div>
        <div
          onMouseLeave={content2ActiveRemove}
          onClick={content2Active}
          className="display-option-2 display-option-main"
        ></div>
      </div>

      <div className="header-link">
        <p>
          Feel free to start by looking at my projects!
          <Link to="/projects">Check it out</Link>
        </p>
      </div>
    </div>
  );
}

export default DisplayContainer;
