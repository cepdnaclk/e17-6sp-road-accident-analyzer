import React, { forwardRef } from "react";
import ContactForm from "./ContactForm";
import Map from "../Maps/Map";

const ContactUs = forwardRef((props, ref) => (
    <section className="contact-us white-bg" id="contact" ref={ref}>
      <div className="container">
        <div className="clearfix">
          <div className="bg-flex-right col-md-6 map-section">
            <Map />
          </div>
          <div className="col-about-left col-md-6 text-left">
            <ContactForm title="Contact Us" tagline="Stay in Touch" />
          </div>
        </div>
      </div>
    </section>
  ));

export default ContactUs;
