import React from "react";

const PageTitleAbout = ({ title, tagline }) => (
  <section
    className="title-hero-bg about-cover-bg"
    data-stellar-background-ratio="0.2"
  >
    <div className="container">
      <div className="page-title text-center white-color">
        <h1>{title}</h1>
        <h4 className="text-uppercase mt-30">{tagline}</h4>
      </div>
    </div>
  </section>
);

export default PageTitleAbout;
