import React from "react";
import Icofont from "react-icofont";
import imgGroom from "../../assets/images/andy-img.jpg";
import imgBridal from "../../assets/images/anna-img.jpg";

const WeddingsStory = () => (
  <section className="main-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h1 className="cardo-font">Our Love Story</h1>
          <h4 className="mt-10 cardo-font pink-color text-uppercase">
            I Carry Your Heart With Me
          </h4>
          <div className="mt-30">
            <p>
              We seek the comfort of another. Someone to share and share the
              life we choose. Someone to help us through the neverending attempt
              to understand ourselves. And in the end, someone to comfort us
              along the way. Donec imperdiet sapien vel massa lobortis, maximus
              interdum lectus lacinia.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-6 mb-20">
          <div className="box bordered white-bg text-center box-shadow-hover">
            <div className="mb-30">
              <img src={imgGroom} className="rounded-circle" alt="img-1" />
              <h2 className="cardo-font">Daniel Wayne</h2>
              <h4 className="cardo-font pink-color text-uppercase">Groom</h4>
              <ul className="social-networks text-center">
                <li className="social-icon-fb">
                  <a href="!#" target="_blank">
                    <Icofont icon="facebook" />
                  </a>
                </li>
                <li className="social-icon-tw">
                  <a href="!#" target="_blank">
                    <Icofont icon="twitter" />
                  </a>
                </li>
                <li className="social-icon-lk">
                  <a href="!#" target="_blank">
                    <Icofont icon="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              lacus vehicula, semper sapien a, feugiat libero. Aliquam et dolor
              ut velit tempor aliquam eu eu dolor. Nullam pulvinar blandit arcu
              sit amet maximus.
            </p>
            <p className="text-center mt-30">
              <a href="!#" className="btn btn-pink btn-square btn-animate">
                <span>
                  Know More <Icofont icon="simple-right" />
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-20">
          <div className="box bordered white-bg text-center box-shadow-hover">
            <div className="mb-30">
              <img src={imgBridal} className="rounded-circle" alt="img-1" />
              <h2 className="cardo-font">Olivia Weaver</h2>
              <h4 className="cardo-font pink-color text-uppercase">Bridal</h4>
              <ul className="social-networks text-center">
                <li className="social-icon-fb">
                  <a href="!#" target="_blank">
                    <Icofont icon="facebook" />
                  </a>
                </li>
                <li className="social-icon-tw">
                  <a href="!#" target="_blank">
                    <Icofont icon="twitter" />
                  </a>
                </li>
                <li className="social-icon-lk">
                  <a href="!#" target="_blank">
                    <Icofont icon="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              lacus vehicula, semper sapien a, feugiat libero. Aliquam et dolor
              ut velit tempor aliquam eu eu dolor. Nullam pulvinar blandit arcu
              sit amet maximus.
            </p>
            <p className="text-center mt-30">
              <a href="!#" className="btn btn-pink btn-square btn-animate">
                <span>
                  Know More <Icofont icon="simple-right" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WeddingsStory;
