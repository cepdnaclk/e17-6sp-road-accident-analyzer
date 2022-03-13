import React from "react";

const ShopItem = ({ layout, image, title, currency, price, oldPrice }) => (
  <div
    className={"col-sm-6 " + (layout === "standard" ? "col-md-6" : "col-md-3")}
  >
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
                <a
                  href={process.env.PUBLIC_URL}
                  className="btn btn-color btn-circle"
                >
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

export default ShopItem;
