/* eslint-disable quotes */
import React from "react";
import { Button } from "semantic-ui-react";
import googleIcon from "../../assets/google_icon-icons.com_62736.svg";
import "./login.css";

const LoginButton = () => (
  <>
    <div className="google-btn">
      <Button color="google plus" className="btn-one">
        <img src={googleIcon} alt="juubix logo" />
        Login with Google
      </Button>
    </div>
  </>
);

export default LoginButton;
