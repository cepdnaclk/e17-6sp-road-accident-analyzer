import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import parse from "html-react-parser";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";

const HeroSliderSeven = ({ data }) => (
  <section className="pt-0 pb-0">
    <div className="slider-bg flexslider">
      <ul className="slides">
        <Swiper>
          <SwiperSlide key={data.id}>
            <div
              className="slide-img"
              style={{
                background: `url(${require("../../assets/images/" +
                  data.image)}) center center / cover scroll no-repeat`,
              }}
            ></div>
            <div
              className={
                "hero-text-wrap " + (data.bg ? "gradient-overlay-bg" : "")
              }
            >
              <div className="hero-text white-color">
                <div className="container text-center">
                  <h3 className="white-color font-400">{data.tagline}</h3>
                  <h1 className="white-color font-700">{data.title}</h1>
                  <h3 className="white-color font-400">
                    {data.text ? parse(data.text) : ""}
                  </h3>
                  {data.buttons.length !== 0 ? (
                    <p className="text-center mt-30">
                      <SliderButtons buttons={data.buttons} />
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  </section>
);

export default HeroSliderSeven;
