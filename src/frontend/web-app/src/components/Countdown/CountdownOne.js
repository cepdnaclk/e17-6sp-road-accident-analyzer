import React from "react";
import Countdown from "react-countdown";

const CountdownOne = ({ font }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <ul className="countdown">
        <li>
          <span className="hours">{days}</span>
          <p className={font ? font : null}>days </p>
        </li>
        <li>
          <span className="hours">{hours}</span>
          <p className={font ? font : null}>hours </p>
        </li>
        <li>
          <span className="minutes">{minutes}</span>
          <p className={font ? font : null}>minutes</p>
        </li>
        <li>
          <span className="seconds">{seconds}</span>
          <p className={font ? font : null}>seconds</p>
        </li>
      </ul>
    );
  };

  return (
    <section className="dark-bg pt-0 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="countdown-container-white mt-0 mb-0">
              <Countdown
                date={Date.now() + (6500000 * 60 * 48 + 5000)}
                renderer={renderer}
              ></Countdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownOne;
