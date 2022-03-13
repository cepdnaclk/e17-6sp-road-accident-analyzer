import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataSlider from "../../data/Slider/wedding-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import WeddingsSlider from "../../components/Hero/Weddings/WeddingsSlider";
import WeddingsStory from "../../components/Story/WeddingsStory";
import DateWeddings from "../../components/Date/DateWeddings";
import RsvpWeddings from "../../components/RSVP/RsvpWeddings";
import ThankYouWedding from "../../components/Thanks/ThankYouWedding";
import FooterOne from "../../components/Footer/FooterOne";

const Weddings = () => (
  <Loader>
    <HeaderOne />
    <WeddingsSlider data={dataSlider} />
    <WeddingsStory />
    <DateWeddings />
    <RsvpWeddings />
    <ThankYouWedding />
    <FooterOne />
  </Loader>
);

export default Weddings;
