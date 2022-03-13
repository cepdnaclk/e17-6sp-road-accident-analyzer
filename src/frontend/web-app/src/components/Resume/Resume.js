import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import dataExperience from "../../data/Carousel/experience-resume-data.json";
import dataEducation from "../../data/Carousel/education-resume-data.json";
import Icofont from "react-icofont";

const Resume = forwardRef((props, ref) => {
  const settings = {
    className: "resume-slider",
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };

  return (
    <section className="dark-bg" id="resume" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading white-color">
            <h1 className="text-uppercase font-700">My Resume</h1>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-12">
            <h3 className="mt-10 raleway-font font-700 text-uppercase">
              Experience
            </h3>
            <p className="white-color">
              Mauris quis venenatis mauris. Nullam vel commodo velit. Cras purus
              risus, congue sed ornare id,
              <br />
              vulputate mollis elit.
            </p>
            <Slider {...settings}>
              {dataExperience.map((item) => (
                <div key={item.id}>
                  {item.items.map((item) => (
                    <h3 key={item.id}>
                      <Icofont icon={item.icon} />
                      {item.title}
                    </h3>
                  ))}
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-12">
            <h3 className="mt-10 font-700 text-uppercase">Education</h3>
            <p className="white-color">
              Mauris quis venenatis mauris. Nullam vel commodo velit. Cras purus
              risus, congue sed ornare id,
              <br />
              vulputate mollis elit.
            </p>
            <Slider {...settings}>
              {dataEducation.map((item) => (
                <div key={item.id}>
                  {item.items.map((item) => (
                    <h3 key={item.id}>
                      <Icofont icon={item.icon} />
                      {item.title}
                    </h3>
                  ))}
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Resume;
