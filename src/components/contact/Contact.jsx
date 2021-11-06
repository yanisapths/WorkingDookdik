
//import {useState} from 'react';
import "./contact.scss";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_032RqDsJ5pVUOJEXXUrrl");
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e2ykatg', 'template_oc4h2rg', form.current, 'user_032RqDsJ5pVUOJEXXUrrl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact" id="contact">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};
