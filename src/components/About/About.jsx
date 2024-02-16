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
          Full-Stack Developer proficient in the MERN stack, adept at crafting innovative web apps. Thrived in startup environments, delivering impactful digital solutions. Skilled in React, JavaScript, HTML, and CSS. Passionate about collaborative projects that push boundaries.
          </span>

          <br />
          <span>
          I am always ready to take on new challenges,
           solving problems smartly. Excited to embark on a
            career as a Full-Stack Developer, I bring proficiency in 
            the MERN stack, with expertise in React, JavaScript, HTML,
             and CSS. Eager to contribute innovative solutions to a technology-driven firm.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
