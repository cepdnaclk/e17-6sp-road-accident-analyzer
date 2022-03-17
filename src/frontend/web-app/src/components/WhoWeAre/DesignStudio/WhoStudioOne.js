import React from "react";
import img from "../../../assets/images/single-img.png";
import dataAccordion from "../../../data/Accordion/accordion-studio-data.json";
import AccordionStudio from "../../Accordions/AccordionStudio";
// import ReactWOW from "react-wow";

const WhoStudioOne = () => (
  <section className="first-ico-box white-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="section-heading text-left">
            {/* <ReactWOW animation="fadeLeft" delay="0.2s"> */}
              <h4 className="text-uppercase josefin-font">Our Features</h4>
            {/* </ReactWOW> */}
            {/* <ReactWOW animation="fadeLeft" delay="0.1s"> */}
              <h2 className="josefin-font font-600">
                The Importance of Human Centered Design
              </h2>
            {/* </ReactWOW> */}
          </div>
          <AccordionStudio data={dataAccordion} />
        </div>
        <div className="col-sm-6">
          <div className="single-img">
            <img className="img-fluid" src={img} alt="team-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoStudioOne;
