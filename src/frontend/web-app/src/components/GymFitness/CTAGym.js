import React from "react";
import Icofont from "react-icofont";

const CTAGym = () => (
  <section className="pt-50 pb-50 green-bg">
    <div className="container">
      <div className="row white-color">
        <div className="col-md-8 text-left">
          <h4 className="font-400 cardo-font mt-20">
            Our classes are taught by world-class, Experienced and
            certified instructors
          </h4>
        </div>
        <div className="col-md-4">
          <div className="text-center mt-10 mb-10">
            <a href="!#" className="btn btn-dark btn-square btn-animate">
              <span>
                Find a Teacher <Icofont icon="simple-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTAGym;
