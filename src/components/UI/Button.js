import React from "react";
import "./Button.css";

const Button = (props) => {
  const classes = props.className + " button";
  return (
    <button
      type={props.type ? props.type : "button"}
      className={classes}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
