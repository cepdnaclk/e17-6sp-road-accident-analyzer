import React from "react";
import Icofont from "react-icofont";
// import ReactWow from "react-wow";
import HeadingSection from "../HeadingSection/HeadingSection";
import aboutData from "../../data/About/about-home-agency-data.json";

const WhoWeAreSeven = () => (
  <section className="first-ico-box">
    <div className="container">
      <div className="row">
        <HeadingSection
          title="Who We Are"
          tagline="The world at your fingertips"
        >
          We are a fully in-house digital agency focusing on branding,
          marketing, web design and development with clients ranging from
          start-ups. We pride ourselves on partnering with clients in order to
          give the most transparent and educational experience.
        </HeadingSection>
      </div>
      <div className="row mt-50">
        {aboutData.map((service, i) => {
          return (
            // <ReactWow
            //   key={service.id}
            //   animation="fadeTop"
            //   delay={`0.${i + 1}s`}
            // >
              <div className="col-md-4 feature-box text-center radius-icon">
                <Icofont icon={service.icon} className="font-50px dark-icon" />
                <h4 className="text-uppercase">{service.title}</h4>
                <p>{service.text}</p>
              </div>
            // </ReactWow>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhoWeAreSeven;
