import React from "react";
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
import "swiper/swiper-bundle.css";
import parse from "html-react-parser";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";
SwiperCore.use([EffectFade, Navigation, Autoplay, Pagination]);

const HeroSliderCombined = ({ data, font }) => (
  <section className="pt-0 pb-0">
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
          {data.map((slide) =>
            slide.image ? (
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
                    <div className="container text-left">
                      <h2
                        className={
                          font
                            ? font
                            : "white-color font-500 letter-spacing-5 wow fadeInUp"
                        }
                      >
                        {slide.title ? parse(slide.title) : ""}
                      </h2>
                      <h3 className="white-color font-400">
                        {slide.text ? parse(slide.text) : ""}
                      </h3>
                      {slide.buttons.length !== 0 ? (
                        <p className="text-left mt-30">
                          <SliderButtons buttons={slide.buttons} />
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={slide.id}>
                <div className="hero-text-wrap gradient-overlay-bg">
                  <div className="hero-text white-color">
                    <div className="container text-left">
                      <h2 className="cardo-font">
                        {slide.title ? parse(slide.title) : ""}
                      </h2>
                      <p className="text-left mt-30">
                        <SliderButtons buttons={slide.buttons} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="homepage-hero-module">
                  <div className="video-container">
                    <div className="filter"></div>
                    <video autoPlay loop className="fillWidth">
                      {slide.videoMp4 && (
                        <source
                          src={require("../../assets/images/" + slide.videoMp4)}
                          type="video/mp4"
                        />
                      )}
                      {slide.videoWeb && (
                        <source
                          src={require("../../assets/images/" + slide.videoWeb)}
                          type="video/webm"
                        />
                      )}
                    </video>
                    <div className="poster hidden">
                      <img
                        src={require("../../assets/images/" + slide.videoImage)}
                        alt="video-img"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </ul>
    </div>
  </section>
);

export default HeroSliderCombined;
