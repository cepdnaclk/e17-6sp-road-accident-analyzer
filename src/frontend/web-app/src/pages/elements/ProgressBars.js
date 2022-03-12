import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import OurSkillsOne from "../../components/OurSkills/OurSkillsOne";
import OurSkillsThree from "../../components/OurSkills/OurSkillsThree";
import FooterOne from "../../components/Footer/FooterOne";

const ProgressBars = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Progress Bars" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-50">
            <h3 className="mb-50">Progress Bar Theme</h3>
            <OurSkillsOne />
          </div>
          <div className="col-md-6">
            <h3 className="mb-50">Progress Bar Colored</h3>
            <OurSkillsThree />
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default ProgressBars;
