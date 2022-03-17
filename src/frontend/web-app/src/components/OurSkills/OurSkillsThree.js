import React from 'react';
import dataProgress from "../../data/OurSkills/skills-data.json";
import ProgressBar from "../../elements/ProgressBar";

const OurSkillsThree = ({ classAppend }) => (
        dataProgress.filter((v,i) => i > 4).map((bar) => (
        <ProgressBar
          key={bar.id}
          title={bar.title}
          percentage={bar.percentage}
          color={bar.color ? bar.color : ""}
          classAppend = {classAppend ? classAppend : ""}
        />
      ))
);

export default OurSkillsThree;