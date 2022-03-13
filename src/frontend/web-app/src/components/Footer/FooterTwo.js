import React from "react";
import dataSocial from "../../data/Social/social-footer.json";
import Icofont from "react-icofont";

const FooterTwo = () => (
  <section className="dark-bg flat-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <ul className="social-media">
            {dataSocial.filter(social => social.footer === 1).map((social) => (
              <li key={social.id}>
                <a href={social.link}>
                  <Icofont icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default FooterTwo;
