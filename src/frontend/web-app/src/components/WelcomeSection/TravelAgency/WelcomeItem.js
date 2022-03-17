import React from "react";
import Icofont from "react-icofont";

const WelcomeItem = () => (
  <div className="white-bg clearfix pt-100 pb-100 relative">
    <div className="travel-bg-left bg-flex col-md-6"></div>
    <div className="col-about-right col-md-6 offset-md-6">
      <h2 className="text-uppercase font-700">
        Welcome to Scoda
        <br />
        Travel Agency
      </h2>
      <div className="mt-30">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          tincidunt lorem. Duis gravida, dui nec lacinia sollicitudin, urna
          ligula laoreet diam, mattis fermentum risus nisi a mi. Suspendisse ut
          quam blandit, bibendum nibh vel, condimentum est. Donec nisl odio,
          facilisis sed elementum ac, porta ut lacus.
        </p>
      </div>
      <div className="mt-30">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          finibus, enim eget lobortis sagittis, erat lorem rutrum leo, non
          egestas purus dolor vestibulum magna.
        </p>
      </div>
      <div className="mt-30">
        <a href="!#" className="btn btn-color btn-circle btn-animate">
          <span>
            Our Trips <Icofont icon="air-balloon" />
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default WelcomeItem;
