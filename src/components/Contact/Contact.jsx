import "./contact.css";
import contact from "../../images/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import github from "../../images/gitHub_black.png";

import inlogo from "../../images/inlogo.png";
import { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Alert,
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const openlInk = () => {
    window.open("https://www.linkedin.com/in/tarak-karmakar-876758234/");
  };
  const openGit = () => {
    window.open("https://github.com/Tarakkarmakar");
  };

  return (
    <>
 

      <div id="contact">
        <h1 className="contact_text" data-aos="flip-left">
          {" "}
        Contact Me
        </h1>
        <div className="contact_main">
          <div className="left_con" data-aos="flip-left">
            <form
              action="https://formspree.io/f/mgebezgy"
              method="POST"
              align="center"
            >
              <h1 className="get_in">Get In Touch</h1>
              <FormLabel>Name</FormLabel>
              <Input
                background="white"
                type="text"
                name="username"
                color="black"
                autoComplete="off"
                required
              />
              <FormLabel>Email</FormLabel>
              <Input
                background="white"
                type="email"
                name="Email"
                color="black"
                required
                autoComplete="off"
              />
              <FormLabel>Message</FormLabel>
              <Textarea
                background="white"
                name="message"
                color="black"
                autoComplete="off"
                required
              />
              <FormLabel></FormLabel>
              <Input
                background="#fd7e14"
                color="white"
                type="submit"
                value="Send"
                w="50%"
                align="center"

              />

            </form>
          </div>
          <div className="contact_details" data-aos="flip-right">
            <div>
              <h1>Email</h1>
              tarakkarmakar1434@gmail.com
            </div>
            <div>
              <h1>Mobile</h1>+919382261576
            </div>
            <div>
              <h1>Address</h1>
              Bankura ,West Bengal{" "}
            </div>
            <div id="logo_box_contact" >

          <div onClick={openGit}>
            <img
              className="git"
              width="27%"
              height="45%"
              src={github}
              alt="github"
            />
          </div>

          <div onClick={openlInk}>
            <img
              className="in"
              width="27%"
              height="45%"
              src={inlogo}
              alt="Lendein"
            />
          </div>

         
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
