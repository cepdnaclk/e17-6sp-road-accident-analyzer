import React from "react";
import serviceImg from "../../assets/images/startup-bg-right.jpg";

const OurServicesThree = ({ title, tagline }) => (
  <section className="white-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
        <h2 className="font-700">{title}</h2>
        <h4 className="mt-10 line-height-26 default-color">{tagline}</h4>
        <p className="mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
          Donec in risus eget purus mattis varius. Nulla dapibus quis orci et
          tincidunt. Phasellus in rhoncus quam. Fusce a est lacinia, ultricies
          mi nec, rutrum dolor.
        </p>
        <p>
          Donec vehicula cursus metus viverra aliquet. Nam vel malesuada diam.
          Proin eleifend luctus mi, vel tincidunt sapien auctor nec. In quis
          elit in mauris dignissim pharetra. Praesent efficitur dolor a quam
          tristique ultricies.
        </p>
        <p className="mt-30">
          <a
            href={`${process.env.PUBLIC_URL}/service-simple`}
            className="btn btn-color btn-circle"
          >
            Read More
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default OurServicesThree;
