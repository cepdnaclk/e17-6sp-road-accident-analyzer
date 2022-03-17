import React from "react";
import dataSocial from "../../data/Social/social-data.json";
import SocialItem from "../../elements/SocialItem";

const SocialNav = ({ items }) => (
    <ul className="social-media-dark social-top">
        {dataSocial.filter((val, i) => items ? i < items : i < dataSocial.length).map((social) => (
              <SocialItem key={social.id} link={social.link} icon={social.icon} />
            ))}
        </ul>
);

export default SocialNav;