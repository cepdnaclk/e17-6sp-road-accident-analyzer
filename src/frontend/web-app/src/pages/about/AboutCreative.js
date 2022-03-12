import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import WelcomeTwo from "../../components/WelcomeSection/WelcomeTwo";
import CountersThree from "../../components/Counters/CountersThree";
import CTAFour from "../../components/CTA/CTAFour";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import FooterOne from "../../components/Footer/FooterOne";

const AboutCreative = () => {
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => {
    setToggler(!toggler);
  };

  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <HeaderOne />
      <PageTitleAbout
        title="About Creative"
        tagline="Creative Digital Agency since 2004"
      />
      <WelcomeTwo toggler={toggler} handleToggler={handleToggler} />
      <CountersThree type="wide" />
      <CTAFour
        title="Let's Work Together"
        tagline="We develop big ideas that sell."
        textButton="Let's Talk"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
        vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
      </CTAFour>
      <TestimonialsOne
        title="Testimonials"
        tagline="Happy clients"
        font="cardo-font"
      />
      <FooterOne />
    </Loader>
  );
};

export default AboutCreative;
