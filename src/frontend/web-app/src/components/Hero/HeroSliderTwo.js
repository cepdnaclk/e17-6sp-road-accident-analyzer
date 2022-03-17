import React from "react";
import Swiper from "react-id-swiper";
import 'swiper/swiper-bundle.css';
import parse from "html-react-parser";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";

const HeroSliderTwo = ({ data }) => {
  const params = {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
                    background: `url(${require("../../assets/images/" +
                      slide.image)}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div
                  className={
                    "hero-text-wrap " + (slide.bg ? "gradient-overlay-bg" : "")
                  }
                >
                  <div className="hero-text white-color">
                    <div className="container text-center">
                      <h3 className="white-color font-400">
                          {slide.tagline ? slide.tagline : ""}
                        </h3>
                        <h1 className="white-color text-uppercase font-700 letter-spacing-5">
                          {slide.title}
                        </h1>
                      <h3 className="white-color font-400">
                        {slide.text ? parse(slide.text) : ""}
                      </h3>
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

export default HeroSliderTwo;
