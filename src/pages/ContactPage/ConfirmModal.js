import React from 'react';
import ReactDom from 'react-dom';
import Button from '../../components/UI/Button/Button';

import classes from './ConfirmModal.module.css';

const ConfirmBackdrop = props => {
    return <div onClick={props.onConfirm} className={classes.backdrop}/>
}



const ConfirmOverlay = props => {
  return (
    <div className={classes.modal}>
    <div className={classes.header}>
      <h2>{props.title}</h2>
    </div>
    <div className={classes.content}>{props.message}</div>
    <footer className={classes.footer}>
        <Button className={classes.btn} onSubmit={props.onConfirm}>X</Button>
    </footer>
  </div>
  )
}

const ConfirmModal = props => {
    return(
        <React.Fragment>
            {ReactDom.createPortal(<ConfirmBackdrop onConfirm={props.onConfirm} />, document.getElementById('confirm_Backdrop-root'))}
            {ReactDom.createPortal(<ConfirmOverlay 
            onConfirm={props.onConfirm}
            title={props.title}
            message={props.message}

            />, document.getElementById('confirm_Overlay-root'))}
        </React.Fragment>
    )
}


export default ConfirmModal;
