import React, { forwardRef, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import dataPortfolio from "../../data/Portfolio/portfolio-gym-data.json";
import Icofont from "react-icofont";

const classNameesGym = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(0);

  const closeLightbox = () => {
    setIsOpen(false);
  };
  const openLightbox = (e, photo) => {
    e.preventDefault();
    setPhoto(photo);
    setIsOpen(true);
  };

  return (
    <section className="grey-bg" id="classes" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2 className="font-400 cardo-font">Our classes</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="portfolio-container text-center">
            <ul id="portfolio-grid" className="three-column hover-two">
              {dataPortfolio.map((item) => (
                <li
                  className="portfolio-item gutter-space"
                  data-groups='["all", "print", "branding"]'
                  key={item.id}
                >
                  <div className="portfolio gallery-image-hover">
                    <div className="dark-overlay"></div>
                    <img
                      src={require("../../assets/images/" + item.image)}
                      alt=""
                    />
                    <div className="portfolio-wrap">
                      <div className="portfolio-description">
                        <h3 className="portfolio-title">{item.title}</h3>
                        <a href={process.env.PUBLIC_URL} className="links">
                          {item.category}
                        </a>
                      </div>
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href={item.link}
                            onClick={(e) => openLightbox(e, item.image)}
                          >
                            <Icofont icon="search-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {isOpen && (
              <Lightbox
                mainSrc={require("../../assets/images/" + photo)}
                onCloseRequest={() => closeLightbox()}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default classNameesGym;
