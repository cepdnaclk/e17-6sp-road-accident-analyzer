import React from "react";
import dataTravel from "../../../data/WhyChooseUs/why-travel-data.json";
import Icofont from "react-icofont";

const WhyChooseTravel = () => (
  <section className="dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2 className="text-uppercase white-color">Why Choose Us</h2>
        </div>
      </div>
      <div className="row mt-50">
        {dataTravel.map((feature) => (
          <div
            className="col-md-3 feature-box text-center col-sm-6"
            key={feature.id}
          >
            <Icofont
              icon={feature.icon}
              className="font-40px dark-icon white-bg-icon circle-icon fade-icon"
            />
            <h5 className="white-color">{feature.title}</h5>
            <p className="white-color">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseTravel;
