import React from "react";
import parse from "html-react-parser";

const HeadingTwo = ({ title, text }) => (
  <div className="col-sm-8 section-heading">
    <h1
      className="text-uppercase font-700"
      data-aos={"fade-up"}
      data-aos-delay={100}
      data-aos-duration={700}
    >
      {title}
    </h1>
    {text ? (
      <div
        className="mt-30"
        data-aos={"fade-up"}
        data-aos-delay={100}
        data-aos-duration={700}
      >
        <p>{parse(text)}</p>
      </div>
    ) : (
      ""
    )}
  </div>
);

export default HeadingTwo;
