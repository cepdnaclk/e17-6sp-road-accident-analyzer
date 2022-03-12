import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleContact from "../../components/PageTitle/PageTitleContact";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import ContactFour from "../../components/ContactUs/ContactFour";
import FooterOne from "../../components/Footer/FooterOne";

const ContactCreative = () => (
  <Loader>
    <HeaderOne />
    <PageTitleContact
      title="Contact Creative"
      tagline="Customer Support 24 Hours"
    />
    <ContactFour />
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default ContactCreative;
