import React, { forwardRef } from "react";
import Icofont from "react-icofont";
// import ReactWOW from "react-wow";

const AboutGym = forwardRef(
  (
    { title, textButton, linkButton, image, children, toggler, setToggler },
    ref
  ) => (
    <section className="white-bg pb-70" id="about" ref={ref}>
      <div className="container">
        <div className="row">
          {/* <ReactWOW animation="fadeLeft"> */}
            <div className="col-md-6 mb-30">
              <h2 className="font-400 cardo-font mt-0">{title}</h2>
              {children}
              <a
                href={linkButton}
                className="btn btn-green btn-square btn-animate mt-20"
              >
                <span>
                  {textButton ? textButton : "Read more"}
                  <Icofont icon="arrow-right" />
                </span>
              </a>
            </div>
          {/* </ReactWOW> */}
          <div className="col-md-6">
            <div className="arcon-video-box">
              <img className="img-fluid" src={image} alt="" />
              <div className="arcon-video-box_overlay">
                <div className="center-layout">
                  <div className="v-align-middle">
                    <a
                      className="popup-youtube"
                      href="!#"
                      onClick={(e) => {
                        e.preventDefault();
                        setToggler(!toggler);
                      }}
                    >
                      <div className="play-button">
                        <Icofont icon="ui-play" />
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
  )
);

export default AboutGym;
