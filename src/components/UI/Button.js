import React from "react";
import "./Button.css";

const Button = (props) => {
  const classes = props.className + " button";
  return (
    <button type="button" className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
