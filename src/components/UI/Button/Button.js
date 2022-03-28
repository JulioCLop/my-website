import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onSubmit} className={`${props.className} ${classes.button}`} disabled={props.disabled}>
  {props.children}
    </button>
  )
};


export default Button;