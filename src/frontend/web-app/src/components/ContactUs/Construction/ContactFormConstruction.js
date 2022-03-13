import React, { useState } from "react";

const ContactFormConstruction = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form
      name="contact-form"
      id="contact-form"
      action="php/contact.php"
      method="POST"
      className="app-form"
    >
      <div className="messages"></div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
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
        </div>
        <div className="col-md-6 col-sm-6">
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
        </div>
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
      <div className="text-center">
        <button
          type="submit"
          name="submit"
          className="btn btn-yellow btn-square"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactFormConstruction;
