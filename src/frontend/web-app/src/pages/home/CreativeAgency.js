import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {useLax} from "../../helpers/use-lax";
import Loader from "./../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import WhoWeAreOne from "../../components/WhoWeAre/WhoWeAreOne";
import CounterOne from "../../components/Counters/CounterOne";
import OurTeam from "../../components/Team/OurTeam";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import BlogSlider from "../../components/Blog/BlogSlider";
import CTAOne from "../../components/CTA/CTAOne";
import dataSlider from "../../data/Slider/creative-agency-data.json";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";

const CreativeAgency = () => {
  useLax();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne />
      <HeroSliderSection data={dataSlider} />
      <WhoWeAreOne
        title="We're Scoda Agency"
        tagline="THE WAY WE WORK IS FUN"
        verticalWord="Design"
        horizontalWord="Creative."
      >
        We are a fully in-house digital agency focusing on branding, marketing,
        web design and development with clients ranging from start-ups. We pride
        ourselves on partnering with clients in order to give the most
        transparent and educational experience.
      </WhoWeAreOne>
      <Portfolio columns="3" layout="wide" items="6" classAppend="pt-0" />
      <CounterOne type="wide" />
      <OurTeam title="Meet Our Team" tagline="WE ARE STRONGER" bg="white" />
      <TestimonialsOne title="Testimonials" tagline="Happy clients" />
      <BlogSlider />
      <CTAOne
        tagline="careers"
        title="Let's write your story, together."
        textButton="Contact us"
        textLink="!#"
        bg="dark"
      >
        We do not tell you our story. We write it together. Partnering with us
        means a seat at the table where you will be heard.
      </CTAOne>
      <FooterOne />
    </Loader>
  );
};

export default CreativeAgency;
