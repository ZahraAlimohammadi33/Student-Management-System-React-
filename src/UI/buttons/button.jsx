import React from "react";
import "./button.css";
const Button = (props) => {
  let buttonClass = ["Button"];

  switch (props.type) {
    case "danger":
      buttonClass.push("danger");
      break;
    case "success":
      buttonClass.push("success");
      break;
    case "login":
      buttonClass.push("login");
      break;
    case "toggle":
      buttonClass.push("toggle");
      break;
    default:
      break;
  }

  return (
    <button className={buttonClass.join(" ")} onClick={props.function}>
      {props.children}
    </button>
  );
};

export default Button;
