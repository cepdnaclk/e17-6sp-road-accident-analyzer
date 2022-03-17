import React, { forwardRef } from 'react';
import teamData from "../../data/Team/team-data.json";
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import TeamMember from './TeamMember';

const OurTeamTwo = forwardRef(({ title, tagline}, ref) => (
    <section className="white-bg" id="team" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingSection title={title} tagline={tagline} />
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

));

export default OurTeamTwo;