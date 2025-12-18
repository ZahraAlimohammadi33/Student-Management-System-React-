import React from "react";
import "./backDrop.css";

const BackDrop = (props) => {
  return props.show ? (
    <div className="backDrop" onClick={props.close}></div>
  ) : null;
};

export default BackDrop;
