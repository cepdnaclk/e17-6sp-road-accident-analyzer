import React, { useState } from "react";
import Icofont from "react-icofont";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import counterData from "../../data/Counters/counter-data2.json";

const CounterTwo = ({ bg, type }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className={"pt-80 pb-80 " + (bg ? bg : "dark-bg")}>
      <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <div className="row">
          {counterData.map((counter, i) => (
            <div
              key={counter.id}
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay={`${i}00`}
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
            >
              <Icofont icon={counter.icon} className="default-icon font-30px" />
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

export default CounterTwo;
