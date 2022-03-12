import React from "react";
import dataDigital from "../../data/Services/our-services-one.json";
import HeadingFive from "../HeadingSection/HeadingFive";
import Icofont from "react-icofont";

const WhoWeAreSix = ({ title, tagline }) => (
  <section className="first-ico-box white-bg">
    <div className="container">
      <div className="row">
        <HeadingFive title={title} tagline={tagline} />
      </div>
      <div className="row mt-50">
        {dataDigital.map((service, i) => (
          <div
            key={service.id}
            className="col-md-4 feature-box text-center"
            data-aos={"fade-up"}
            data-aos-delay={`${i}00`}
            data-aos-duration={700}
          >
            <Icofont icon={service.icon} className="font-50px gradient-color" />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreSix;
