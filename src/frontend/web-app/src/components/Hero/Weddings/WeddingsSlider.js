import React from "react";
import Swiper from "react-id-swiper";
import 'swiper/swiper-bundle.css';
import SliderButtons from "../../../elements/SliderButtons/SliderButtons";

const WeddingsSlider = ({ data }) => {
  const params = {
    loop: false,
  };

  return (
    <section className="pt-0 pb-0">
      <div className="slider-bg flexslider">
        <ul className="slides">
          <Swiper {...params}>
            {data.map((slide) => (
              <li key={slide.id}>
                <div
                  className="slide-img"
                  style={{
                    background: `url(${
                      require("../../../assets/images/" + slide.image)
                    }) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div
                  className={
                    "hero-text-wrap " + (slide.bg ? "gradient-overlay-bg" : "")
                  }
                >
                  <div className="hero-text white-color text-center">
                    <div className="container">
                      <h2 className="white-color great-font">
                        {slide.tagline ? slide.tagline : ""}
                      </h2>
                      <h1 className="white-color great-font">{slide.title}</h1>
                      {slide.buttons.length !== 0 ? (
                        <p className="text-center mt-30">
                          <SliderButtons buttons={slide.buttons} />
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default WeddingsSlider;
