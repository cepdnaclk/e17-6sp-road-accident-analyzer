import React from "react";
import Icofont from "react-icofont";

const AboutUsOne = ({
  title,
  textButton,
  linkButton,
  image,
  linkImage,
  children,
  toggler,
  setToggler,
}) => {
  return (
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 mb-30"
            data-aos-delay={100}
            data-aos={"fade-right"}
            data-aos-duration={700}
            data-aos-easing={"ease-in-sine"}
          >
            <h2 className="text-uppercase font-700 mt-0">{title}</h2>
            {children}
            <a
              href={linkButton}
              className="btn btn-color btn-rounded btn-animate mt-20"
            >
              <span>
                {textButton ? textButton : "Read more"}
                <Icofont icon="arrow-right" />
              </span>
            </a>
          </div>
          <div
            className="col-md-6"
            data-aos-delay={200}
            data-aos={"fade-up"}
            data-aos-duration={700}
            data-aos-easing={"ease-in-sine"}
          >
            <div className="arcon-video-box">
              <img className="img-fluid" src={image} alt="" />
              <div className="arcon-video-box_overlay">
                <div className="center-layout">
                  <div className="v-align-middle">
                    <a
                      className="popup-youtube"
                      href={linkImage}
                      onClick={(e) => {
                        e.preventDefault();
                        setToggler(!toggler);
                      }}
                    >
                      <div className="play-button">
                        <Icofont icon="youtube-play" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOne;
