import React from "react";
// import ReactWow from "react-wow";

const HeadingSix = ({ title, tagline, classAppend, font, children }) => {
  return (
      <div
        className={
          "col-sm-8 section-heading " + (classAppend ? classAppend : "")
        }
      >
        {/* <ReactWow animation="fadeInUp" delay="0.1s"> */}
          <h2 className={ font ? font : ''}>{title}</h2>
        {/* </ReactWow> */}
        {
          tagline && 
          // <ReactWow animation="fadeInUp" delay="0.2s">
          <h4 className="text-uppercase">- {tagline} -</h4>
        // </ReactWow>
        }
        {children ? (
          // <ReactWow animation="fadeInUp" delay="0.3s">
            <p className="mt-30">{children}</p>
          // </ReactWow>
        ) : null}
      </div>
  );
};

export default HeadingSix;
