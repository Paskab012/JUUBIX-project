/* eslint-disable */
import React from "react";
import "./style.css";
import assistanceBtn from "../../assets/accessibility_3998.png";
import welcomeImg from "../../assets/lady with phone smiling.png";
import logo from "../../assets/juubixlogocircle.png";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div className="welcomePage">
        <div className="lines">
          <div className="lines-decoration1"></div>
          <div className="lines-decoration2"></div>
          <div className="lines-decoration3"></div>
          <div className="lines-decoration4"></div>
          <div className="lines-decoration5"></div>
        </div>
        <ul className="container">
          <li className="flex2">
            <img src={logo} id="logo" />
            <h1>JUUBIX</h1>
          </li>
          <li className="flex3">
            <NavLink to="/login" className="get_started_link">
              Get Started
            </NavLink>
          </li>
        </ul>
        <div className="welcome-image">
          <img src={welcomeImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
