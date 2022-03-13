import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import Loader from "./../../components/Loader/Loader";
import dataSlider from "../../data/Slider/seo-agency-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderTwo from "../../components/Hero/HeroSliderTwo";
import WhoWeAreFive from "../../components/WhoWeAre/WhoWeAreFive";
import AboutUsTwo from "../../components/AboutUs/AboutUsTwo";
import image from "../../assets/images/about-video-img.jpg";
import CounterTwo from "../../components/Counters/CounterTwo";
import OurTeamThree from "../../components/Team/OurTeamThree";
import PriceTablesThree from "../../components/PriceTables/PriceTablesThree";
import BlogSlider from "../../components/Blog/BlogSlider";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const SEOAgency = () => {
  const [toggler, setToggler] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <HeaderOne />
      <HeroSliderTwo data={dataSlider} />
      <WhoWeAreFive />
      <AboutUsTwo
        title="Our Features"
        image={image}
        toggler={toggler}
        setToggler={setToggler}
      />
      <CounterTwo />
      <OurTeamThree />
      <PriceTablesThree />
      <BlogSlider />
      <TestimonialsOne title="TESTIMONIALS" tagline="Happy clients" />
      <ClientsBrand />
      <FooterOne />
    </Loader>
  );
};

export default SEOAgency;
