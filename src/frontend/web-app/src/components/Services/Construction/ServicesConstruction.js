import React from "react";
import dataServices from "../../../data/Services/services-construction-data.json";
import Icofont from "react-icofont";

const ServicesConstruction = () => (
  <section className="dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="text-uppercase white-color">Construction</h2>
          <hr className="text-center yellow-bg" />
        </div>
      </div>
      <div className="row service-box-style-01 mt-50">
        {dataServices.map((service) => (
          <div className="col-md-4 col-sm-4 col-xs-12" key={service.id}>
            <div className="flipper">
              <div className="text-center mb-50 main-box">
                <div className="box-front height-300px white-bg">
                  <div className="content-wrap">
                    <Icofont
                      icon={service.icon}
                      className="font-40px dark-color"
                    />
                    <h3 className="font-600">{service.title}</h3>
                    <p className="font-400 mt-20 dark-color">{service.text}</p>
                  </div>
                </div>
                <div className="box-back height-300px yellow-bg">
                  <div className="content-wrap">
                    <Icofont
                      icon={service.icon}
                      className="font-40px dark-color"
                    />
                    <h3 className="font-600">{service.title}</h3>
                    <p className="font-400 mt-20 dark-color">{service.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesConstruction;
