import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import CTAOne from "../../components/CTA/CTAOne";
import CTAThree from "../../components/CTA/CTAThree";
import FooterOne from "../../components/Footer/FooterOne";

const CallToActions = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Call To Action" />
    <CTAOne
      title="Let's write your story, together."
      tagline="Careers"
      bg="dark"
      textButton="Contact Us"
      linkButton="!#"
    >
      We do not tell you our story. We write it together. Partnering with us
      means a seat at the table where you will be heard.
    </CTAOne>
    <CTAOne
      title="Let's write your story, together."
      tagline="Careers"
      textButton="Contact Us"
      linkButton="!#"
    >
      We do not tell you our story. We write it together. Partnering with us
      means a seat at the table where you will be heard.
    </CTAOne>
    <CTAThree
      tagline="Let's Talk"
      title="Start a Project"
      bg="dark"
      typeButton="btn-outline"
      textButton="Contact us"
      linkButton="!#"
    >
      We do not tell you our story. We write it together. Partnering with us
      means a seat at the table where you will be heard.
    </CTAThree>
    <CTAThree
      tagline="Let's Talk"
      title="Start a Project"
      textButton="Contact us"
      linkButton="!#"
      bgButton="btn-white"
    >
      We do not tell you our story. We write it together. Partnering with us
      means a seat at the table where you will be heard.
    </CTAThree>
    <FooterOne />
  </Loader>
);

export default CallToActions;
