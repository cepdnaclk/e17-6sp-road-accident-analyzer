import React, { forwardRef } from "react";
import TextLoop from "react-text-loop";
import bgImg from "../../assets/images/background/parallax-bg-5.jpg";
import Canvas from "../../elements/Canvas";

const HeroSliderOne = forwardRef((props, ref) => {

    const tags = ["HELLO", "I'M", "CREATIVE", "DESIGNER", "&", "FRONT-END DEVELOPER"];

  return (
    <section className="pt-0 pb-0" id="home" ref={ref}>
      <div className="full-screen-bg">
        <div
          className="parallax-img"
          style={{ background: `url(${bgImg})` }}
        ></div>
        <Canvas />
        <div className="hero-text-wrap">
          <div className="hero-text white-color">
            <div className="container text-center">
              <h1 className="white-color font-700">Stephen Burns</h1>
              <div className="animate-caption">
                <h2 className="white-color mt-30">
                  <TextLoop mask={true}>
                      {tags.map((tag, i) => (
                          <span key={i}>{tag}</span>
                      ))}
                  </TextLoop>
                </h2>
              </div>
              <p className="text-center mt-30">
                <a href="!#" className="btn btn-outline-white btn-circle">View Resume</a>
                <a href="!#" className="btn btn-dark btn-circle">Hire Me</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSliderOne;
