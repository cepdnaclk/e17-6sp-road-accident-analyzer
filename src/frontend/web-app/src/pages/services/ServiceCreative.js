import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleService from "../../components/PageTitle/PageTitleService";
import WhoWeAreNine from "../../components/WhoWeAre/WhoWeAreNine";
import PriceTables from "../../components/PriceTables/PriceTables";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const ServiceCreative = () => (
  <Loader>
    <HeaderOne />
    <PageTitleService title="Service Creative" tagline="Ideas that soar" />
    <WhoWeAreNine />
    <PriceTables />
    <TestimonialsOne title="Testimonials" tagline="Happy clients" />
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default ServiceCreative;
