import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import ContactArchitecture from "../../components/ContactUs/ContactArchitecture";
import ContactThree from "../../components/ContactUs/ContactThree";
import ContactTwo from "../../components/ContactUs/ContactTwo";
import FooterOne from "../../components/Footer/FooterOne";

const ContactForms = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Contact Forms" />
    <ContactArchitecture
      title="CONTACT ME"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nisl gravida, interdum nunc quis, faucibus ligula. Nam eu neque nunc. Suspendisse egestas dolor ante, nec tincidunt sem malesuada at."
    />
    <ContactThree />
    <ContactTwo bg="color" />
    <ContactArchitecture />
    <FooterOne />
  </Loader>
);

export default ContactForms;
