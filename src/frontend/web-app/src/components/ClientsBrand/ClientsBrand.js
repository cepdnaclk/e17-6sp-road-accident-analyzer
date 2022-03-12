import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import clientsData from "../../data/BrandsSlider/clients-brand.json";

const ClientsBrand = ({ children, classAppend }) => {
  const settings = {
    className: "clients-brand-carousel",
    slidesToShow: 6,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="pt-50 pb-50 white-bg">
      <div className="container">
        {children ? <div className="row">{children}</div> : null}
        <div className={"row " + (classAppend ? classAppend : null)}>
          {
            <Slider {...settings}>
              {clientsData.map((client) => (
                <div className="client-logo" key={client.id}>
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/" + client.image)}
                    alt={client.name}
                  />
                </div>
              ))}
            </Slider>
          }
        </div>
      </div>
    </section>
  );
};

export default ClientsBrand;
