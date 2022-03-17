import React from "react";
import Icofont from "react-icofont";
import dataDemos from "../data/Demos/demos-data.json";
import Loader from "../components/Loader/Loader";
import HeroDemo from "../components/Hero/HeroDemo";
import CTAThree from "../components/CTA/CTAThree";
import FooterCopyright from "../components/Footer/FooterCopyright";
import DemoParallax from "./DemoParallax";

const Demos = () => {
  return (
    <Loader>
      <HeroDemo />
      <section className="demos">
        <div className="container">
          <DemoParallax />
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2 className="font-700">Multipurpose Home Pages</h2>
            </div>
          </div>
          <div className="row mt-50 main-demos">
            {dataDemos.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className="product">
                  {item.badge ? (
                    <span className="new-badge">{item.badge}</span>
                  ) : null}

                  <div className="product-wrap">
                    <img
                      src={require("../assets/images/" + item.image)}
                      className="img-fluid"
                      alt="team-01"
                    />
                    <div className="product-caption">
                      <div className="product-description text-center">
                        <div className="product-description-wrap">
                          <div className="product-title">
                            <a
                              href={`${process.env.PUBLIC_URL}\\${item.link}`}
                              className="btn btn-color btn-secondary btn-animate"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>
                                Live Preview
                                <Icofont icon="layout" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-detail text-center preview-box">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTAThree
        tagline="FOR BUSINESS. PORTFOLIO & PHOTOGRAPHY"
        title="Create Your Stunning HTML Website Quickly and Easily"
        textButton="Buy Template"
        linkButton="https://themeforest.net/item/scoda-multipurpose-one-page-reactjs-template/26852224"
        bgButton="btn-white"
        bg="dark"
      >
        We do not tell you our story. We write it together. Partnering with us
        means a seat at
        <br /> the table where you will be heard.
      </CTAThree>
      <FooterCopyright />
    </Loader>
  );
};

export default Demos;
