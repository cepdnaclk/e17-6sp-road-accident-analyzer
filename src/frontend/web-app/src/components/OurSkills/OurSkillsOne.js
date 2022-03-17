import React from 'react';
import dataProgress from "../../data/OurSkills/skills-data.json";
import ProgressBar from "../../elements/ProgressBar";

const OurSkillsOne = ({ classAppend, font }) => (
        dataProgress.filter((v,i) => i < 5).map((bar) => (
        <ProgressBar
          key={bar.id}
          title={bar.title}
          percentage={bar.percentage}
          classAppend = {classAppend ? classAppend : ""}
          font={font}
        />
      ))
);

export default OurSkillsOne;