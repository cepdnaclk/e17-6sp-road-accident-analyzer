import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../../components/WhoWeAre/WhoWeAreSeven";
import OurSkillsTwo from "../../components/OurSkills/OurSkillsTwo";
import CounterOne from "../../components/Counters/CounterOne";
import OurServicesThree from "../../components/OurServices/OurServicesThree";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const AboutUs = () => (
  <Loader>
    <HeaderOne />
    <PageTitleAbout
      title="About Us"
      tagline="Creative Digital Agency since 2004"
    />
    <WhoWeAreSeven />
    <OurSkillsTwo 
        title="Our Skills"
        tagline="We develop big ideas that sell"
    />
    <CounterOne type="wide"/>
    <OurServicesThree 
        title="About Us"
        tagline="Part of your success"
    />
    <OurTeamTwo title="MEET OUR TEAM" tagline="WE ARE STRONGER" />
    <TestimonialsOne 
      title="Testimonials"
      tagline="Happy clients"
    />
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default AboutUs;
