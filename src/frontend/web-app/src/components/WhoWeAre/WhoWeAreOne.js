import React from "react";
import Icofont from "react-icofont";
import {useLax} from "../../helpers/use-lax";
import aboutData from "../../data/About/about-home-agency-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";

const WhoWeAreOne = ({
  title,
  tagline,
  children,
  verticalWord,
  horizontalWord,
}) => {
  useLax();
  return (
    <section className="first-ico-box">
      <div className="dn-bg-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="left_parallax">
        <div className="vertical-text">
          <h3
            style={{ color: "blue" }}
            className="lax chunkyText lax-vertical font-700 dark-color"
            data-lax-preset="driftRight"
            data-lax-optimize="true"
          >
            {verticalWord}
          </h3>
        </div>
      </div>
      <div className="right_parallax">
        <h3
          className="lax chunkyText lax-horizontal font-700 red-color"
          data-lax-preset="driftLeft"
          data-lax-optimize="true"
        >
          {horizontalWord}
        </h3>
      </div>
      <div className="container">
        <div className="row">
          <HeadingSection title={title} tagline={tagline}>
            {children}
          </HeadingSection>
        </div>
        <div className="row mt-50">
          {aboutData.map((service, i) => (
            <div
              className="col-md-4 feature-box text-center radius-icon"
              key={service.id}
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
              data-aos-delay={`${i + 2}00`}
            >
              <Icofont icon={service.icon} className="font-50px default-icon" />
              <h4 className="text-uppercase">{service.title}</h4>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreOne;
