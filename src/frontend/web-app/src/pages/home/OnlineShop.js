import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataSlider from "../../data/Slider/online-shop-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import OnlineShopSlider from "../../components/Hero/OnlineShopSlider";
import BannerShop from "../../components/OnlineShop/BannerShop";
import NewArrivalsShop from "../../components/OnlineShop/NewArrivalsShop";
import WomanBannerShop from "../../components/OnlineShop/WomanBannerShop";
import ManAccesoriesShop from "../../components/OnlineShop/ManAccesoriesShop";
import FooterOne from "../../components/Footer/FooterOne";

const OnlineShop = () => (
  <Loader>
    <HeaderOne />
    <OnlineShopSlider data={dataSlider} />
    <BannerShop />
    <NewArrivalsShop />
    <WomanBannerShop />
    <ManAccesoriesShop />
    <FooterOne />
  </Loader>
);

export default OnlineShop;
