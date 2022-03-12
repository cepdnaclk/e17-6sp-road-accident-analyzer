import React, { forwardRef } from "react";
import HeadingTwo from "../HeadingSection/HeadingTwo";
import OurSkillsOne from "../OurSkills/OurSkillsOne";
import CounterFour from "../Counters/CounterFour";

const WhoWeAreFour = forwardRef((props, ref) => (
  <section className="main-section" id="about" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingTwo
          title="About Me"
          text="Hello This is Stephen a Creative UI/UX Designer and Front End Developer
        Based on Australia, Melbourne I Have 10+ Years Experience in User
        Interface and User Experience Currently Work at Themeforest, Envato as a
        Freelance Designer. Hire me for more..."
        ></HeadingTwo>
      </div>
      <div className="row mt-50">
        <div className="col-md-6 resume-bar">
          <OurSkillsOne />
        </div>
        <div className="col-md-6">
          <div className="row">
            <CounterFour />
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default WhoWeAreFour;
