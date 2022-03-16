import React from "react";
import ReactDom from 'react-dom';

import classes from './ErrorModal.module.css';

const Backdrop = props => {
    return  <div onClick={props.onConfirm} className={classes.backdrop}/>;
};

const ModalOverlay = props => {
return (
    <div className={classes.modal}>
    <div className={classes.header}>
      <h2>{props.title}</h2>
    </div>
    <div className={classes.content}>{props.message}</div>
    <footer className={classes.footer}>
        <button className={classes.btn} onClick={props.onConfirm}>Okay</button>
    </footer>
  </div>
)
};

const ErrorModal = props => {

  return (
      <React.Fragment>
     {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root') )}
   {ReactDom.createPortal(<ModalOverlay
    onConfirm={props.onConfirm}
    title={props.title}
    message={props.message}
    

    />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
