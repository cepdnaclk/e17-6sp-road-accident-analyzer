import React from "react";
import Icofont from "react-icofont";

const CTAVideo = ({ title, tagline, textButton, linkButon }) => (
  <section className="parallax-bg-14 fitness-section">
    <div className="overlay-bg"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center offset-md-2 white-color">
          <h1 className="font-400 cardo-font">{title}</h1>
          <h2 className="text-uppercase">{tagline}</h2>
          <p className="text-center mt-30">
            <a
              className="btn btn-white btn-square btn-animate"
              href={linkButon}
            >
              <span>
                {textButton} <Icofont icon="simple-right" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CTAVideo;
