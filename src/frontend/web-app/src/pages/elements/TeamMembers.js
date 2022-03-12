import React from "react";
import Icofont from "react-icofont";
import teamData from "../../data/Team/team-data.json";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import FooterOne from "../../components/Footer/FooterOne";

const TeamMembers = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Team Members" />
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
    <section className="pt-0">
      <div className="container-fluid remove-padding">
        <div className="row startup-member remove-margin">
          {teamData.map((member) => (
            <div className="col-md-3 col-sm-6 remove-padding" key={member.id}>
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
    <section className="pt-0">
      <div className="container">
        <div className="row startup-member">
          {teamData.map((member) => (
            <div className="col-md-3 col-sm-6" key={member.id}>
              <div className="member text-center mt-o">
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
    <section className="pt-0">
      <div className="container">
        <div className="row media-member">
          {teamData.map((member) => (
            <div className="col-md-3 col-sm-6" key={member.id}>
              <div className="member text-center mt-o">
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
                <div className="white-bg pt-20 pb-20 box-shadow-hover">
                  <h4 className="member-title">{member.name}</h4>
                  <p className="member-subtitle">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default TeamMembers;
