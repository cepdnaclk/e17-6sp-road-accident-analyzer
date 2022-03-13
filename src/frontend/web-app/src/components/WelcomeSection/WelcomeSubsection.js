import React from "react";
import Icofont from "react-icofont";

const WelcomeSubsection = ({
  title,
  tagline,
  image,
  textButton,
  children,
  toggler,
  handleToggler,
}) => (
  <div className="container-fluid">
    <div className="row row-flex flex-center">
      <div className="col-md-6 col-sm-12 dark-bg">
        <div className="col-inner pt-70 pb-50 spacer white-color">
          <h2
            className="cardo-font font-500"
            data-aos={"fade-up"}
            data-aos-delay={100}
            data-aos-duration={1000}
          >
            {title}
          </h2>
          <h4
            className="text-uppercase default-color cardo-font"
            data-aos={"fade-up"}
            data-aos-delay={200}
            data-aos-duration={1000}
          >
            {tagline}
          </h4>
          <div
            className="mt-30"
            data-aos={"fade-up"}
            data-aos-delay={300}
            data-aos-duration={1000}
          >
            <p>{children}</p>
            <p className="mt-20">
              <a
                href="!#"
                className="btn btn-color btn-circle popup-youtube"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggler();
                }}
              >
                {textButton}
                <span className="icon">
                  <Icofont icon="ui-play" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-sm-12 bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  </div>
);

export default WelcomeSubsection;
