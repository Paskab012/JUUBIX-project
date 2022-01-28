/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
// eslint-disable-next-line quotes
import React from "react";
import "./registerPage.css";
import { NavLink } from "react-router-dom";

import sideSquares from "../../assets/Blue-and-Yellow-Educate-Kids-Charity-Infographic-1-410x1024 1.png";
import juubixLogo from "../../assets/juubixlogo.png";
import linkedinIcon from "../../assets/linkedin.png";
import googleIcon from "../../assets/google.png";
import twitterIcon from "../../assets/Vector.png";

const RegisterPage = () => (
  <div className="login_page">
    <img className="side_squares" alt="side quares" src={sideSquares} />
    <div className="login_content">
      <div className="assistance_icon_div" />
      <div className="login_section">
        <div className="login_card">
          <img src={juubixLogo} alt="juubix logo" />
          <p>Register:</p>
          <div className="sign_in_icons">
            <img className="sign_in_icon" alt="login links" src={twitterIcon} />
            <img
              className="sign_in_icon"
              alt="login links"
              src={linkedinIcon}
            />
            <img className="sign_in_icon" alt="login links" src={googleIcon} />
          </div>
          <form className="login_form">
            <label htmlFor="email">Email adress</label>
            <input
              type="email"
              placeholder="user@mail.com"
              className="form_input"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form_input"
              placeholder="********"
              id="password"
            />
            <div className="form_remember_div">
              <div>
                <label className="skill_check" htmlFor="remember_me">
                  <input type="checkbox" id="remember_me" />
                  <span className="checkmark" />
                  Remember me
                </label>
              </div>
              <a href="../login/LoginPage.js">forgot password?</a>
            </div>
            <div>
              <label className="skill_check" htmlFor="robot">
                <input type="checkbox" id="robot" />
                <span className="checkmark" />
                Are you a robot
              </label>
            </div>
            <div className="form_buttons">
              <input type="submit" className="form_submit" value="Sign in" />
              <NavLink to="/interest" className="sign_up_link">
                Sigh up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterPage;
