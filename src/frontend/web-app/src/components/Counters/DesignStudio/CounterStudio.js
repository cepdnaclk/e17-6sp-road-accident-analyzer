import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import ReactWow from "react-wow";
import countersData from "../../../data/Counters/counter-data1.json";

const CounterStudio = () => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className=" pt-80 pb-80">
      <div className="container">
        <div className="row">
          {countersData.map((counter, i) => (
            // <ReactWow
            //   key={counter.id}
            //   animation="fadeInUp"
            //   delay={`0.${i + 1}s`}
            // >
              <div className="col-md-3 counter text-center col-sm-6">
                <h2 className="count font-700 gradient-color josefin-font">
                  <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                    <CountUp end={viewed ? counter.value : 0} />
                  </VisibilitySensor>
                </h2>
                <h3 className="dark-color josefin-font">{counter.title}</h3>
              </div>
            // </ReactWow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterStudio;
