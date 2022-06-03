import React from 'react';

import classes from './Input.module.css';




const Input = (props) => {
  return (
    <input className={`${classes.input} ${props.className}`} id={props.id} value={props.value} type={props.type} onChange={props.onChange} onBlur={props.onBlur} />
  )
};

export default React.memo(Input);
