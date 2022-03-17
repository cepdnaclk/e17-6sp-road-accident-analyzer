import React from "react";

const PriceItemApp = ({
  title,
  currency,
  price,
  features,
  textButton,
  index,
  classAppend
}) => (
  <div
    className={"col-md-4 col-sm-12 " + (classAppend ? classAppend : "")}
    data-aos-delay={`${index + 1}00`}
    data-aos={"fade-up"}
  >
    <div className="pricing-box">
      <h3 className="font-700">{title}</h3>
      <h1 className="blue-color">
        <sup>{currency}</sup>
        <span>{price}</span>
      </h1>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>{feature.title}</li>
        ))}
      </ul>
      <div className="pricing-box-bottom">
        <a href="!#" className="btn btn-color btn-circle">
          {textButton}
        </a>
      </div>
    </div>
  </div>
);

export default PriceItemApp;
