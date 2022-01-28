/* eslint-disable*/
import React from "react";
import NavBar from "../nav_bar/NavBar";
import style from "./interestStyle.module.css";

const InterestPage = () => {
  return (
    <div>
      <NavBar
        content={<p className={style.header_name}>Select Interest</p>}
        navSection={2}
      />
      hello
    </div>
  );
};

export default InterestPage;
