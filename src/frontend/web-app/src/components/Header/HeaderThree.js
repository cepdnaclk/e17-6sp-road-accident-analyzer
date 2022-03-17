import React, { useState, useCallback } from "react";
import Scrollspy from "react-scrollspy";
import Icofont from "react-icofont";
import dataNav from "../../data/Navbar/nav-construction.json";
import AttributeNav from "../Navs/AttributeNav";
import SearchOverlay from "../../elements/SearchOverlay";
import MainLogo from "../MainLogo";
import SearchItem from "../../elements/SearchItem";

const HeaderThree = ({ scrollToSection }) => {
  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  const showSearchForm = (e) => {
    e.preventDefault();
    setShow(true);
    resizeForm();
  };

  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  return (
    <>
      <nav
        className="navbar-scrollspy navbar navbar-three navbar-expand-lg navbar-light navbar-fixed white bootsnav on no-full"
        data-minus-value-desktop="70"
        data-minus-value-mobile="55"
        data-speed="1000"
      >
        <SearchOverlay show={show} onClick={hideSearchForm} />
        <div className="container">
          <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="collapse"
            data-target="#navbar-menu"
            aria-expanded="false"
            onClick={() => showMenu()}
          >
            <Icofont icon="navigation-menu" />
          </button>
          <MainLogo showMenu={showMenu} />
          <div
            className="navbar-collapse collapse"
            id="navbar-menu"
            aria-expanded="false"
          >
            <Scrollspy
              items={["home", "about", "service", "team", "project", "contact"]}
              currentClassName="active"
              className="nav navbar-nav navbar-right nav-scrollspy-onepage"
              data-in="fadeInLeft"
            >
              {dataNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={(e) => scrollToSection(e, item.link)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>
          <AttributeNav>
            <ul className="custom-search">
              <SearchItem showSearchForm={showSearchForm} />
            </ul>
          </AttributeNav>
        </div>
      </nav>
    </>
  );
};

export default HeaderThree;
