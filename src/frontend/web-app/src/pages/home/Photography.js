import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataSlider from "../../data/Slider/photography-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-photography-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import PhotographySlider from "../../components/Hero/PhotographySlider";
import FooterOne from "../../components/Footer/FooterOne";
import PortfolioMasonry from "../../components/Portfolio/PortfolioMasonry";

const Photography = () => (
  <Loader>
    <HeaderOne />
    <PhotographySlider data={dataSlider} />
    <PortfolioMasonry
      columns="four"
      layout="wide"
      type="product"
      space={false}
      classAppend="dark-bg pt-0 pb-0"
      data={dataPortfolio}
    />
    <FooterOne />
  </Loader>
);

export default Photography;
