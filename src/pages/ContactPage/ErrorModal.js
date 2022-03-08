import React from "react";

import classes from './ErrorModal.module.css';

const ErrorModal = props => {

  return (
      <>
      <div onClick={props.onConfirm} className={classes.backdrop}/>
    <div className={classes.modal}>
      <div className={classes.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.footer}>
          <button className={classes.btn} onClick={props.onConfirm}>Okay</button>
      </footer>
    </div>
    </>
  );
};

export default ErrorModal;
