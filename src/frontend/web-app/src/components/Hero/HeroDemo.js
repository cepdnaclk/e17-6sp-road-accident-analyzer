import React from "react";
import bgImg from "../../assets/images/background/parallax-bg-19.jpg";

const HeroDemo = () => {
  return (
    <section className="pt-0" id="demo-header-section">
      <div id="demo">
        <div
          className="parallax-img"
          style={{
            background: `url(${bgImg}) center center / cover scroll no-repeat`,
          }}
        ></div>
        <div className="hero-text-wrap gradient-overlay-bg">
          <div className="hero-text white-color">
            <div className="container text-center">
              <h1 className="white-color text-uppercase font-700">Scoda</h1>
              <h2>
                Multipurpose Creative Agency
                <br /> HTML5 Template
              </h2>
              <h4 className="white-color text-uppercase mt-20">
                20+ Inpiration Page Demos | 75+
                <span className="font-700">Components</span> | 20+ Elements
              </h4>
              <p className="text-center mt-30">
                <a
                  href="https://themeforest.net/item/scoda-multipurpose-one-page-reactjs-template/26852224"
                  className="btn btn-outline-white btn-default"
                >
                  Purchase Now
                </a>
                <a
                  href="https://themeforest.net/item/scoda-multipurpose-one-page-reactjs-template/26852224"
                  className="btn btn-dark btn-default"
                >
                  Start a Project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDemo;
