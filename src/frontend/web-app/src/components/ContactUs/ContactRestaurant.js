import React, { forwardRef } from "react";
import ContactFormFour from "./ContactFormFour";
import HeadingTwo from "../HeadingSection/HeadingTwo";

const ContactRestaurant = forwardRef((props, ref) => (
  <section className="contact-us pb-140" id="bookAtable" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingTwo title="Book a Table" />
      </div>
      <div className="row mt-50">
        <div className="col-sm-12 offset-md-2 col-md-8">
          <ContactFormFour />
        </div>
      </div>
    </div>
  </section>
));

export default ContactRestaurant;
