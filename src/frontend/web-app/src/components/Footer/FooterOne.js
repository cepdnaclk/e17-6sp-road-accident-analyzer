import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  We are a fully in-house digital agency focusing on branding,
                  marketing, web design and development with clients ranging
                  from start-ups, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed varius quam ut magna ultricies
                  pellentesque.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Work With Us</h5>
                <ul>
                  <li>
                    <a href="#!">Themeforest</a>
                  </li>
                  <li>
                    <a href="#!">Audio Jungle</a>
                  </li>
                  <li>
                    <a href="#!">Code Canyon</a>
                  </li>
                  <li>
                    <a href="#!">Video Hive</a>
                  </li>
                  <li>
                    <a href="#!">Envato Market</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Useful Links</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>About Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Contact Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Our Services</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href={process.env.PUBLIC_URL}>
                      Park Lane Llandrindod Wells, LD7 9QW
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">+44 1632 960290</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:helloscoda@gmail.com">
                      helloscoda@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-globe"></i>
                    <a href={process.env.PUBLIC_URL}>www.envato.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
