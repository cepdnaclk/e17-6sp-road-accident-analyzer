import React from "react";
// import ReactWow from "react-wow";

const HeadingSeven = ({ title, tagline }) => {
  return (
    <div className="col-sm-8 section-heading">
      {/* <ReactWow animation="fadeInUp" delay="0.1s"> */}
        <h2 className="text-uppercase">{title}</h2>
      {/* </ReactWow> */}
      {tagline && (
        // <ReactWow animation="fadeInUp" delay="0.2s">
          <h3 className="mt-10 cardo-font">{tagline}</h3>
        // </ReactWow>
      )}
    </div>
  );
};

export default HeadingSeven;
