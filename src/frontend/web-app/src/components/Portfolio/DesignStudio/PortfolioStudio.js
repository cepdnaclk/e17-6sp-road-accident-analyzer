import React from "react";
import Swiper from "react-id-swiper";
import 'swiper/swiper-bundle.css';
import dataPortfolio from "../../../data/Portfolio/portfolio-studio-data.json";
// import ReactWOW from "react-wow";

const PortfolioStudio = () => {
  const params = {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination-bullet",
      clickable: true,
    },
    renderBullet: (index, className) => {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="white-bg pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <div className="section-heading text-left">
                  {/* <ReactWOW animation="fadeTop" delay="0.1s"> */}
                    <h2 className="josefin-font">Featured Works</h2>
                  {/* </ReactWOW> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="scoda-swiper pagination-style-01">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Swiper {...params}>
              {dataPortfolio.map((item) => (
                <div className="swiper-slide" key={item.id}>
                  <div className="work-item-wrap">
                    <div className="work-item-thumbnail">
                      <a href={process.env.PUBLIC_URL}>
                        <img
                          src={require("../../../assets/images/" + item.image)}
                          alt={item.title}
                        />
                      </a>
                    </div>
                    <div className="work-item-info">
                      <h3 className="josefin-font">{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStudio;
