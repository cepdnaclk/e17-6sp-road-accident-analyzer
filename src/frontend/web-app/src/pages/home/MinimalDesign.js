import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import Loader from "./../../components/Loader/Loader";
import dataMinimal from "../../data/Slider/minimal-design-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderCombined from "../../components/Hero/HeroSliderCombined";
import WelcomeTwo from "../../components/WelcomeSection/WelcomeTwo";
import CountersThree from "../../components/Counters/CountersThree";
import Portfolio from "../../components/Portfolio/Portfolio";
import TabsIconSectionTwo from "../../components/Tabs/TabsIconSectionTwo";
import CTATwo from "../../components/CTA/CTATwo";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import FooterOne from "../../components/Footer/FooterOne";

const MinimalDesign = () => {
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => {
    setToggler(!toggler);
  };

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
      <HeroSliderCombined data={dataMinimal} font="cardo-font" />
      <WelcomeTwo toggler={toggler} handleToggler={handleToggler} />
      <CountersThree type="wide" />
      <TestimonialsOne
        title="Testimonials"
        tagline="Happy clients"
        font="cardo-font"
      />
      <Portfolio columns="3" layout="wide" items="6" classAppend="pt-0" />
      <TabsIconSectionTwo title="What We Offer" font="cardo-font" />
      <CTATwo
        title="Let's Work Together"
        tagline="WE DEVELOP BIG IDEAS THAT SELL."
        textButton="Let's talk"
        linkButton="!#"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
        vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
      </CTATwo>
      <FooterOne />
    </Loader>
  );
};

export default MinimalDesign;
