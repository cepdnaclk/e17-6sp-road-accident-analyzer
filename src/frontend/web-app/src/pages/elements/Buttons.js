import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import FooterOne from "../../components/Footer/FooterOne";

const Buttons = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Buttons" />
    <section className="widget-btns many-btns">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2 className="text-uppercase">Button Colors</h2>
            <h4 className="mt-10 source-font font-300 text-uppercase">
              Red, Blue, Green and Yellow.
            </h4>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-4 col-sm-4 col-lg-2">
            <a href="!#" className="btn btn-red btn-circle">
              Button Red
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-2">
            <a href="!#" className="btn btn-color btn-circle">
              Button Blue
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-2">
            <a href="!#" className="btn btn-green btn-circle">
              Button Green
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-2">
            <a href="!#" className="btn btn-yellow btn-circle">
              Button Yellow
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-2">
            <a href="!#" className="btn btn-pink btn-circle">
              Button Pink
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-2">
            <a href="!#" className="btn btn-dark btn-circle">
              Button Dark
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-0 widget-btns">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2 className="text-uppercase">Button Sizes</h2>
            <h4 className="mt-10 source-font font-300 text-uppercase">
              Extra Large, Medium and Small.
            </h4>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-color btn-lg btn-circle">
              Button Large
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-color btn-circle">
              Button Normal
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-color btn-sm btn-circle">
              Button Small
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-color btn-xs btn-circle">
              Button Extra Small
            </a>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-outline-blue btn-lg btn-circle">
              Button Large
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-outline-blue btn-circle">
              Button Normal
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-outline-blue btn-sm btn-circle">
              Button Small
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-outline-blue btn-xs btn-circle">
              Button Extra Small
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="widget-btns dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading white-color">
            <h2 className="text-uppercase">Button Styles</h2>
            <h4 className="mt-10 source-font font-300 text-uppercase">
              Light, Dark, Primary and Secondery
            </h4>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-white btn-default">
              Button White
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-outline-white btn-default">
              Button Outline White
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-outline-blue btn-default">
              Button Outline Blue
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-color btn-default">
              Button Blue
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="widget-btns">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2 className="text-uppercase">Button Shapes</h2>
            <h4 className="mt-10 source-font font-300 text-uppercase">
              Default, Square, Round and Circle.
            </h4>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-red">
              Button Default
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-color btn-square">
              Button Square
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-green btn-rounded">
              Button Rounded
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-yellow btn-circle">
              Button Circle
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      className="parallax-bg-7 fixed-bg widget-btns"
      data-stellar-background-ratio="0.2"
    >
      <div className="overlay-bg-dark"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading white-color">
            <h2 className="text-uppercase">Button Icons</h2>
            <h4 className="mt-10 source-font font-300 text-uppercase">
              Icons, and animated buttons
            </h4>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-color btn-circle">
              Icon Button
              <span className="icon">
                <i className="icofont icofont-simple-right"></i>
              </span>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-dark btn-circle">
              Icon Button
              <span className="icon">
                <i className="icofont icofont-anchor"></i>
              </span>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-green btn-circle btn-animate">
              <span>
                Button Animate <i className="icofont icofont-settings-alt"></i>
              </span>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="!#" className="btn btn-yellow btn-circle btn-animate">
              <span>
                Button Animate <i className="icofont icofont-rocket-alt-2"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default Buttons;
