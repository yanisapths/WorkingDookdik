
import {useState} from 'react';
import "./contact.scss";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_032RqDsJ5pVUOJEXXUrrl");
export default function Contact() {
  const form = useRef();
  
const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)
  const [message,setMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_e2ykatg', 'template_oc4h2rg', form.current, 'user_032RqDsJ5pVUOJEXXUrrl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-mail" id="contact">
    <form ref={form} onSubmit={sendEmail}>
      <h1>Get In Touch</h1>
      <h3>If you'd like to say hi or question, My inbox is always open. I'll reply asap.</h3>
      <h3></h3>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" value="Send">Send</button>
      {message && <span>Thank you ! I'll reply ASAP.<Emoji label="Lightning Bolt" symbol="⚡"/></span> }
    </form>
    </div>
  );
};
