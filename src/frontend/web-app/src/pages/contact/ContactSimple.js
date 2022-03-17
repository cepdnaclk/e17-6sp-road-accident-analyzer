import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleContact from "../../components/PageTitle/PageTitleContact";
import ContactThree from "../../components/ContactUs/ContactThree";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";
import Map from "../../components/Maps/Map";

const ContactSimple = () => (
    <Loader>
      <HeaderOne />
      <PageTitleContact
        title="Contact Simple"
        tagline="Customer Support 24 Hours"
      />
      <ContactThree />
      <section className="pt-0 pb-0 map-section">
        <Map classAppend="wide" />
      </section>
      <ClientsBrand />
      <FooterOne />
    </Loader>
  );

export default ContactSimple;
