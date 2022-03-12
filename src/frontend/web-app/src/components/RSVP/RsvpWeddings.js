import React from "react";
import CountdownOne from "../Countdown/CountdownOne";

const RsvpWeddings = () => (
  <section className="dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2 className="cardo-font white-color">ATTENDING</h2>
          <div className="mt-30">
            <p>
              Immature love says: "I love you because I need you." Mature love
              says: "I need you because I love you." Donec imperdiet sapien vel
              massa lobortis, maximus interdum lectus lacinia.
            </p>
            <a href="!#" className="btn btn-pink btn-square mt-20">
              RSVP
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="countdown-container-white">
            <CountdownOne font="cardo-font"/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RsvpWeddings;
