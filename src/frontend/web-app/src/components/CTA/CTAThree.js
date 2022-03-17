import React from "react";

const CTAThree = ({
  tagline,
  title,
  bg,
  textButton,
  linkButton,
  bgButton,
  typeButton,
  children,
}) => (
  <section
    className={
      "pt-50 pb-50 cta-block " +
      (bg && bg === "dark" ? "dark-bg" : "default-bg")
    }
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="cta-heading-left">
            {tagline && <p className="subtitle mt-20">{tagline}</p>}
            {title && <h3>{title}</h3>}
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="cta-heading-right">
            <p className="mt-30 float-right">
              <a
                href={linkButton}
                className={
                  "btn btn-circle " +
                  (bgButton || "btn-color ") +
                  (typeButton || "")
                }
              >
                {textButton}
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <div className="cta-heading-right">
            <p className="mt-20 content-text">{children}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTAThree;
