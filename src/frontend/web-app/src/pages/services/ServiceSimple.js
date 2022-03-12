import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleService from "../../components/PageTitle/PageTitleService";
import WhoWeAreEight from "../../components/WhoWeAre/WhoWeAreEight";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const ServiceSimple = () => (
  <Loader>
    <HeaderOne />
    <PageTitleService title="Service Simple" tagline="Ideas that soar" />
    <WhoWeAreEight />
    <TestimonialsOne title="Testimonials" tagline="Happy clients" />
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default ServiceSimple;
