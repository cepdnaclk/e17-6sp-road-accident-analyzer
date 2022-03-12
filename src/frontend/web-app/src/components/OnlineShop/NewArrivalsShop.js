import React from "react";
import dataArrivals from "../../data/OnlineShop/new-arrivals-data.json";
import HeadingSeven from "../HeadingSection/HeadingSeven";
import Icofont from "react-icofont";

const NewArrivalsShop = () => (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSeven title="New Arrivals" tagline="Treasure Everyday" />
      </div>
      <div className="row mt-50">
        {dataArrivals.map((item) => (
          <div className="col-md-3 col-sm-6" key={item.id}>
            <div className="product">
              <div className="product-wrap">
                <img
                  src={require("../../assets/images/" + item.image)}
                  className="img-fluid"
                  alt="team-01"
                />
                <div className="product-caption">
                  <div className="product-description text-center">
                    <div className="product-description-wrap">
                      <div className="product-title">
                        <a href="!#" className="btn btn-white btn-square">
                          ADD TO CART
                          <span className="icon">
                            <Icofont icon="cart" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-detail">
                <h4>{item.title}</h4>
                <p>
                  {item.currency + item.price + " "}
                  <span className="old-price">
                    {item.currency + item.oldprice}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewArrivalsShop;
