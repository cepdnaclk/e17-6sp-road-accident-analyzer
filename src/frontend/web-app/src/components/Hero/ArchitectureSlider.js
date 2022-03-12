import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  EffectFade,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Autoplay, Pagination]);

const ArchitectureSlider = forwardRef(({ data }, ref) => (
  <section className="pt-0 pb-0" id="home" ref={ref}>
    <div className="slider-bg flexslider">
      <ul className="slides">
        <Swiper
          pagination={{ clickable: true }}
          navigation
          loop={true}
          grabCursor={true}
          effect={"fade"}
          autoplay={{ delay: 7000 }}
        >
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
                  "hero-text-wrap " + (slide.bg ? "gradient-overlay-bg" : "")
                }
              >
                <div className="hero-text white-color">
                  <div className="container text-center">
                    <h3 className="white-color font-400 letter-spacing-5 text-uppercase">
                      {slide.tagline ? slide.tagline : ""}
                    </h3>
                    <h2 className="white-color font-700">{slide.title}</h2>
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

export default ArchitectureSlider;
