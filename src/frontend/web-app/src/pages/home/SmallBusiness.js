import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import dataSmall from "../../data/Slider/small-business-data.json";
import WhoWeAreTwo from "../../components/WhoWeAre/WhoWeAreTwo";
import AboutUsOne from "../../components/AboutUs/AboutUsOne";
import image from "../../assets/images/about-video-img.jpg";
import CounterTwo from "../../components/Counters/CounterTwo";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import PriceTables from "../../components/PriceTables/PriceTables";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ClientBrands from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";

const SmallBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [toggler, setToggler] = useState(false);

  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <HeaderOne />
      <HeroSliderSection data={dataSmall} />
      <WhoWeAreTwo title="Who we are" tagline="The world at your fingertips">
        We are a fully in-house digital agency focusing on branding, marketing,
        web design and development with clients ranging from start-ups, Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut
        magna ultricies pellentesque.
      </WhoWeAreTwo>
      <AboutUsOne
        title="Meet our company"
        textButton="Read more"
        linkButton="!#"
        image={image}
        toggler={toggler}
        setToggler={setToggler}
      >
        <p className="mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
          Donec in risus eget purus mattis varius. Nulla dapibus quis orci et
          tincidunt. Phasellus in rhoncus quam. Fusce a est lacinia, ultricies
          mi nec, rutrum dolor.
        </p>
        <p>
          Donec vehicula cursus metus viverra aliquet Aliquam tincidunt dolor a
          auctor finibus. Sed in sodales magna. Etiam eget velit nec urna
          facilisis fringilla sed eget purus. Ut pulvinar ullamcorper mauris non
          tristique.
        </p>
      </AboutUsOne>
      <CounterTwo />
      <OurTeamTwo title="MEET OUR TEAM" tagline="WE ARE STRONGER" />
      <Portfolio columns="3" layout="wide" items="6" classAppend="pt-0" />
      <PriceTables />
      <TestimonialsOne title="Testimonials" tagline="Happy clients" />
      <ClientBrands />
      <FooterOne />
    </Loader>
  );
};

export default SmallBusiness;
