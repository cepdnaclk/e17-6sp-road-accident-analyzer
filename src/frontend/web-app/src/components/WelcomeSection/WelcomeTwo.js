import React from "react";
import WelcomeSubsection from "./WelcomeSubsection";
import WelcomeFeatures from "./WelcomeFeatures";
import HeadingThree from "../../components/HeadingSection/HeadingThree";
import OurSkillsOne from "../OurSkills/OurSkillsOne";
import image from "../../assets/images/about-bg-left.jpg";
import TeamSlider from "../Team/TeamSlider";

const WelcomeTwo = ({ toggler, handleToggler }) => (
  <section className="dark-bg pt-0 pb-0">
    <WelcomeSubsection
      title="We are complete Digital Agency"
      tagline="Introduction our company"
      image={image}
      textButton="Watch our video"
      toggler={toggler}
      handleToggler={handleToggler}
    >
      We are a fully in-house digital agency focusing on branding, marketing,
      web design and development with clients ranging from start-ups, Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut
      magna ultricies pellentesque.
    </WelcomeSubsection>
    <div className="container-fluid">
      <div className="row row-flex flex-center">
        <HeadingThree
          title="Our Skills"
          tagline="We develop big ideas that sell"
        >
          <OurSkillsOne classAppend="cardo-font" font="cardo-font" />
        </HeadingThree>
        <div className="col-md-4 col-sm-12 team-member-wrapper">
          <div className="col-inner">
            <TeamSlider />
          </div>
        </div>
        <WelcomeFeatures
          title="What We Do"
          tagline="We develop big ideas that sell"
        />
      </div>
    </div>
  </section>
);

export default WelcomeTwo;
