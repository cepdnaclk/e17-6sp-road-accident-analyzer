import React from "react";
import Loader from "../../components/Loader/Loader";
import dataProducts from "../../data/OnlineShop/basic-shop-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import ShopItem from "../../components/Shop/ShopItem";
import img from "../../assets/images/shop/single-product-01.jpg";
import FooterOne from "../../components/Footer/FooterOne";

const ShopCart = () => (
  <Loader>
    <HeaderOne type="white" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered shop-cart">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Item</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cart_item">
                    <td>
                      <a href="!#" title="Remove this item">
                        <i className="icofont-close-circled"></i>
                      </a>
                    </td>
                    <td>
                      <a href="!#">
                        <img src={img} alt="" />
                      </a>
                    </td>
                    <td>
                      <a href="!#">Black Half Sleeve T-Shirt</a>
                    </td>
                    <td>
                      <span>$59.99</span>
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        step="1"
                        min="0"
                        value="1"
                        title="Qty"
                        placeholder="Qty"
                        onChange={() => null}
                      />
                    </td>
                    <td className="product-subtotal">
                      <span>$59.99</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="payment-box">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="summary-cart">
                        <h6 className="upper-case">Order Details</h6>
                        <table className="order_table table-responsive table">
                          <tbody>
                            <tr>
                              <th>Subtotal</th>
                              <td>
                                <span>$59.99</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Total</th>
                              <td>
                                <h6>
                                  <strong>$59.99</strong>
                                </h6>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="check-btns">
                          <button
                            className="btn btn-green btn-animate"
                            type="button"
                          >
                            <span>
                              Update Cart
                              <i className="icofont icofont-refresh"></i>
                            </span>
                          </button>
                          <button
                            className="btn btn-color btn-animate"
                            href="!#"
                          >
                            <span>
                              Proceed to Checkout
                              <i className="icofont icofont-check"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-coupon">
                        <h6 className="upper-case">Have a Coupon?</h6>
                        <div className="input-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Coupon code"
                          />
                          <div className="input-group-btn">
                            <button
                              className="btn btn-color btn-animate"
                              type="button"
                            >
                              <span>
                                Apply Coupon
                                <i className="icofont icofont-check"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          {dataProducts
            .filter((v, i) => i < 4)
            .map((product) => (
              <ShopItem
                key={product.id}
                layout=""
                image={product.image}
                title={product.title}
                currency={product.currency}
                price={product.price}
                oldPrice={product.oldprice}
              />
            ))}
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default ShopCart;
