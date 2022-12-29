import "./contact.css"
import contact from "../../images/contact.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
 
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useRef } from "react";


import emailjs from '@emailjs/browser'


const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

alert("messee_coming")

emailjs.sendForm('service_qiwpuzo', 'template_eewcu4g', form.current, 'wQ6WQ5z3AoFpnxZUk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };






  return (
    <>

    <div className="contact_div">

      <img src={contact} alt=""  className="contact_ico" data-aos="flip-right"/>

    </div>
  

    <div id="contact">
     <h1 className="contact_text" data-aos="flip-left"> <u> Contact Me</u></h1>
    <div className="contact_main">
    
        <div className="left_con" data-aos="flip-left">

        

        <form ref={form} onSubmit={sendEmail}>
        <h1 className="get_in">Get In Touch</h1>
      <FormLabel>Name</FormLabel>
      <Input background="white" type="text" name="user_name" color='black'/>
      <FormLabel>Email</FormLabel>
      <Input background="white" type="email" name="user_email" color='black' />
      <FormLabel>Message</FormLabel>
      <Textarea background="white" name="message" color='black'/>
      <FormLabel></FormLabel>
      <Input background="#05e438" color="black" type="submit" value="Send" w="50%" align="center" />
    </form>

        </div>
        <div className="contact_details" data-aos="flip-right">

            <div>
                <h1>Email</h1>

                
                tarakkarmakar1434@gmail.com</div>
            <div><h1>Mobile</h1>+919382261576</div>
            <div><h1>Address</h1>
            Bankura ,West Bengal </div>
        </div>
      
    </div>
    </div>



    </>
  )
}

export default Contact
