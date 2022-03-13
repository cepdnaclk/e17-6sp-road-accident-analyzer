import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dataArchitecture from "../../data/Slider/architecture-data.json";
import Loader from "./../../components/Loader/Loader";
import HeaderThree from "../../components/Header/HeaderThree";
import ArchitectureSlider from "../../components/Hero/ArchitectureSlider";
import AboutArchitecture from "../../components/AboutUs/AboutArchitecture";
import FunFactsArchitecture from "../../components/FunFacts/FunFactsArchitecture";
import ServicesArchitecture from "../../components/OurServices/ServicesArchitecture";
import TeamArchitecture from "../../components/Team/TeamArchitecture";
import GalleryArchitecture from "../../components/Gallery/GalleryArchitecture";
import ContactArchitecture from "../../components/ContactUs/ContactArchitecture";
import FooterOne from "../../components/Footer/FooterOne";

const Architecture = () => {
  const home = useRef();
  const about = useRef();
  const service = useRef();
  const team = useRef();
  const project = useRef();
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
      case "service":
        service.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "team":
        team.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "project":
        project.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderThree scrollToSection={scrollToSection} />
      <ArchitectureSlider data={dataArchitecture} ref={home} />
      <AboutArchitecture ref={about} />
      <FunFactsArchitecture title="Fun facts" tagline="Some interesting">
        We are a fully in-house digital agency focusing on branding, marketing,
        web design and development with clients ranging from start-ups, Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut
        magna ultricies pellentesque.
      </FunFactsArchitecture>
      <ServicesArchitecture
        title="OUR SERVICE"
        tagline="What we offer"
        ref={service}
      />
      <TeamArchitecture
        title="OUR TEAM"
        tagline="Creating Places for People"
        ref={team}
      />
      <GalleryArchitecture
        title="OUR PROJECTS"
        tagline="The Hype is Justified"
        ref={project}
      />
      <ContactArchitecture
        title="CONTACT ME"
        tagline="Connecting to The Outside World"
        classAppend="mt-50"
        ref={contact}
      />
      <FooterOne />
    </Loader>
  );
};

export default Architecture;
