import React from "react";
import aboutData from "../../data/About/about-home-agency-data.json";
import servicesData from "../../data/About/about-page-data.json";
import dataFeatures from "../../data/About/about-corporate-business.json";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import FeatureBoxThree from "../../elements/FeatureBox/FeatureBoxThree";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";
import FooterOne from "../../components/Footer/FooterOne";
import Icofont from "react-icofont";

const BoxedIcons = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Boxed Icons" />
    <section className="pb-0 first-ico-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2>Icon Style One</h2>
          </div>
        </div>
        <div className="row mt-50">
          {aboutData.map((service, i) => {
            return (
              <div
                key={service.id}
                className="col-md-4 feature-box text-center radius-icon"
              >
                <Icofont
                  icon={service.icon}
                  className="font-50px default-icon"
                />
                <h4 className="text-uppercase">{service.title}</h4>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2>Icon Style Two</h2>
          </div>
        </div>
        <div className="row mt-50">
          {servicesData.map((feature) => (
            <FeatureBoxThree
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </section>
    <section className="parallax-bg-4 fixed-bg" data-stellar-background-ratio="0.2">
      <div className="overlay-bg-dark"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading white-color">
            <h2>Icon Style Three</h2>
          </div>
        </div>
        <div className="row mt-50">
          {dataFeatures.map((feature) => (
            <FeatureBoxTwo
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              color="white"
            >
              {feature.text}
            </FeatureBoxTwo>
          ))}
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2>Icon Style Four</h2>
          </div>
        </div>
        <div className="row mt-50">
          {dataFeatures.map((feature) => (
            <FeatureBoxTwo
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
            >
              {feature.text}
            </FeatureBoxTwo>
          ))}
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default BoxedIcons;
