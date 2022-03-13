import React from "react";
import Icofont from "react-icofont";

const PriceItemTwo = ({
  icon,
  title,
  currency,
  price,
  features,
  textButton,
  featured,
  index,
}) => (
  <div
    data-aos={"fade-up"}
    data-aos-delay={`${index}00`}
    data-aos-duration={700}
    className={
      "col-md-3 pricing-table" +
      (featured === "true" ? "=featured" : "") +
      " col-sm-6"
    }
  >
    <div className="pricing-box">
      <Icofont icon={icon} />
      <h4>{title}</h4>
      <h2>
        <sup>{currency}</sup>
        <span>{price}</span>
      </h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>{feature.title}</li>
        ))}
      </ul>
      <div className="pricing-box-bottom">
        <a href="!#" className="btn btn-color btn-circle">
          <span>{textButton}</span>
        </a>
      </div>
    </div>
  </div>
);

export default PriceItemTwo;
