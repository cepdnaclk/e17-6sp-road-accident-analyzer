import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";

const RestaurantSlider = forwardRef(({ data }, ref) => (
  <section className="pt-0 pb-0" id="home" ref={ref}>
    <div className="slider-bg flexslider">
      <ul className="slides">
        <Swiper>
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="slide-img"
                style={{
                  background: `url(${require("../../assets/images/" +
                    slide.image)}) center center / cover scroll no-repeat`,
                }}
              ></div>
              <div
                className={
                  "hero-text-wrap restaurant-content " +
                  (slide.bg ? "gradient-overlay-bg" : "")
                }
              >
                <div className="hero-text white-color text-center">
                  <div className="container">
                    <h2 className="white-color">
                      {slide.tagline ? slide.tagline : ""}
                    </h2>
                    <h1 className="white-color">{slide.title}</h1>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  </section>
));

export default RestaurantSlider;
