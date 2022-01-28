/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import recordIcon from "../../assets/play-button 4.png";
import style from "./navStyle.css";

const NavBar = ({ content, navSection }) => (
  <div className={style.header}>
    <h2 className={style.header_title}>Juubix</h2>
    <div className={style.header_content}>{content}</div>
    <div className={style.nav}>
      <NavLink className={style.navLink} to="/">
        <img className={style.navIcon} src={recordIcon} alt="play_nav_icon" />
      </NavLink>
      <div className={style.navLinks}>
        <NavLink
          className={`
            ${style.navLink} 
            ${navSection === 2 ? style.footLine : null}
          `}
          to="/interest"
        >
          Match
        </NavLink>
        <NavLink
          className={`
            ${style.navLink} 
            ${navSection === 3 ? style.footLine : null}
          `}
          to="/status"
        >
          Status
        </NavLink>
        <NavLink
          className={`
            ${style.navLink} 
            ${navSection === 4 ? style.footLine : null}
          `}
          to="/"
        >
          Balance
        </NavLink>
      </div>
    </div>
  </div>
);

export default NavBar;
