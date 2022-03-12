import React, { forwardRef, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Icofont from "react-icofont";
import dataEvents from "../../../data/Portfolio/portfolio-music-data.json";

const EventsMusic = forwardRef((props, ref) => {
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
    <section id="event" className="pb-0" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 section-heading">
            <h2 className="text-uppercase">Our Events</h2>
            <hr className="text-center default-bg" />
            <h3 className="cardo-font default-color">
              Music Makes the World go Round
            </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-50">
          <div className="portfolio-container text-center">
            <ul id="portfolio-grid" className="three-column hover-two">
              {dataEvents.map((item) => (
                <li className="portfolio-item" key={item.id}>
                  <div className="portfolio photo-gallery">
                    <div className="dark-overlay"></div>
                    <img
                      src={
                        require("../../../assets/images/" + item.image)
                      }
                      alt=""
                    />
                    <div className="portfolio-wrap">
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href={"assets/images/" + item.link}
                            onClick={(e) => openLightbox(e, item.image)}
                          >
                            <Icofont icon="plus" className="font-40px" />
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
                mainSrc={require("../../../assets/images/" + photo)}
                onCloseRequest={() => closeLightbox()}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default EventsMusic;
