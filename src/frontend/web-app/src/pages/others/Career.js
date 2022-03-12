import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataCarrers from "../../data/Careers/careers-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import Icofont from "react-icofont";
import FooterOne from "../../components/Footer/FooterOne";

const Career = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Careers" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 terms">
            <h2 className="font-700">Currently Opening</h2>
            <ul className="careers-listing">
              {dataCarrers.map((career) => (
                <li key={career.id}>
                  <div className="row">
                    <div className="career-main col-md-6">
                      <h5 className="font-700">{career.position}</h5>
                      <span className="default-color career-type">
                        {career.type}
                      </span>
                      <span className="career-location">
                        <Icofont icon="google-map-circle" />
                        {career.location}
                      </span>
                    </div>
                    <div className="col-md-3 career-category">
                      <span>Career Opportunities</span>
                    </div>
                    <div className="career-details col-md-3">
                      <a
                        href="!#"
                        className="btn btn-color btn-square btn-animate"
                      >
                        <span>
                          Apply Now
                          <Icofont icon="simple-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h2 className="mt-80 font-700">Benefits</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget nisl gravida, interdum nunc quis, faucibus ligula. Nam eu
              neque nunc. Suspendisse egestas dolor ante, nec tincidunt sem
              malesuada at. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Morbi vehicula metus
              sit amet turpis malesuada commodo.
            </p>
            <p>
              Praesent tincidunt, massa et porttitor imperdiet, lorem velit
              posuere erat, sit amet gravida odio magna in ex. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Vivamus massa urna, pharetra eget malesuada eu, pharetra vitae
              arcu. Duis dapibus aliquam ante, ut posuere odio commodo sed.
              Pellentesque non hendrerit purus. Morbi tellus mauris, convallis
              non dictum non, elementum eget leo. Donec non ex est. Pellentesque
              magna urna, maximus ac augue id, pretium lobortis tortor.
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default Career;
