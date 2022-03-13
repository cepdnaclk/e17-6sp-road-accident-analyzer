import React, { forwardRef } from "react";
import img from "../../assets/images/slides/home-bg-34.jpg";
import imgWaves from "../../assets/images/slides/wave.svg";
import imgPhone from "../../assets/images/slides/iPhone-01.png";
// import ReactWOW from "react-wow";

const ParallaxAppStyle = forwardRef((props, ref) => (
  <section className="pt-0 pb-0" id="home" ref={ref}>
    <div
      className="full-screen-bg"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-text-wrap app-gradient-overlay">
        <div className="hero-text white-color hero-text-sm">
          <div className="container text-left">
            <div className="row">
              <div className="col-md-6 pt-120 pb-100 col-sm-6">
                <h2
                  className="white-color font-100"
                  data-aos-delay={100}
                  data-aos={"fade-up"}
                >
                  <span className="font-700">Showcase</span> your App in
                  <span className="font-700">easy way</span>
                </h2>
                <p
                  className="white-color mt-30 lead"
                  data-aos-delay={300}
                  data-aos={"fade-up"}
                >
                  Started as early as internet we are the leading business
                  analytics solutions agency serving the digital empire from the
                  last two decades.
                </p>
                <p
                  className="text-left mt-30 app-btns"
                  data-aos-delay={400}
                  data-aos={"fade-up"}
                >
                  <a href="!#" className="btn btn-white btn-circle">
                    Buy Template
                  </a>
                </p>
              </div>
              <div className="col-md-4 offset-md-2 col-sm-4 offset-sm-2 mt-80">
                <div className="i-phones">
                  <img
                    className="img-fluid"
                    src={imgPhone}
                    alt=""
                    data-aos-delay={100}
                    data-aos={"fade-left"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-shape-img">
        <img className="img-fluid" alt="wave-shape" src={imgWaves} />
      </div>
    </div>
  </section>
));

export default ParallaxAppStyle;
