import React from "react";
import Icofont from "react-icofont";

const GalleryItem = ({ image, link, openLightbox }) => (
  <li className="portfolio-item gutter-space">
    <div className="portfolio photo-gallery">
      <div className="dark-overlay"></div>
      <img src={require("../../../assets/images/" + image)} alt="" />
      <div className="portfolio-wrap">
        <ul className="portfolio-details">
          <li>
            <a
              className="alpha-lightbox"
              href={`/assets/images/${link}`}
              onClick={(e) => openLightbox(e, image)}
            >
              <Icofont icon="plus" className="font-40px" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>
);

export default GalleryItem;
