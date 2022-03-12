import React from "react";
import dataAccordion from "../../data/Accordion/accordions-data.json";
import AccordionsComponent from "../Accordions/AccordionsComponent";
import Icofont from "react-icofont";

const AboutUsTwo = ({ title, image, toggler, setToggler }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2
            className="text-uppercase font-700 mt-0"
            data-aos-delay={500}
            data-aos={"fade-up"}
            data-aos-easing={"ease-in-sine"}
          >
            {title}
          </h2>
          <AccordionsComponent
            data={dataAccordion}
            classAppend="mt-50"
            items={3}
          />
        </div>
        <div className="col-md-6">
          <div className="arcon-video-box mt-30">
            <img className="img-fluid" src={image} alt="" />
            <div className="arcon-video-box_overlay">
              <div className="center-layout">
                <div className="v-align-middle">
                  <a
                    className="popup-youtube"
                    href="!#"
                    onClick={(e) => {
                      e.preventDefault();
                      setToggler(!toggler);
                    }}
                  >
                    <div className="play-button">
                      <Icofont icon="ui-play" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsTwo;
