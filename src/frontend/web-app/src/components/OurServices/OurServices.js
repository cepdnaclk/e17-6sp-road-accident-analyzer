import React, { forwardRef } from "react";
import dataServices from "../../data/Services/our-services-two.json";
import ServiceBox from "./ServiceBox";

const OurServices = forwardRef(({ serviceImg, title, tagline }, ref) => (
  <section className="white-bg" id="service" ref={ref}>
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 offset-md-7 offset-sm-5">
        <h2
          className="font-700"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={1000}
        >
          {title}
        </h2>
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {tagline}
        </h4>
        <div className="left-service-box pt-40 pb-20 row">
          {dataServices.map((service, i) => (
            <ServiceBox
              key={service.id}
              icon={service.icon}
              title={service.title}
              index={i}
            >
              {service.text}
            </ServiceBox>
          ))}
        </div>
      </div>
    </div>
  </section>
));

export default OurServices;
