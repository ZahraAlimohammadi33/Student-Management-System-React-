import React, { useContext, useState } from "react";
import "./Toolbar.css";
import "./../MenuItems";
import Logo from "./logo";
import MenuItems from "./../MenuItems";
import Button from "../../../../../UI/buttons/button";
import Modal from "../../../../../UI/modal/modal";
import SignIn from "../../../../../UI/user/signIn";
import SlideDrawer from "../sideDrawer/saideDrawer";
import { AuthContext } from "../../../../../context/authContext";

const Toolbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const { authenticated, logout } = useContext(AuthContext);

  const modalHandler = () => {
    setShowModal(true);
  };

  const modalCloser = () => {
    setShowModal(false);
  };

  const sideHandler = () => {
    setShowSide(true);
  };

  const sideCloser = () => {
    setShowSide(false);
  };

  return (
    <>
      <header className="Toolbar">
        {/* <div onClick={sideHandler}>|||</div> */}
        <div className="helper show">
          <Logo />
        </div>
        <nav className="show">
          <MenuItems></MenuItems>
        </nav>
        {authenticated ? (
          <Button className="show" type="login" function={logout}>
            خروج
          </Button>
        ) : (
          <Button className="show" type="login" function={modalHandler}>
            ورود
          </Button>
        )}
        <Modal show={showModal} close={modalCloser}>
          <SignIn close={modalCloser} />
        </Modal>
      </header>
      <SlideDrawer show={showSide} close={sideCloser}></SlideDrawer>
    </>
  );
};

export default Toolbar;
