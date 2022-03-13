import React from "react";
// import ReactWOW from "react-wow";

const CTATwo = ({ title, tagline, textButton, linkButton, children }) => (
  <section
    className="parallax-bg-4 fixed-bg"
    data-stellar-background-ratio="0.2"
  >
    <div className="overlay-bg-dark"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center white-color offset-md-3">
          {/* <ReactWOW animation="fadeTop" delay="0.1s"> */}
            <h2 className="cardo-font font-50px">{title}</h2>
          {/* </ReactWOW> */}
          {/* <ReactWOW animation="fadeTop" delay="0.2s"> */}
            <h4 className="text-uppercase cardo-font dark-color">{tagline}</h4>
          {/* </ReactWOW> */}
          {/* <ReactWOW animation="fadeTop" delay="0.3s"> */}
            <p className="font-20px mt-20 line-height-30">{children}</p>
          {/* </ReactWOW> */}
          {/* <ReactWOW animation="fadeTop" delay="0.4s"> */}
            <p className="mt-30">
              <a className="btn btn-color btn-circle" href={linkButton}>
                {textButton}
              </a>
            </p>
          {/* </ReactWOW> */}
        </div>
      </div>
    </div>
  </section>
);

export default CTATwo;
