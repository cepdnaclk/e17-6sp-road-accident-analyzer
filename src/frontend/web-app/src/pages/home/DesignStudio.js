import React from "react";
import Loader from "./../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderParallax from "../../components/Hero/HeroSliderParallax";
import WhoStudioOne from "../../components/WhoWeAre/DesignStudio/WhoStudioOne";
import TeamDesignStudio from "../../components/Team/DesignStudio/TeamDesignStudio";
import WhoStudioTwo from "../../components/WhoWeAre/DesignStudio/WhoStudioTwo";
import PortfolioStudio from "../../components/Portfolio/DesignStudio/PortfolioStudio";
import CounterStudio from "../../components/Counters/DesignStudio/CounterStudio";
import TestimonialsStudio from "../../components/Testimonials/DesignStudio/TestimonialsStudio";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const DesignStudio = () => (
  <Loader>
    <HeaderOne />
    <HeroSliderParallax />
    <WhoStudioOne />
    <TeamDesignStudio />
    <WhoStudioTwo />
    <PortfolioStudio />
    <CounterStudio />
    <TestimonialsStudio />
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default DesignStudio;
