import React, { useRef } from "react";
import Loader from "./../../components/Loader/Loader";
import dataCreative from "../../data/Slider/creative-one-page-data.json";
import serviceOneImg from "../../assets/images/onepage-bg-left.jpg";
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import OurServices from "../../components/OurServices/OurServices";
import Welcome from "../../components/WelcomeSection/Welcome";
import WhoWeAreTwo from "../../components/WhoWeAre/WhoWeAreTwo";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import CounterOne from "../../components/Counters/CounterOne";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import PriceTablesTwo from "../../components/PriceTables/PriceTablesTwo";
import ContactUs from "../../components/ContactUs/ContactUs";
import CTAThree from "../../components/CTA/CTAThree";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";

const CreativeOnePage = () => {
  const home = useRef();
  const about = useRef();
  const service = useRef();
  const team = useRef();
  const work = useRef();
  const pricing = useRef();
  const contact = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "service":
        service.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "team":
        team.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "work":
        work.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "pricing":
        pricing.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        
    }
  };

  return (
    <Loader>
      <HeaderTwo scrollToSection={scrollToSection} />
      <HeroSliderSection data={dataCreative} ref={home} />
      <Welcome title="Who We Are" tagline="The way we work is fun" ref={about}>
        We are a fully in-house digital agency focusing on branding, marketing,
        web design and development with clients ranging from start-ups, Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut
        magna ultricies pellentesque.
      </Welcome>
      <OurServices
        title="What We Do"
        tagline="We develop big ideas that sell."
        serviceImg={serviceOneImg}
        ref={service}
      />
      <WhoWeAreTwo title="WHO WE ARE" tagline="THE WORLD AT YOUR FINGERTIPS" />
      <OurTeamTwo title="MEET OUR TEAM" tagline="WE ARE STRONGER" ref={team} />
      <Portfolio
        columns="3"
        layout="wide"
        filter="true"
        items="6"
        classAppend="pt-0 white-bg"
        ref={work}
      />
      <CounterOne type="wide" />
      <TestimonialsOne title="Testimonials" tagline="Happy clients" />
      <PriceTablesTwo title="Our Pricing" tagline="Choose your plan" ref={pricing} />
      <ContactUs ref={contact} />
      <CTAThree
        tagline="Let's Talk"
        title="Start a Project"
        textButton="Contact us"
        linkButton="!#"
        bg="dark"
      >
        We do not tell you our story. We write it together. Partnering with us
        means a seat at
        <br /> the table where you will be heard.
      </CTAThree>
      <FooterOne />
    </Loader>
  );
};

export default CreativeOnePage;
