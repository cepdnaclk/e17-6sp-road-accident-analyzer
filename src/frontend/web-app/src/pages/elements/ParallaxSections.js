import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import CTATwo from "../../components/CTA/CTATwo";
import ThankYouWedding from "../../components/Thanks/ThankYouWedding";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import FooterOne from "../../components/Footer/FooterOne";
import CTAVideo from "../../components/GymFitness/CTAVideo";

const ParallaxSections = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Parallax Sections" />
    <CTATwo
      title="Let's Work Together"
      tagline="WE DEVELOP BIG IDEAS THAT SELL."
      textButton="Let's talk"
      linkButton="!#"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
      vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
    </CTATwo>
    <ThankYouWedding />
    <TestimonialsOne title="TESTIMONIALS" tagline="Happy Clients" />
    <CTAVideo 
        title="Use it or lose it"
        tagline="Exercise your mind and body"
        textButton="Sign Up"
        linkButon="!#"
    />
    <FooterOne />
  </Loader>
);

export default ParallaxSections;
