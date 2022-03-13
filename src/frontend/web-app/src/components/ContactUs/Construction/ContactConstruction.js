import React from 'react';
import ContactFormConstruction from './ContactFormConstruction';

const ContactConstruction = () => (
    <section className="contact-us dark-bg" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="text-uppercase white-color">Contact Us</h2>
          <hr className="text-center yellow-bg" />
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-8 offset-md-2">
          <ContactFormConstruction />
        </div>
      </div>
    </div>
  </section>
);

export default ContactConstruction;