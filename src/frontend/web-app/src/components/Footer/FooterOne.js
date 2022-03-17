import React from "react";
import logoFooter from "../../assets/images/group12.png";
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
                  A team with the full intention of reducing the 
                  number of road accidents which are happening day to day life.
                  We saw this as a huge problem and came up with a solution to
                  resolve this issue by using modern technologies such as machine 
                  learning. Please send us your thoughts and we will be looking forward
                  to improve our system, based on our users' suggetions.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                
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
                      Peradeniya, Kandy , Sri Lanka.
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">+94 70 157 3862</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:helloscoda@gmail.com">
                      roadanalyzer-srilanka@gmail.com
                    </a>
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
