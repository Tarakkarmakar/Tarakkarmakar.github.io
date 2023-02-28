import React, { useState } from "react";
import "./menu.css";

import {Link} from "react-scroll"
import { CloseIcon } from "@chakra-ui/icons";
import resume_my from "../../images/fw20-0769-Tarak_Karmakar-Resume.pdf";


import { Button } from "@chakra-ui/react";
const Menubar = ({ setMenu, menu }) => {

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1_4phGBk7v2fhXtOsTaN9T-k1n4RcF6QU/view?usp=sharing"
    );
    setMenu(false)
  };
  return (
    <div className={menu ? "menu" : "menu_none"}>
      <CloseIcon left="80%" onClick={() => setMenu(false)} w={7} h={8} />

      <div>
        <ul>
          <li>
          <Link activeClass="active" onClick={() => setMenu(false)}  spy={true} smooth={true} offset={-150} duration={200}   
            to="Intro">Home</Link>{" "}
          </li>
          <li>
          <Link activeClass="active" onClick={() => setMenu(false)}
           spy={true} smooth={true} offset={-150} duration={300}  
           to="about">About</Link>{" "}
          </li>
          <li>
          <Link activeClass="active"  onClick={() => setMenu(false)} spy={true} smooth={true} offset={-150} 
          duration={300} to="skills"> Skills</Link>
          </li>
          <li>
          <Link activeClass="active" onClick={() => setMenu(false)}  spy={true} smooth={true}
           offset={-150} duration={300} to="project">Projects</Link>
          </li>
          <li>
            {" "}
            <Link  activeClass="active"  onClick={() => setMenu(false)} spy={true} smooth={true} offset={-150} duration={300} to="contact"> Contact</Link>{" "}
          </li>

          <li  >
          <a href={resume_my} download>
              <Button background="#fd7e14" onClick={openResume}  > Resume</Button>
           
           </a>
      </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
