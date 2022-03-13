import React, { useRef, useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import AOS from "aos";
import Loader from "./../../components/Loader/Loader";
import dataNav from "../../data/Navbar/nav-appstyle-data.json";
import HeaderSeven from "../../components/Header/HeaderSeven";
import ParallaxAppStyle from "../../components/HeroParallax/ParallaxAppStyle";
import AboutAppStyle from "../../components/AboutUs/AboutAppStyle";
import PricingAppStyle from "../../components/PriceTables/AppStyle/PricingAppStyle";
import TestimonialsApp from "../../components/Testimonials/AppStyle/TestimonialsApp";
import ContactApp from "../../components/ContactUs/AppStyle/ContactApp";
import SubscribeApp from "../../components/Subscribe/AppStyle/SubscribeApp";
import FooterTwo from "../../components/Footer/FooterTwo";

const AppStyle = () => {
  const home = useRef();
  const feature = useRef();
  const pricing = useRef();
  const review = useRef();
  const contact = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "feature":
        feature.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "pricing":
        pricing.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "review":
        review.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };
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
      <HeaderSeven
        scrollToSection={scrollToSection}
        data={dataNav}
        social="2"
      />
      <ParallaxAppStyle ref={home} />
      <AboutAppStyle ref={feature} />
      <PricingAppStyle ref={pricing} />
      <TestimonialsApp ref={review} toggler={toggler} setToggler={setToggler} />
      <ContactApp ref={contact} />
      <SubscribeApp />
      <FooterTwo />
    </Loader>
  );
};

export default AppStyle;
