import React from "react";

function isOperator(val) {
  return isNaN(val) || val === ".";
}

function isEqual(val) {
  return val === "=";
}

const Button = props => {
  return (
    <div
      className={`button-wrapper 
        ${isOperator(props.children) ? "operator" : null}
        ${isEqual(props.children) ? "equal" : null}`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
