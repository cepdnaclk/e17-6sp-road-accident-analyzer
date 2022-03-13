import React from "react";

const HeadingThree = ({ title, tagline, children }) => (
  <div className="col-md-4 col-sm-12 white-bg">
    <div className="col-inner spacer">
      <h2 className="cardo-font">{title}</h2>
      <h4 className="text-uppercase cardo-font dark-color">{tagline}</h4>
      <div className="pt-40 pb-20">{children}</div>
    </div>
  </div>
);

export default HeadingThree;
