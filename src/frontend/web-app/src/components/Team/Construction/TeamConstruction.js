import React from "react";
import dataTeam from "../../../data/Team/team-construction-data.json";

const TeamConstruction = () => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="text-uppercase">Our Team</h2>
          <hr className="text-center yellow-bg" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row startup-member">
        {dataTeam.map((member) => (
          <div key={member.id} className="col-md-3 col-sm-6">
            <div className="member text-center">
              <div className="team-member-container">
                <img
                  src={require("../../../assets/images/" + member.image)}
                  className="img-fluid"
                  alt="team-01"
                />
              </div>
              <h4 className="member-title text-uppercase">{member.title}</h4>
              <p className="member-subtitle text-uppercase">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamConstruction;
