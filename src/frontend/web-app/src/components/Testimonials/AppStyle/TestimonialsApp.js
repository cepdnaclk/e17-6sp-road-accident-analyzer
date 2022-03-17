import React, { forwardRef } from "react";
import Icofont from "react-icofont";
import imgWave from "../../../assets/images/slides/wave-2.svg";

const TestimonialsApp = forwardRef(({toggler, setToggler}, ref) => (
  <section
    ref={ref}
    className="parallax-bg-12 fixed-bg app-bg"
    data-stellar-background-ratio="0.2"
    id="review"
  >
    <div className="gradient-overlay-bg"></div>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading white-color">
          <h1 className="font-700">
            <span className="font-300">Take</span> quick overview
            <br />
            <span className="font-300">of this</span> App
          </h1>
          <a
            className="popup-youtube"
            href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
            onClick={(e) => {
              e.preventDefault();
              setToggler(!toggler);
            }}
          >
            <div className="play-button mt-20">
              <Icofont icon="ui-play" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="bottom-shape-img-2">
      <img className="img-fluid" alt="wave-shape" src={imgWave} />
    </div>
  </section>
));

export default TestimonialsApp;
