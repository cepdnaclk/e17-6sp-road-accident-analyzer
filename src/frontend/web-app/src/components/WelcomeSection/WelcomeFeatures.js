import React from "react";
import dataServices from "../../data/Services/our-services-two.json";
import FeatureBoxOne from "../../elements/FeatureBox/FeatureBoxOne";

const WelcomeFeatures = ({ title, tagline }) => (
  <div className="col-md-4 col-sm-12 blue-bg">
    <div className="col-inner spacer white-color">
      <h2
        className="cardo-font font-500"
        data-aos={"fade-up"}
        data-aos-delay={100}
        data-aos-duration={1000}
      >
        {title}
      </h2>
      <h4
        className="text-uppercase cardo-font dark-color"
        data-aos={"fade-up"}
        data-aos-delay={100}
        data-aos-duration={1000}
      >
        {tagline}
      </h4>
      <div className="pt-40 pb-20">
        {dataServices.map((feature, i) => (
          <FeatureBoxOne
            key={feature.id}
            title={feature.title}
            icon={feature.icon}
            index={i}
          >
            {feature.text}
          </FeatureBoxOne>
        ))}
      </div>
    </div>
  </div>
);

export default WelcomeFeatures;
