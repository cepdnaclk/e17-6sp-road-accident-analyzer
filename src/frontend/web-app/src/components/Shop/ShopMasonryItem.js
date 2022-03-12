import React from "react";

const ShopMasonryItem = ({ image, title, currency, price, oldPrice }) => (
  <div className="col-12 portfolio-masonry-item">
    <div className="product">
      <div className="product-wrap">
        <img
          src={require("../../assets/images/" + image)}
          className="img-fluid"
          alt="team-01"
        />
        <div className="product-caption">
          <div className="product-description text-center">
            <div className="product-description-wrap">
              <div className="product-title">
                <a href="!#" className="btn btn-color btn-circle">
                  ADD TO CART
                  <span className="icon">
                    <i className="mdi mdi-cart"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail">
        <h4>{title}</h4>
        <p>
          {price} <span className="old-price">{currency + oldPrice}</span>
        </p>
      </div>
    </div>
  </div>
);

export default ShopMasonryItem;
