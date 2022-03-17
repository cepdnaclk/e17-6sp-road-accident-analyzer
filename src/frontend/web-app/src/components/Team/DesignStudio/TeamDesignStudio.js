import React from "react";
import dataTeam from "../../../data/Team/team-studio-data.json";
// import ReactWOW from "react-wow";

const TeamDesignStudio = () => (
  <section className="white-bg pt-0">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          {/* <ReactWOW animation="fadeTop" delay="0.1s"> */}
            <h2 className="josefin-font">Meet Our Team</h2>
          {/* </ReactWOW> */}
        </div>
      </div>
      <div className="row mt-50">
        {dataTeam.map((member) => (
          // <ReactWOW animation="fadeInUp" delay="0.4s">
            <div className="col-md-3 col-sm-6 col-xs-12" key={member.id}>
              <div className="team-member-container">
                <img
                  src={require("../../../assets/images/" + member.image)}
                  className="img-fluid rounded-circle"
                  alt={member.name}
                />
              </div>
              <div className="text-center">
                <h4 className="member-title josefin-font">{member.name}</h4>
                <p className="member-subtitle josefin-font">{member.role}</p>
              </div>
            </div>
          // </ReactWOW>
        ))}
      </div>
    </div>
  </section>
);

export default TeamDesignStudio;
