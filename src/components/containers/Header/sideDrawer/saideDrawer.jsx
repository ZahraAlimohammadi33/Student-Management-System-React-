import React from "react";
import Logo from "../Toolbar/logo";
import "./sideDrawer.css";
import MenuItems from "../MenuItems";
import BackDrop from "../../../../UI/backDrop/backDrop";
import Button from "../../../../UI/buttons/button";

const SlideDrawer = (props) => {
  const classes = ["slideDrawer"];
  classes.push(props.show ? "open" : "close");

  return (
    <>
      <div className={classes.join(" ")}>
        <div style={{ height: "10%" }}>
          <Logo />
        </div>
        <nav>
          <MenuItems />
        </nav>
        <Button type="success" function={() => {}} className="box-button">
          ورود و ثبت نام
        </Button>
      </div>
      <BackDrop show={props.show} close={props.close}></BackDrop>
    </>
  );
};

export default SlideDrawer;
