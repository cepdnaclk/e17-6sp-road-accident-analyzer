import React from "react";
import Icofont from "react-icofont";

const FeatureBoxOne = ({ icon, title, children, index }) => (
  <div
    className="col-md-12 feature-box text-left mb-50 col-sm-6"
    data-aos={"fade-up"}
    data-aos-delay={`${index}00`}
    data-aos-duration={1000}
  >
    <div className="float-left">
      <Icofont icon={icon} className="font-60px white-icon" />
    </div>
    <div className="float-right">
      <h3 className="mt-0 cardo-font">{title}</h3>
      <p>{children}</p>
    </div>
  </div>
);

export default FeatureBoxOne;
