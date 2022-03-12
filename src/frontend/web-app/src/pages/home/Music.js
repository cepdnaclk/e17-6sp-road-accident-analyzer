import React, { useRef, useState } from "react";
import FsLightbox from "fslightbox-react";
import Loader from "./../../components/Loader/Loader";
import dataNav from "../../data/Navbar/nav-music-data.json";
import dataSlider from "../../data/Slider/music-data.json";
import HeaderFive from "../../components/Header/HeaderFive";
import MusicSlider from "../../components/Hero/Music/MusicSlider";
import AboutMusic from "../../components/AboutUs/Music/AboutMusic";
import CounterMusic from "../../components/Counters/Music/CounterMusic";
import VideoMusic from "../../components/Video/Music/VideoMusic";
import EventsMusic from "../../components/Portfolio/Music/EventsMusic";
import ContactMusic from "../../components/ContactUs/Music/ContactMusic";
import FooterOne from "../../components/Footer/FooterOne";

const Music = () => {
  const home = useRef();
  const about = useRef();
  const how = useRef();
  const event = useRef();
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
      case "how":
        how.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "event":
        event.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  const [toggler, setToggler] = useState(false);

  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <HeaderFive data={dataNav} scrollToSection={scrollToSection} />
      <MusicSlider data={dataSlider} ref={home} />
      <AboutMusic ref={about} />
      <CounterMusic />
      <VideoMusic ref={how} toggler={toggler} setToggler={setToggler} />
      <EventsMusic ref={event} />
      <ContactMusic ref={contact} />
      <FooterOne />
    </Loader>
  );
};

export default Music;
