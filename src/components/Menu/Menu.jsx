import React, { useState } from "react";
import "./menu.css";
import { CloseIcon } from "@chakra-ui/icons";
const Menubar = ({ setMenu, menu }) => {
  return (
    <div className={menu ? "menu" : "menu_none"}>
      <CloseIcon left="80%" onClick={() => setMenu(false)} w={7} h={8} />

      <div>
        <ul>
          <li>
            <a href="#Intro">Home</a>{" "}
          </li>
          <li>
            <a href="#about">About</a>{" "}
          </li>
          <li>
            <a href="#skills"> Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            {" "}
            <a href="#contact"> Contact</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
