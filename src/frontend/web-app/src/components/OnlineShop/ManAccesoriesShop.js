import React from "react";
import dataAccessories from "../../data/OnlineShop/man-accesories-data.json";
import HeadingSeven from "../HeadingSection/HeadingSeven";
import Icofont from "react-icofont";

const ManAccesoriesShop = () => (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSeven title="Man Accessories" tagline="Love Shopping Again" />
      </div>
      <div className="row mt-50">
        {dataAccessories.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
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
                            <Icofont icon="icon" />
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

export default ManAccesoriesShop;
