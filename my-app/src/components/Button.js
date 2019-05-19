import React from 'react';
import Btn from 'react-bootstrap/Button';

const Button = (props) => {
  return <Btn
    variant="primary"
    className={props.className}
    onClick={props.onClick}>
    {props.label}
  </Btn>

}



export default Button
