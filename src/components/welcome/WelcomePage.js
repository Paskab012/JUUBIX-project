/* eslint-disable */
import React from "react";
import "./style.css";
import assistanceBtn from "../../assets/AssistanceButton.png";
import logo from "../../assets/juubixlogocircle.png";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <ul className="container">
        <li className="flex1">
          <img src={assistanceBtn} id="assistanceBtn" />
        </li>
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
    </div>
  );
};

export default WelcomePage;
