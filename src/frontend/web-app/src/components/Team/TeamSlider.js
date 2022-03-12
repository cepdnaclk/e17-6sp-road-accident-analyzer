import React from "react";
import Swiper from "react-id-swiper";
import dataTeam from "../../data/Team/team-data.json";

const TeamSlider = () => {
  const params = {
    effect: "fade",
    autoplay: {
      delay: 2500
    },
  };

  return (
    <Swiper {...params}>
      {dataTeam.map((member) => (
        <div
          className="team-member-container gallery-image-hover"
          key={member.id}
        >
          <img
            src={require("../../assets/images/" + member.image)}
            className="img-fluid"
            alt="team-01"
          />
          <div className="member-caption">
            <div className="member-description text-center">
              <div className="member-description-wrap">
                <h4 className="member-title cardo-font">{member.name}</h4>
                <p className="member-subtitle">{member.role}</p>
                <ul className="member-icons">
                  <li className="social-icon">
                    <a href="!#">
                      <i className="icofont icofont-facebook"></i>
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="!#">
                      <i className="icofont icofont-twitter"></i>
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="!#">
                      <i className="icofont icofont-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
