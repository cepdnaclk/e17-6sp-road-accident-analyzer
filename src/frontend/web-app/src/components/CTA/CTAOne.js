import React from "react";
import parse from "html-react-parser";

const CTAOne = ({ title, tagline, bg, textButton, linkButton, children }) => (
  <section
    className={
      "pt-50 pb-50 " + (bg && bg === "dark" ? "dark-bg" : "default-bg")
    }
  >
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="cta-heading-left">
            {tagline && <p className="subtitle mt-20">{tagline}</p>}
            {title && <h3>{title}</h3>}
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <div className="cta-heading-right">
            <p className="mt-20 content-text">{children && parse(children)}</p>
            <p className="mt-50">
              <a
                className={
                  "btn btn-rounded " +
                  (bg && bg === "dark" ? "btn-color" : "btn-white")
                }
                href={linkButton}
              >
                {textButton}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTAOne;
