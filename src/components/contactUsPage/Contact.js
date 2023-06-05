import React from "react";
import "../../styles/Contact.css";
import ContactForm from "./ContactForm";

// left panel of Contact Us Page
export function Contact() {
  return (
    <>
      <div className="main-contain">
        <div className="contain">
          <div className="title-contact">
            <h2>Contact Business Sales Team </h2>
          </div>
          <div className="title-contact-text">
            <p>Already a customer or need help with a billing issue?</p>
          </div>
          <div className="info-title-text-na">
            <h5>NORTH AMERICA SALES</h5>
            <div className="ph-text-area-na">
              <i className="fa-solid fa-phone "></i>
              <p className="ph-text">+1 703 577 5991</p>
            </div>
            <div className="ph-text-area-na">
              <i class="fa-solid fa-envelope"></i>
              <p className="ph-text">john.doe@gmail.com</p>
            </div>
          </div>
          <div className="info-title-text-other">
            <h5>EUROPE / ASIA / AUSTRALIA / PACIFIC SALES </h5>
            <div className="ph-text-area-other">
              <p className="ph-text-other">
                Fill out your details to be contacted.
              </p>
            </div>
          </div>
          <div className="social-media-icons">
            <a href="/" className="social-me-i">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/" className="social-me-i">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <div className="left-circle"></div>
            <div className="right-circle">
              <div className="inner-circle"></div>
            </div>
          </div>
        </div>
        <div className="contain-form">
          <div className="contain-form-title">
            <h1>Contact Us</h1>
          </div>
          <div className="contain-form-text">
            <p>
              Fill out the form our sales team will get back to you within 24
              hours, or scroll down for more ways to get in touch
            </p>
          </div>
          <div className="contain-form-design">
            <ContactForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
