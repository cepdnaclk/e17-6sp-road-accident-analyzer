import React from "react";
import Icofont from "react-icofont";

const ProductItem = ({ image, links, openLightbox, space }) => (
  <li
    className={
      "portfolio-item portfolio-masonry-item " +
      (space === "true" ? "gutter-space" : "no-gutter")
    }
  >
    <div className="product-wrap">
      <img src={require("../../assets/images/" + image)} alt="" />
      <div className="product-caption">
        <div className="product-description text-center">
          <div className="product-description-wrap">
            <div className="product-title">
              <a
                href={process.env.PUBLIC_URL}
                className="alpha-lightbox"
                onClick={(e) => openLightbox(e, image)}
              >
                <Icofont icon="plus" className="font-40px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default ProductItem;
