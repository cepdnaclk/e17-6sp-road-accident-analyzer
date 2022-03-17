import React from "react";
import imgLogo from "../../assets/images/logo-black.png";

const MainLogoTwo = () => (
  <a className="logo navbar-brand" href={`${process.env.PUBLIC_URL}/`}>
    <img src={imgLogo} className="logo" alt="" />
  </a>
);

export default MainLogoTwo;
