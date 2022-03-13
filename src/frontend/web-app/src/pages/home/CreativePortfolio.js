import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataCreative from "../../data/Slider/creative-portfolio-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-masonry.json";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderCreative from "../../components/Hero/HeroSliderCreative";
import PortfolioMasonry from "../../components/Portfolio/PortfolioMasonry";
import CTAOne from "../../components/CTA/CTAOne";
import FooterOne from "../../components/Footer/FooterOne";

const CreativePortfolio = () => (
  <Loader>
    <HeaderOne />
    <HeroSliderCreative data={dataCreative} />
    <PortfolioMasonry filter="true" columns="3" data={dataPortfolio} type="masonry" />
    <CTAOne
      tagline="careers"
      title="Let's write your story, together."
      textButton="Contact us"
      textLink="!#"
      bg="color"
    >
      We do not tell you our story. We write it together. Partnering with us
      means a seat at the table where you will be heard.
    </CTAOne>
    <FooterOne />
  </Loader>
);

export default CreativePortfolio;
