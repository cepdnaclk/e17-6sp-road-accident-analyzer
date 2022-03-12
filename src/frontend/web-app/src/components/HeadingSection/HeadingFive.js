import React from "react";

const HeadingFive = ({ title, tagline, classAppend, font, children }) => {
  return (
    <div
      className={"col-sm-8 section-heading " + (classAppend ? classAppend : "")}
    >
      <h2
        className={font ? font : ""}
        data-aos={"fade-up"}
        data-aos-delay={100}
        data-aos-duration={700}
      >
        {title}
      </h2>
      {tagline && (
        <h4
          className="text-uppercase"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={700}
        >
          {tagline}
        </h4>
      )}
      {children ? (
        <p
          className="mt-30"
          data-aos={"fade-up"}
          data-aos-delay={300}
          data-aos-duration={700}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
};

export default HeadingFive;
