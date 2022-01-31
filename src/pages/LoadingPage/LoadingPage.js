import React from "react";

import LoadingPageLogo from "../../assets/LoadingPage/newLogoNoBackround.png";

import "./LoadingPage.css";

const LoadingPage = ()=> {
  
  return (
    <div className="loading_page">
      <div className="img">
        <div className="loading_page_info">
          <div className="loading_logo_container">
            <img src={LoadingPageLogo} alt="Logo" />
          </div>
          <div className="loading_page_context">
            <div className="sp-wave"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
