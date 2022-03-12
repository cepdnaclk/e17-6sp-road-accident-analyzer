import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import ShopProduct from "../../components/Shop/ShopProduct";
import FooterOne from "../../components/Footer/FooterOne";

const ShopSingleProduct = () => (
  <Loader>
    <HeaderOne type="white"/>
    <section>
      <div className="container">
        <ShopProduct />
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default ShopSingleProduct;
