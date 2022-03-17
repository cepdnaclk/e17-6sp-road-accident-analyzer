import React, { forwardRef } from "react";
import img from "../../assets/images/chef-img.png";

const TheChefs = forwardRef((props, ref) => (
  <section className="dark-bg pb-0 pt-100" id="chefs" ref={ref}>
    <div className="left_parallax">
      <h3
        data-lax-preset="driftRight"
        data-lax-optimize="true"
        className="lax chunkyText font-700 red-color mt-100"
      >
        Crazy food!
      </h3>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={img} alt="food-img" />
        </div>
        <div className="col-md-6 text-left mb-20 mt-50">
          <h1
            className="upper-case font-700 white-color"
            data-aos={"fade-up"}
            data-aos-delay={100}
            data-aos-duration={700}
          >
            The Chefs
          </h1>
          <p
            className="mt-20"
            data-aos={"fade-up"}
            data-aos-delay={100}
            data-aos-duration={700}
          >
            Etiam eget felis sit amet nunc euismod laoreet. Nunc congue
            sollicitudin bibendum. Pellentesque ut sollicitudin erat. Proin in
            tincidunt nisl. className aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Cras posuere interdum
            est non malesuada. Ut quis aliquam ipsum. Phasellus viverra ipsum
            velit, in ultrices orci commodo ullamcorper. Ut laoreet vel mi eget
            fringilla.
          </p>
          <p
            className="mt-20"
            data-aos={"fade-up"}
            data-aos-delay={100}
            data-aos-duration={700}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vitae enim neque. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
          <p className="mt-30">
            <a
              href="!#"
              className="btn btn-red btn-square"
              data-aos={"fade-up"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              BOOK A TABLE
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
));

export default TheChefs;
