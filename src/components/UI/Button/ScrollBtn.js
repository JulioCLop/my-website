import React,  { Fragment } from "react";

import classes from "./ScrollBtn.module.css";

const ScrollBtn = ({ onClick, className, children }) => {
  return (
    <Fragment>
      <p className={`${classes.scroll} ${className}`} onClick={onClick}>
        {children}
      </p>
    </Fragment>
  );
};

export default React.memo(ScrollBtn);
