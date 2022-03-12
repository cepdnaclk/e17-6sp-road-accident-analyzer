import React from "react";
import featuresData from "../../data/About/about-page-data.json";
import FeatureBoxThree from "../../elements/FeatureBox/FeatureBoxThree";

const WhoWeAreNine = () => (
  <section>
    <div className="container">
      <div className="row">
        {featuresData.map((feature,i) => (
          <FeatureBoxThree
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            index = {i}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreNine;
