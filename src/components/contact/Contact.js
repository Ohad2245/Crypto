import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function About() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xhu4qcz",
      "template_kf8z3kc",
      form.current,
      "KQZ1FUigy-wCZY0js"
    );

    e.target.reset();
  };

  return (
    <div className="all">
      <div className="container_text">
        <p className="text">
          The purpose of this website is solely to display information regarding
          the products and services available on the Crypto.com App. It is not
          intended to offer access to any of such products and services. You may
          obtain access to such products and services on the Crypto.com App.
          Please note that the availability of the products and services on the
          Crypto.com App is subject to jurisdictional limitations. Crypto.com
          may not offer certain products, features and/or services on the
          Crypto.com App in certain jurisdictions due to potential or actual
          regulatory restrictions. The brands and the logos appearing on this
          website are registered trademarks by their respective brand owners.
          While we endeavor to publish and maintain accurate information on
          external listings, we do not guarantee the accuracy, completeness, or
          usefulness of any information on this site, nor do we adopt nor
          endorse, nor are we responsible for, the accuracy or reliability of
          any information submitted by other parties. You hereby agree that we
          are not providing our own opinions, advice, or recommendations.
        </p>
      </div>
      <section>
      <div className="blue">
          <h5>Get In Touch</h5>
          <h2>Contact Me!</h2>
      </div>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>ohad909881122@gmail.com</h5>
              <a
                href="mailto:ohad909881122@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </article>

            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>OhadCohen</h5>
              <a
                href="https://m.me/100000848391807"
                target="_blank"
                rel="noreferrer"
              >
                Send a Massage
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>050-909-8812</h5>
              <a
                href="https://api.whatsapp.com/send?phone=0509098812"
                target="_blank"
                rel="noreferrer"
              >
                Send a Massage
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
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
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
    </div>
  );
}

export default About;
