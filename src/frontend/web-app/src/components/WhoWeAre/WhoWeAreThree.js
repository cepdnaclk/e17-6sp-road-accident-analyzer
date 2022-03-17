import React from "react";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";

const WhoWeAreThree = () => (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSection title="ROAD ACCIDENT ANALYZER" tagline="FOR COMMUNITY AWARENESS">
          
          In recent few years, We have observed a significant rising in road accients.
          Roughly, there is at least one death daily, due to road accidents. This is 
          a huge issue in the modern society and there was a big need for something to 
          reduce/prevent road accidents involving modern technology.<br></br><br></br>

          This is a free to use, web application which is made for the final goal of recucing
          road accients. We provide visualizations, major facts and different kinds of 
          predictions using machine learning technology. Anyone who wants to contribute 
          to prevent road accidents can use this application and analyze about road accidents.
          <br></br><br></br>

          <b>Let's make the road safe again!</b>

        </HeadingSection>
      </div>
      <div className="row mt-50">
        {dataFeatures.map((feature, i) => (
          <FeatureBoxTwo
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            index={i}
          >
            {feature.text}
          </FeatureBoxTwo>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreThree;
