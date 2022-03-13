import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleShop from "../../components/PageTitle/PageTitleShop";
import ShopContent from "../../components/Shop/ShopContent";
import FooterOne from "../../components/Footer/FooterOne";

const ShopFullwidth = () => (
  <Loader>
    <HeaderOne />
    <PageTitleShop title="Shop Fullwidth" />
    <ShopContent layout="fullwidth" pagination="true"/>
    <FooterOne />
  </Loader>
);

export default ShopFullwidth;
