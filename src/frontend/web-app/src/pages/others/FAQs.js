import React from "react";
import dataAccordion from "../../data/Accordion/accordion-faqs-data.json";
import Loader from "../../components/Loader/Loader";
import AccordionsComponent from "../../components/Accordions/AccordionsComponent";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import FooterOne from "../../components/Footer/FooterOne";

const FAQs = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="FAQs"/>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <AccordionsComponent type="color" data={dataAccordion} />
          </div>
          <div className="col-sm-4">
            <form className="search-form" method="get">
              <input
                type="text"
                name="name"
                className="form-control search-field"
                id="search"
                placeholder="Type what it's your mind..."
              />
              <button
                type="submit"
                className="icofont icofont-search-1 search-submit"
              ></button>
            </form>
            <div className="banner-box help-bg mt-30">
              <div className="red-overlay-bg"></div>
              <div className="relative white-color text-center">
                <h4 className="text-uppercase">We're Here to Help!</h4>
                <p>
                  We're friendly and available to chat. Reach out to us anytime
                  and we'll happily answer your questions.
                </p>
                <a href="!#" className="btn btn-outline-white btn-square mt-10">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default FAQs;
