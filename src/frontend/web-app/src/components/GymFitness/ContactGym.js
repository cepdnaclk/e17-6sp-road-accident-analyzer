import React, { useState, forwardRef } from "react";
import Icofont from "react-icofont";
import Map from "../Maps/Map";

const ContactGym = forwardRef((props, ref) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <section className="contact-us pt-0" id="contact" ref={ref}>
      <Map classAppend="wide" />
      <div className="container">
        <div className="row mt-120">
          <div className="col-sm-12 offset-md-2 col-md-8">
            <form
              name="contact-form"
              className="contact-me"
              id="contact-form"
              action="php/contact.php"
              method="POST"
            >
              <h2 className="font-400 cardo-font text-center">Contact Us</h2>
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
              <p className="text-center">
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-green btn-square"
                >
                  Send Message <Icofont icon="email" />
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactGym;
