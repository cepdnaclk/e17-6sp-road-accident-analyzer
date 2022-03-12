import React from "react";
import teamData from "../../data/Team/team-data.json";
import Icofont from 'react-icofont';

const OurTeamFive = () => (
  <section>
    <div className="container">
      <div className="row startup-member">
        {teamData.map((member) => (
          <div className="col-md-3 col-sm-6" key={member.id}>
            <div className="member text-center">
              <div className="team-member-container">
                <img
                  src={require("../../assets/images/" + member.image)}
                  className="img-fluid"
                  alt="team-01"
                />
                <div className="member-caption">
                  <div className="member-description text-center">
                    <div className="member-description-wrap">
                      <ul className="member-icons">
                        {member.social.map((item) => {
                          return (
                            <li className="social-icon" key={item.id}>
                              <a href={item.link}>
                                <Icofont icon={item.icon} />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="member-title">{member.name}</h4>
              <p className="member-subtitle">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeamFive;
