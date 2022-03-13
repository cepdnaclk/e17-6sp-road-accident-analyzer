import React from "react";
import parse from "html-react-parser";
// import ReactWOW from "react-wow";

const CTAFour = ({ title, tagline, textButton, children }) => (
  <section className="dark-bg">
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
            <p className="font-20px mt-20 line-height-30">
              {children ? parse(children) : ""}
            </p>
          {/* </ReactWOW> */}
          {/* <ReactWOW animation="fadeTop" delay="0.4s"> */}
            <p className="mt-30">
              <a href="!#" className="btn btn-color btn-circle">
                {textButton}
              </a>
            </p>
          {/* </ReactWOW> */}
        </div>
      </div>
    </div>
  </section>
);

export default CTAFour;
