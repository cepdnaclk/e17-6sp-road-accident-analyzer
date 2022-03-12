import React, { useRef, useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import AOS from "aos";
import "aos/dist/aos.css";
import dataNav from "../../data/Navbar/nav-gym-fitness.json";
import dataSlider from "../../data/Slider/gym-fitness-data.json";
import Loader from "./../../components/Loader/Loader";
import image from "../../assets/images/about-video-gym-img.jpg";
import HeaderSix from "../../components/Header/HeaderSix";
import GymFitnessSlider from "../../components/Hero/GymFitnessSlider";
import AboutGym from "../../components/GymFitness/AboutGym";
import CTAVideo from "../../components/GymFitness/CTAVideo";
import ClassesGym from "../../components/GymFitness/ClassesGym";
import ScheduleGym from "../../components/GymFitness/ScheduleGym";
import ContactGym from "../../components/GymFitness/ContactGym";
import CTAGym from "../../components/GymFitness/CTAGym";
import FooterOne from "../../components/Footer/FooterOne";

const GymFitness = () => {
  const home = useRef();
  const about = useRef();
  const classes = useRef();
  const schedule = useRef();
  const contact = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "classes":
        classes.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "schedule":
        schedule.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  const [toggler, setToggler] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <HeaderSix data={dataNav} scrollToSection={scrollToSection} />
      <GymFitnessSlider data={dataSlider} ref={home} />
      <AboutGym
        ref={about}
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
      </AboutGym>
      <CTAVideo
        title="Use it or lose it"
        tagline="Exercise your mind and body"
        textButton="Sign Up"
        linkButon="!#"
      />
      <ClassesGym ref={classes} />
      <ScheduleGym ref={schedule} />
      <ContactGym ref={contact} />
      <CTAGym />
      <FooterOne />
    </Loader>
  );
};

export default GymFitness;
