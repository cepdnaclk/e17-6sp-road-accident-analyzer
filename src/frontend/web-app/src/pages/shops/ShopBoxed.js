import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleShop from "../../components/PageTitle/PageTitleShop";
import ShopContent from "../../components/Shop/ShopContent";
import FooterOne from "../../components/Footer/FooterOne";

const ShopBoxed = () => (
  <Loader>
    <HeaderOne />
    <PageTitleShop title="Shop Boxed" />
    <ShopContent layout="box" pagination="true"/>
    <FooterOne />
  </Loader>
);

export default ShopBoxed;
