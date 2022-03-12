import React from "react";
import servicesData from "../../data/About/about-page-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";
import FeatureBoxThree from "../../elements/FeatureBox/FeatureBoxThree";

const WhoWeAreTwo = ({ title, tagline, children }) => (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSection title={title} tagline={tagline}>
          {children}
        </HeadingSection>
      </div>
      <div className="row mt-50">
        {servicesData.map((feature, i) => (
          <FeatureBoxThree
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            index={i}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreTwo;
