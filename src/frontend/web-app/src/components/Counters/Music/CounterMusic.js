import React, { useState } from "react";
import dataCounter from "../../../data/Counters/counter-music-data.json";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterMusic = () => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className="dark-bg pt-80 pb-80">
      <div className="container">
        <div className="row">
          {dataCounter.map((count) => (
            <div
              key={count.id}
              className="col-md-3 counter text-center col-sm-6"
            >
              <h2 className="count default-color font-700">
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp end={viewed ? count.value : 0} />
                </VisibilitySensor>
              </h2>
              <h3>{count.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterMusic;
