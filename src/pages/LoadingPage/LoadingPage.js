import React from "react";

import LoadingPageLogo from "../../assets/LoadingPage/newLogoNoBackround.png";

import classes from  "./LoadingPage.module.css";

const LoadingPage = ()=> {
  
  return (
    <div className={classes["loading_page"]}>
      <div className={classes["img"]}>
        <div className={classes["loading_page_info"]}>
          <div className={classes["loading_logo_container"]}>
            <img src={LoadingPageLogo} alt="Logo" />
            <div className={classes["sp-wave"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LoadingPage);
