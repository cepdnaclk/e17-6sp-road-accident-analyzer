import React from "react";
import ContactFormFive from "./ContactFormFive";

const ContactThree = () => (
  <section className="contact-us dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <ContactFormFive />
        </div>
        <div className="col-md-4">
          <h3 className="white-color">Postal Location</h3>
          <address>
            PO Box 16122 Toronto Eaton Centre,
            <br />
            220 The PATH Toronto, ON M5B 2H1, Canada
            <br />
            <abbr title="Phone">P:</abbr> (+1) 613 555-0105
            <br />
            <a href="mailto:#">alphadot@example.com</a>
          </address>
          <h3 className="white-color">Global Location</h3>
          <address>
            PO Box 16122 Toronto Eaton Centre,
            <br />
            220 The PATH Toronto, ON M5B 2H1, Canada
            <br />
            <abbr title="Phone">P:</abbr> (+1) 613 555-0105
          </address>
          <h3 className="white-color">Work Timings</h3>
          <p>
            <span>Mon - Fri: 10am to 7pm</span> <br />
            <span>Sat : 8am to 12pm</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactThree;
