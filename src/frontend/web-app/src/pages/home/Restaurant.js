import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import dataNav from "../../data/Navbar/nav-restaurant-data.json";
import dataRestaurant from "../../data/Slider/restaurant-data.json";
import HeaderFive from "../../components/Header/HeaderFive";
import RestaurantSlider from "../../components/Hero/RestaurantSlider";
import AboutRestaurant from "../../components/AboutUs/AboutRestaurant";
import TestimonialsRestaurant from "../../components/Testimonials/TestimonialsRestaurant";
import TheChefs from "../../components/Chefs/TheChefs";
import GalleryRestaurant from "../../components/Gallery/GalleryRestaurant";
import ContactRestaurant from "../../components/ContactUs/ContactRestaurant";
import FooterOne from "../../components/Footer/FooterOne";

const Restaurant = () => {
  const home = useRef();
  const about = useRef();
  const chefs = useRef();
  const gallery = useRef();
  const bookAtable = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "chefs":
        chefs.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "gallery":
        gallery.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "bookAtable":
        bookAtable.current.scrollIntoView({ behavior: "smooth" });
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
      <HeaderFive data={dataNav} scrollToSection={scrollToSection} />
      <RestaurantSlider data={dataRestaurant} ref={home} />
      <AboutRestaurant ref={about} />
      <TestimonialsRestaurant title="Testimonials" tagline="Happy Clients" />
      <TheChefs ref={chefs} />
      <GalleryRestaurant ref={gallery} />
      <ContactRestaurant ref={bookAtable} />
      <FooterOne />
    </Loader>
  );
};

export default Restaurant;
