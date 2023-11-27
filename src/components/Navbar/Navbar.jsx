import { Button, FormLabel, Switch } from "@chakra-ui/react";

import {Link} from "react-scroll"
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import resume_my from "../../images/Tarak_Karmakar-Resume.pdf"
import mylogo from "../../images/Tarak_logo.png";
import { useState } from "react";
const Navbar = ({ toggleDarkmode, isDark, setMenu }) => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1_4phGBk7v2fhXtOsTaN9T-k1n4RcF6QU/view?usp=sharing"
    );
  };
  return (
    <div
      className="navbar"
      id="Home"
      style={{
        background: !isDark
          ? "linear-gradient(#000000, #000000)"
          : "linear-gradient(#000000, #000000)",
      }}
    >
      <div className="left_nav">
        <img src={mylogo} alt="" />
        <FormLabel>{isDark ? <MoonIcon /> : <SunIcon />}</FormLabel>
        <Switch onChange={toggleDarkmode} colorScheme="green" size="md" />
      </div>

      <div className="right_nav">
        <ul>
          <li className="IntroH">
            <Link activeClass="active"  spy={true} smooth={true} offset={0} duration={200}   
            to="Intro">Home</Link>{" "}
          </li>
          <li className="aboutH">
            <Link activeClass="active" 
             spy={true} smooth={true} offset={0} duration={300} 
              to="About">About</Link>{" "}
          </li>

        
          <li className="skillH">
            <Link activeClass="active"  spy={true} smooth={true} offset={-150} duration={300} to="skills"> Skills</Link>
          </li>

          <li className="projectH">
            <Link activeClass="active" spy={true} smooth={true} offset={-150} duration={300} to="project">Projects</Link>
          </li>
          <li className="contactH">
            {" "}
            <Link  activeClass="active"  spy={true} smooth={true} offset={-150} duration={300} to="contact"> Contact</Link>{" "}
          </li>
          <li  >
          
          <a href={resume_my} download>
              <Button background="#fd7e14" onClick={openResume}  > Resume</Button>
           
           </a>
          </li>
        </ul>
      </div>

      <div className="hamb">
        <HamburgerIcon onClick={() => setMenu(true)} w={8} h={8} />
      </div>
    </div>
  );
};

export default Navbar;
