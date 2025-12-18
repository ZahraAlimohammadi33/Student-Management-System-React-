import React from "react";
import "./modal.css";
import BackDrop from "../backDrop/backDrop";
("../backDrop/backDrop");

const modal = (props) => {
  return (
    <>
      <div
        className="modal"
        style={{
          transform: props.show ? "translateX(0)" : "translateX(-100vw)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
      <BackDrop show={props.show} close={props.close}></BackDrop>
    </>
  );
};

export default modal;
