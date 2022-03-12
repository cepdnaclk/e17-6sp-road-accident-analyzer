import React, { useState } from "react";

const ContactForm = ({ title, tagline }) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      {title && (
        <h2
          className="text-uppercase font-700"
          data-aos-delay={500}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
          {title}
        </h2>
      )}
      {tagline && (
        <h4
          className="text-uppercase"
          data-aos-delay={500}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
          - {tagline} -
        </h4>
      )}
      <form
        name="contact-form"
        id="contact-form"
        action="php/contact.php"
        method="POST"
        className="mt-50"
      >
        <div className="messages"></div>
        <div
          className="form-floating"
          data-aos-delay={500}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
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
        <div
          className="form-floating"
          data-aos-delay={600}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
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
        <div
          className="form-floating"
          data-aos-delay={700}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
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
          className="btn btn-color btn-circle"
          data-aos-delay={800}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
          Book Now
        </button>
      </form>
    </>
  );
};

export default ContactForm;
