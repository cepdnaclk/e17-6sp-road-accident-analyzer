import React from "react";
import serviceImg from "../../assets/images/startup-bg-left.jpg";
import dataSkills from "../../data/OurSkills/skills-data.json";
import ProgressBar from "../../elements/ProgressBar";

const OurSkillsTwo = ({ title, tagline }) => (
  <section className="white-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 offset-md-7 offset-sm-5">
        <h2 className="text-uppercase font-700">{title}</h2>
        <h4 className="mt-10 line-height-26 default-color">{tagline}</h4>
        <div className="left-service-box pt-40 pb-20">
          {dataSkills.filter((v,i) => i < 5).map((skill) => (
            <ProgressBar
              key={skill.id}
              title={skill.title}
              percentage={skill.percentage}
              classAppend="progress-two"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurSkillsTwo;
