import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import countersData from "../../data/Counters/counter-data1.json";

const CounterOne = ({ bg, type }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className={(bg ? bg : "dark-bg") + " pt-80 pb-80"}>
      {bg === "white-bg" || bg === "dark-bg" ? null : (
        <div className="parallax-overlay"></div>
      )}
      <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <div className="row">
          {countersData.map((counter, i) => (
            <div
              className="col-md-3 counter text-center col-sm-6"
              key={counter.id}
              data-aos-delay={`${i}00`}
              data-aos={"fade-up"}
              data-aos-duration={1000}
              data-aos-easing={"ease-in-sine"}
            >
              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  <CountUp end={viewed ? counter.value : 0} />
                </VisibilitySensor>
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                {counter.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterOne;
