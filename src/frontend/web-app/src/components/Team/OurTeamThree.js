import React from 'react';
import teamData from "../../data/Team/team-data.json";
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import TeamMemberTwo from './TeamMemberTwo';

const OurTeamThree = () => (
    <section className="white-bg">
    <div className="container">
      <div className="row">
        <HeadingSection title="MEET OUR TEAM" tagline="WE ARE STRONGER" />
      </div>
      <div className="row mt-50">
          { teamData.filter((team, i) => i <= 2).map((member, i) => (
              <TeamMemberTwo
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              social={member.social}
              delay={i + 3}
            />
          )) }
      </div>
    </div>
  </section>

);

export default OurTeamThree;