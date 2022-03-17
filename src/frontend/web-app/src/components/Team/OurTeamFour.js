import React from 'react';
import teamData from "../../data/Team/team-data.json";
import TeamMember from './TeamMember';
import HeadingSix from '../HeadingSection/HeadingSix';

const OurTeamFour = () => (
    <section className="white-bg">
    <div className="container">
      <div className="row">
        <HeadingSix title="Meet Our Team" tagline="WE ARE STRONGER" />
      </div>
      <div className="row mt-50">
          { teamData.map((member, i) => (
              <TeamMember
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

export default OurTeamFour;