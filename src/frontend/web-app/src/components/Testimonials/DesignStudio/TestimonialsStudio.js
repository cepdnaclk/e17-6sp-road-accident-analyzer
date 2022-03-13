import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataTestimonials from "../../../data/Testimonials/testimonials-data.json";
import Icofont from "react-icofont";
// import ReactWOW from "react-wow";

const TestimonialsStudio = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "slick testimonial",
  };

  return (
    <section className="parallax-bg-19">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            {/* <ReactWOW animation="fadeTop" delay="0.1s"> */}
              <h2 className="josefin-font">Best Customers</h2>
            {/* </ReactWOW> */}
          </div>
        </div>
        <div className="row">
          <div className="slick testimonial-carousel testimonial-style-01">
            <Slider {...settings}>
              {dataTestimonials.map((testimonial) => (
                <div
                  className="col-md-6 col-sm-6 col-xs-12"
                  key={testimonial.id}
                >
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <div className="content-wrap">
                        <div className="info">
                          <div className="image">
                            <img
                              className="img-fluid rounded-circle"
                              src={require("../../../assets/images/" +
                                testimonial.avatar)}
                              alt={testimonial.name}
                            />
                          </div>
                          <div className="cite">
                            <h6 className="name">{testimonial.name}</h6>
                            <span className="position">{testimonial.role}</span>
                          </div>
                        </div>
                        <div className="content">
                          <div className="text">
                            <Icofont
                              icon="quote-left"
                              className="font-20px default-color mt-20 mr-10"
                            />
                            <span>{testimonial.text}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStudio;
