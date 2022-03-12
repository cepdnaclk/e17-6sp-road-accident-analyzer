import React from "react";
import Icofont from "react-icofont";

const BannerShop = () => (
  <section className="pb-0">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="banner-box man-bg">
            <div className="overlay-bg-dark"></div>
            <div className="relative white-color">
              <h2 className="text-uppercase font-700">Man's Clothing</h2>
              <h4 className="cardo-font">Free Delivery on order over $100</h4>
              <a href="!#" className="btn btn-white btn-square btn-animate mt-20">
                <span>
                  Buy Now <Icofont icon="simple-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="banner-box woman-bg">
            <div className="overlay-bg-dark"></div>
            <div className="relative white-color">
              <h2 className="text-uppercase font-700">Woman's Clothing</h2>
              <h4 className="cardo-font">Free Delivery on order over $100</h4>
              <a href="!#" className="btn btn-white btn-square btn-animate mt-20">
                <span>
                  Buy Now <Icofont icon="simple-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BannerShop;
