import React from "react";

const HeadingFour = ({ title, tagline }) => (
  <div className="col-sm-8 section-heading">
    <h2
      className="text-uppercase white-color"
      data-aos={"fade-up"}
      data-aos-delay={100}
      data-aos-duration={700}
    >
      {title}
    </h2>
    <h4
      className="text-uppercase default-color"
      data-aos={"fade-up"}
      data-aos-delay={200}
      data-aos-duration={700}
    >
      - {tagline} -
    </h4>
  </div>
);

export default HeadingFour;
