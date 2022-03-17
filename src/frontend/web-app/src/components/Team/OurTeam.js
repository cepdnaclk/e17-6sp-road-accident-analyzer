import React from "react";
import teamData from "../../data/Team/team-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";
import TeamMember from "./TeamMember";

const OurTeam = ({ title, tagline, bg, extraSpace }) => (
  <section className={"pb-0 " + (bg === "white" ? "white-bg" : "")}>
    {extraSpace === "true" ? (
      <div className="dn-bg-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : (
      ""
    )}
    <div className="row">
      <HeadingSection title={title} tagline={tagline} />
    </div>
    <div className="container-fluid">
      <div className="row mt-50">
        {teamData.map((member, i) => {
          return (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              social={member.social}
              delay={i + 3}
              removePadding="true"
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default OurTeam;
