import React, { useState, useEffect, useRef, useContext } from "react";
import logo from "../../assets/react.svg";
import Button from "../buttons/button";
import "./signIn.css";
import reloadImage from "../../assets/reload_image.jpg";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

const SignIn = (props) => {
  const [randomNum1, setRandomNum1] = useState(0);
  const [randomNum2, setRandomNum2] = useState(0);
  const [sumHolder, setSumHolder] = useState(0);

  const captchaRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);

  const generateCaptcha = () => {
    let num1 = Math.floor(Math.random() * 10 + 1);
    let num2 = Math.floor(Math.random() * 10 + 1);
    setRandomNum1(num1);
    setRandomNum2(num2);
    setSumHolder(num1 + num2);
  };

  const loginHandler = () => {
    axios
      .get("https://686f91df91e85fac42a19a24.mockapi.io/Students/data/users")
      .then((res) => {
        const users = res.data;
        const foundUser = users.find(
          (user) =>
            user.username == usernameRef.current.value &&
            user.password == passwordRef.current.value
        );

        if (foundUser) {
          login();
          props.close();
        }
      });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <>
      <img src={logo} />
      <input type="text" placeholder="username" ref={usernameRef} />
      <p></p>
      <input type="text" placeholder="password" ref={passwordRef} />
      <div className="captcha-view">
        <img src={reloadImage} onClick={generateCaptcha} />
        <input type="text" ref={captchaRef} />
        <p>
          {" "}
          = {randomNum1} + {randomNum2}{" "}
        </p>
      </div>
      <Button type="login" function={loginHandler}>
        ورود
      </Button>
    </>
  );
};

export default SignIn;
