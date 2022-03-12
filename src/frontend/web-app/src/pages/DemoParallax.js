import React from "react";
import { useLax } from "../helpers/use-lax";

const DemoParallax = () => {
  useLax();
  return (
    <>
      <div className="dn-bg-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="left_parallax">
        <div className="vertical-text">
          <h3
            className="lax chunkyText lax-vertical font-700 dark-color"
            data-lax-preset="driftRight"
            data-lax-optimize="true"
          >
            15+ Elements
          </h3>
        </div>
      </div>
      <div className="right_parallax">
        <h3
          className="lax chunkyText hscroll font-700 gradient-color"
          ddata-lax-preset="driftLeft"
          data-lax-optimize="true"
        >
          Demos.
        </h3>
      </div>
    </>
  );
};

export default DemoParallax;
