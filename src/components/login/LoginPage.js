/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
// eslint-disable-next-line quotes
import React from "react";
import "./login.css";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import sideSquares from "../../assets/Blue-and-Yellow-Educate-Kids-Charity-Infographic-1-410x1024 1.png";
import juubixLogo from "../../assets/juubixlogo.png";
import ValidBtn from "./ValidBtn";

const LoginPage = () => (
  <div className="login_page">
    <img className="side_squares" alt="side quares" src={sideSquares} />
    <div className="login_content">
      <div className="assistance_icon_div" />
      <div className="login_section">
        <div className="login_card">
          <img src={juubixLogo} alt="juubix logo" />
          <h1 className="paragraphe">Welcome Back</h1>
          <div className="sign_in_icons">
            <LoginButton />
          </div>
          <div className="text-or">
            <p>OR CONTINUE WITH EMAIL</p>
          </div>
          <form className="login_form">
            <label htmlFor="email" className="email-label">
              Type your username
            </label>
            <input
              type="email"
              placeholder="Type your username"
              className="form_input"
              id="email"
              required
            />
            <label htmlFor="password" className="email-label">
              Password
            </label>
            <input
              type="password"
              className="form_input"
              placeholder="Enter your password"
              id="password"
              required
            />
            <div className="form_remember_div">
              <div>
                <label className="skill_check" htmlFor="remember_me">
                  <input type="checkbox" id="remember_me" />
                  <span className="checkmark" />
                  Remember me
                </label>
              </div>
              <div className="form-forget">
                <a href="../register/RegisterPage.js">forgot password?</a>
              </div>
            </div>
            <div>
              <label className="skill_check" htmlFor="robot">
                <input type="checkbox" id="robot" />
                <span className="checkmark" />
                Are you a robot
              </label>
            </div>
            <div className="form_buttons">
              <ValidBtn />
            </div>
            <hr />
            <div className="already-signup">
              <p className="already-text">
                Not a member of JUUBIX?
                <NavLink to="/register" className="create-now">
                  Create your account now
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
