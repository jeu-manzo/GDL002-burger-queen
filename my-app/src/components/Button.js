import React from 'react';
import Btn from 'react-bootstrap/Button';

const Button = (props) => {
  return <Btn
    variant="primary"
    className={props.className}
    name={props.name}
    onClick={props.onClick}
    id={props.id}>
    {props.label}
  </Btn>

}



export default Button
