import React from "react";
import dataServices from "../../../data/Services/services-studio-data.json";
import Icofont from "react-icofont";
// import ReactWOW from "react-wow";

const WhoStudioTwo = () => (
  <section className="first-ico-box dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="section-heading text-left">
            {/* <ReactWOW animation="fadeTop" delay="0.1s"> */}
              <h2 className="gradient-color josefin-font">
                Don't wait just launch your startup now! Our digital marketing
                strategists.
              </h2>
            {/* </ReactWOW> */}
            {/* <ReactWOW animation="fadeTop" delay="0.3s"> */}
              <p className="mt-30">
                Start your fast-growing company or business that aims to fulfill
                the needs or a gap in a relevant marketplace with us.
              </p>
            {/* </ReactWOW> */}
          </div>
        </div>
      </div>
      <div className="row mt-50">
        {dataServices.map((service) => (
          // <ReactWOW animation="fadeTop" delay="0.1s">
            <div
              className="col-md-3 feature-box text-left radius-icon"
              key={service.id}
            >
              <Icofont
                icon={service.icon}
                className="font-50px gradient-color"
              />
              <h4 className="text-uppercase white-color josefin-font">
                {service.title}
              </h4>
              <p>{service.text}</p>
            </div>
          // </ReactWOW>
        ))}
      </div>
    </div>
  </section>
);

export default WhoStudioTwo;
