import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import countersData from "../../data/Counters/counter-data2.json";

const CountersThree = ({ type }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className="default-bg pt-80 pb-80">
      <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <div className="row">
          {countersData.map((counter, i) => (
            <div
              className="col-md-3 counter text-center col-sm-6"
              key={counter.id}
              data-aos={"fade-up"}
              data-aos-delay={`${i}00`}
              data-aos-duration={1000}
            >
              <h2 className="count white-color font-700">
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp end={viewed ? counter.value : 0} />
                </VisibilitySensor>
              </h2>
              <h3>{counter.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersThree;
