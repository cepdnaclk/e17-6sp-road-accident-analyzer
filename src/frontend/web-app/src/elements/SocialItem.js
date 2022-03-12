import React from "react";
import Icofont from "react-icofont";

const SocialItem = ({ icon, link }) => (
  <li>
    <a href={link}>
      <Icofont icon={icon} />
    </a>
  </li>
);

export default SocialItem;
