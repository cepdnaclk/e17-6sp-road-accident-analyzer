import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataSlider from "../../data/Slider/travel-agency-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import TravelSlider from "../../components/Hero/TravelAgency/TravelSlider";
import WhyChooseTravel from "../../components/WhyChooseUs/TravelAgency/WhyChooseTravel";
import WelcomeTravel from "../../components/WelcomeSection/TravelAgency/WelcomeTravel";
import GalleryTravel from "../../components/Gallery/TravelAgency/GalleryTravel";
import ContactTravel from "../../components/ContactUs/TravelAgency/ContactTravel";
import FooterOne from "../../components/Footer/FooterOne";

const TravelAgency = () => (
  <Loader>
    <HeaderOne />
    <TravelSlider data={dataSlider} />
    <WhyChooseTravel />
    <WelcomeTravel />
    <GalleryTravel />
    <ContactTravel />
    <FooterOne />
  </Loader>
);

export default TravelAgency;
