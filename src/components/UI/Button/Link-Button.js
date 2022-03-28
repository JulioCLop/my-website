import React from 'react';

import classes from './Link-Button.module.css';

const Button = (props) =>  {
  return (
    <a href={props.href} className={`${props.className} ${classes["a-link"]}`}>{props.children}</a>
  )
};


export default Button;