import React, { useRef } from "react";
import "./contact.css";

import emailjs from "emailjs-com";
import { Email, Telegram, WhatsApp } from "@mui/icons-material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhmyh7",
        "template_wbpqpr",
        form.current,
        "Po8nwYiPRh31wRCkt"
      )
      .then(
        (result) => {
          console.log(result.text,'gamam');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <h5>Get In Touch</h5>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <Email className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gizawag123@gmail.com</h5>
            <a href="mailto:gizawag123@gmail.com" >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <Telegram className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Gizaw</h5>
            <a href="https://m.me/gizaw" >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <WhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+251970454065</h5>
            <a
              href="https://api.whatsapp.com/send?phone=70454065"
              
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
