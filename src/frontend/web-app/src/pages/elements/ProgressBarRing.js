import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";
import dataSkills from "../../data/OurSkills/skills-ring-data.json";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import AnimatedProgressProvider from "../../helpers/AnimatedProgressProvider";
import FooterOne from "../../components/Footer/FooterOne";

const ProgressBarRing = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Progress Bar Ring" />
    <section>
      <div className="container">
        <div className="row">
          {dataSkills.map((skill) => (
            <div className="col-md-3 col-sm-6" key={skill.id}>
              <div className="progress-ring">
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={skill.percentage}
                  duration={0}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => (
                    <CircularProgressbarWithChildren
                      value={value}
                      strokeWidth={4}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        pathTransitionDuration: "none",
                        pathColor: "#d42e22",
                      })}
                    >
                      <span className="dark-color ring-bar-text">
                        {skill.title}
                      </span>
                      <div style={{ fontSize: 15, color: "#212121" }}>{value}%</div>
                    </CircularProgressbarWithChildren>
                  )}
                </AnimatedProgressProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default ProgressBarRing;
