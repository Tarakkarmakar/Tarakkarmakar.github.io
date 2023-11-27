import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import React, { useEffect } from "react";
import men_sitting from "../../images/men_sitting.png";

import about from "../../images/about.png";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    
      <div className="About" id='About'>
        <div className="about_left" data-aos="fade-left">
          <span id="head">About</span>

          <img className="men_img" src={men_sitting} alt="men" />
        </div>

        <div className="about_right_side" data-aos="fade-right">
          <span>
            I am an aspiring Full-Stack Web Developer ,skilled in MERN stack
            with 1200 Hours+ of hands-on experience in building websites with
            MERN stack, React, JS, and HTML, CSS.
          </span>

          <br />
          <span>
            I am always ready to take on new challenges, solving problems
            smartly. I am excited to start a career as a Full- Stack Developer
            in a reputed firm driven by technology.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
