import React, { useState, useEffect, useCallback } from "react";
import Scrollspy from "react-scrollspy";
import Icofont from "react-icofont";
import dataNav from "../../data/Navbar/nav-creativeone-data.json";
import AttributeNav from "../Navs/AttributeNav";
import SocialNav from "../Navs/SocialNav";
import MainLogo from "../MainLogo";
import { Link } from "react-router-dom";

const HeaderTwo = ({ social, scrollToSection }) => {
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar-scrollspy navbar navbar-light navbar-expand-lg navbar-fixed white bootsnav on no-full " +
          (fixed ? "" : "navbar-transparent")
        }
        data-minus-value-desktop="70"
        data-minus-value-mobile="55"
        data-speed="1000"
      >
        <div className="container">
        <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="dropdown"
            data-target="#navbar-menu"
            onClick={showMenu}
          >
            <Icofont icon="navigation-menu" />
          </button>
          <MainLogo showMenu={showMenu} />
          <div className="collapse navbar-collapse" id="navbar-menu">
            <Scrollspy
              items={[
                "home",
                "about",
                "service",
                "team",
                "work",
                "pricing",
                "contact",
              ]}
              currentClassName="active"
              className="nav navbar-nav navbar-right nav-scrollspy-onepage"
              data-in="fadeInLeft"
            >
              {dataNav.map((item) => (
                <li className="scroll navbar-item" key={item.id}>
                  <Link
                    className="nav-link"
                    to={item.link}
                    onClick={(e) => scrollToSection(e, item.link)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </Scrollspy>
          </div>
          <AttributeNav>
            <SocialNav items={social} />
          </AttributeNav>
        </div>
      </nav>
    </>
  );
};

export default HeaderTwo;
