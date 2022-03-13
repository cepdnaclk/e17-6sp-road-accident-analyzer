import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataSlider from "../../data/Slider/construction-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import ConstructionSlider from "../../components/Hero/Construction/ConstructionSlider";
import ServicesConstruction from "../../components/Services/Construction/ServicesConstruction";
import GalleryConstruction from "../../components/Gallery/Construction/GalleryConstruction";
import CounterConstruction from "../../components/Counters/Construction/CounterConstruction";
import TeamConstruction from "../../components/Team/Construction/TeamConstruction";
import ContactConstruction from "../../components/ContactUs/Construction/ContactConstruction";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const Construction = () => (
  <Loader>
    <HeaderOne />
    <ConstructionSlider data={dataSlider} />
    <ServicesConstruction />
    <GalleryConstruction />
    <CounterConstruction />
    <TeamConstruction />
    <ContactConstruction />
    <ClientsBrand />
    <FooterOne/>
  </Loader>
);

export default Construction;
