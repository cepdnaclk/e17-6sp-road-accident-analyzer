import React, { useState, forwardRef } from "react";
import Map from "../../Maps/Map";

const ContactMusic = forwardRef((props, ref) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <section className="contact-us white-bg" id="contact" ref={ref}>
      <div className="container">
        <div className="clearfix">
          <div className="bg-flex col-md-6 map-section bg-flex-left">
            <Map />
          </div>
          <div className="col-about-right col-md-6 offset-md-6">
            <h2 className="cardo-font">Contact Us</h2>
            <hr className="text-center default-bg left-line" />
            <h3 className="cardo-font default-color">Play With The Big Boys</h3>
            <form
              name="contact-form"
              id="contact-form"
              action="php/contact.php"
              method="POST"
              className="mt-50"
            >
              <div className="messages"></div>
              <div className="form-floating">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  required="required"
                  placeholder="Your Name"
                  data-error="Your Name is Required"
                  value={inputs.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name">Name</label>
                <div className="help-block with-errors mt-20"></div>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-error="Please Enter Valid Email"
                  value={inputs.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <div className="help-block with-errors mt-20"></div>
              </div>
              <div className="form-floating">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                  data-error="Please, Leave us a message"
                  value={inputs.message}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="message">Message</label>
                <div className="help-block with-errors mt-20"></div>
              </div>
              <button
                type="submit"
                name="submit"
                className="btn btn-color btn-square"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactMusic;
