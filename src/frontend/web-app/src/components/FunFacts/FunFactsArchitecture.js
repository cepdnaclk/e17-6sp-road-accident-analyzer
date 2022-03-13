import React, { useState } from "react";
import parse from "html-react-parser";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import dataCounters from "../../data/Counters/counter-data2.json";

const FunFactsArchitecture = ({ title, tagline, children }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section
      className="parallax-bg-17 fixed-bg fact-section"
      data-stellar-background-ratio="0.2"
    >
      <div className="overlay-bg"></div>
      <div className="container">
        <div className="row white-color">
          <div className="col-md-3">
            <h2
              className="text-uppercase font-700"
              data-aos={"fade-right"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              {title}
            </h2>
            <h4
              className="text-uppercase"
              data-aos={"fade-right"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              - {tagline} -
            </h4>
          </div>
          <div className="col-md-8">
            <div className="mt-15">
              <p
                data-aos={"fade-up"}
                data-aos-delay={200}
                data-aos-duration={700}
              >
                {children ? parse(children) : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-md-3"> </div>
          <div className="col-md-8">
            <div className="row">
              {dataCounters
                .filter((v, i) => i < 3)
                .map((counter, i) => (
                  <div
                    className="col-md-4 counter col-sm-6"
                    key={counter.id}
                    data-aos={"fade-up"}
                    data-aos-delay={`${i}00`}
                    data-aos-duration={700}
                  >
                    <h2 className="count white-color font-700 text-left">
                      <VisibilitySensor
                        onChange={viewChangeHandler}
                        delayedCall
                      >
                        <CountUp end={viewed ? counter.value : 0} />
                      </VisibilitySensor>
                    </h2>
                    <h3 className="text-left">{counter.title}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsArchitecture;
