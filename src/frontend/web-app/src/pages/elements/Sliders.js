import React from "react";
import Slider from "react-slick";
import Swiper from "react-id-swiper";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import slide1 from "../../assets/images/slides/home-bg-8.jpg";
import slide2 from "../../assets/images/slides/home-bg-9.jpg";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FooterOne from "../../components/Footer/FooterOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";

const Sliders = () => {
  const slickSet = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slide: "li",
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const params = {
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <Loader>
      <HeaderOne />
      <PageTitleWidget title="Sliders" />
      <section className="pb-100 sliders-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2 className="text-uppercase">Swiper Slider</h2>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-md-12">
              <Swiper {...params}>
                <div
                  className="item"
                  style={{
                    background: `url(${slide1}) center center / cover scroll no-repeat`,
                  }}
                >
                  <div className="hero-text-wrap">
                    <div className="hero-text">
                      <div className="container text-center">
                        <h2 className="white-color lora-font mt-30">
                          Slide One
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  style={{
                    background: `url(${slide2}) center center / cover scroll no-repeat`,
                  }}
                >
                  <div className="hero-text-wrap">
                    <div className="hero-text">
                      <div className="container text-center">
                        <h2 className="white-color lora-font mt-30">
                          Slide Two
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-md-6 mb-20">
              <Swiper {...params}>
                <div
                  className="item"
                  style={{
                    background: `url(${slide1}) center center / cover scroll no-repeat`,
                  }}
                >
                  <div className="hero-text-wrap">
                    <div className="hero-text">
                      <div className="text-center">
                        <h2 className="white-color lora-font mt-30">
                          Slide One
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  style={{
                    background: `url(${slide2}) center center / cover scroll no-repeat`,
                  }}
                >
                  <div className="hero-text-wrap">
                    <div className="hero-text">
                      <div className="text-center">
                        <h2 className="white-color lora-font mt-30">
                          Slide Two
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Swiper>
            </div>
            <div className="col-md-6 mb-20">
              <Swiper {...params}>
                <div
                  className="item"
                  style={{
                    background: `url(${slide1}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div
                  className="item"
                  style={{
                    background: `url(${slide2}) center center / cover scroll no-repeat`,
                  }}
                ></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-100 pt-0 sliders-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2 className="text-uppercase">Slick Slider</h2>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-md-12">
              <Slider {...slickSet}>
                <div>
                  <div
                    className="slide-img-static"
                    style={{
                      background: `url(${slide1}) center center / cover scroll no-repeat`,
                    }}
                  ></div>
                  <div className="hero-text-wrap">
                    <div className="hero-text white-color">
                      <div className="container text-center">
                        <h2 className="white-color lora-font mt-30">
                          Slide One
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="slide-img-static"
                    style={{
                      background: `url(${slide2}) center center / cover scroll no-repeat`,
                    }}
                  ></div>
                  <div className="hero-text-wrap">
                    <div className="hero-text">
                      <div className="container text-center">
                        <h2 className="white-color lora-font mt-30">
                          Slide Two
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-md-6 mb-20">
              <Slider {...slickSet}>
                <div>
                  <div
                    className="slide-img-static"
                    style={{
                      background: `url(${slide1}) center center / cover scroll no-repeat`,
                    }}
                  ></div>
                  <div className="hero-text-wrap">
                    <div className="hero-text white-color">
                      <div className="text-center">
                        <h2 className="white-color lora-font mt-30">
                          Slide One
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="slide-img-static"
                    style={{
                      background: `url(${slide2}) center center / cover scroll no-repeat`,
                    }}
                  ></div>
                  <div className="hero-text-wrap">
                    <div className="hero-text">
                      <div className="text-center">
                        <h2 className="white-color lora-font mt-30">
                          Slide Two
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-md-6 mb-20">
              <Slider {...slickSet}>
                <div>
                  <div
                    className="slide-img-static"
                    style={{
                      background: `url(${slide1}) center center / cover scroll no-repeat`,
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    className="slide-img-static"
                    style={{
                      background: `url(${slide1}) center center / cover scroll no-repeat`,
                    }}
                  ></div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <ClientsBrand classAppend="mt-50">
        <HeadingSection title="CLIENT CAROUSEL" />
      </ClientsBrand>
      <FooterOne />
    </Loader>
  );
};

export default Sliders;
