import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import dataGallery from "../../../data/Gallery/gallery-travel-data.json";
import GalleryItem from "./GalleryItem";

const GalleryTravel = () => {
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
    <section className="dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 section-heading">
            <h2 className="text-uppercase white-color">Our Tours</h2>
          </div>
        </div>
        <div className="row mt-50">
          <div className="portfolio-container text-center">
            <ul id="portfolio-grid" className="two-column hover-two">
              {dataGallery.map((item) => (
                <GalleryItem
                  key={item.id}
                  image={item.image}
                  link={item.link}
                  openLightbox={openLightbox}
                />
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
};

export default GalleryTravel;
