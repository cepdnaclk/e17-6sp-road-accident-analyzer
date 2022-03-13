import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import dataDigital from "../../data/Slider/digital-agency-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderSeven from "../../components/Hero/HeroSliderSeven";
import WhoWeAreSix from "../../components/WhoWeAre/WhoWeAreSix";
import Portfolio from "../../components/Portfolio/Portfolio";
import CounterTwo from "../../components/Counters/CounterTwo";
import OurTeamFour from "../../components/Team/OurTeamFour";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import FooterOne from "../../components/Footer/FooterOne";

const DigitalAgency = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne />
      <HeroSliderSeven data={dataDigital} />
      <WhoWeAreSix
        title="We Pursue Excellence"
        tagline="Creative web design and apps"
      />
      <Portfolio
        columns="2"
        layout="boxed"
        filter="true"
        classAppend="pt-0 white-bg"
      />
      <CounterTwo bg="white-bg" />
      <OurTeamFour />
      <TestimonialsOne title="Testimonials" tagline="Happy clients" />
      <ClientsBrand />
      <FooterOne />
    </Loader>
  );
};

export default DigitalAgency;
