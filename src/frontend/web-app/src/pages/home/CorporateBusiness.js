import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import dataCorporate from "../../data/Slider/corporate-business-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderSingle from "../../components/Hero/HeroSliderSingle";
import WhoWeAreThree from "../../components/WhoWeAre/WhoWeAreThree";
import OurTeamThree from "../../components/Team/OurTeamThree";
import TabsIconSection from "../../components/Tabs/TabsIconSection";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import BlogSlider from "../../components/Blog/BlogSlider";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import CounterOne from "../../components/Counters/CounterOne";


const CorporateBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne />
      <HeroSliderSingle data={dataCorporate} />
      <WhoWeAreThree />
      <Portfolio
        filter="true"
        layout="wide"
        columns="2"
        items="6"
        classAppend="pt-0"
      />
      <CounterOne type="wide" />
      <TabsIconSection title="What We Offer" tagline="We Turn Heads" />
      <TestimonialsOne title="TESTIMONIALS" tagline="Happy clients" />
      <BlogSlider />
      <FooterOne />
    </Loader>
  );
};

export default CorporateBusiness;
