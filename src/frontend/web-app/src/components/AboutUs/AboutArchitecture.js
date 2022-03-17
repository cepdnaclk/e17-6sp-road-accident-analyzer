import React, { forwardRef } from "react";
import Icofont from "react-icofont";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../data/TabsIconSection/tabs-default-data.json";
import img from "../../assets/images/architecture-img.jpg";

const AboutArchitecture = forwardRef((props, ref) => (
  <section id="about" className="pb-80" ref={ref}>
    <div className="container">
      <div className="row">
        <div className="col-md-5 mb-20">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-md-7">
          <h2 className="text-uppercase font-700 mt-0">
            <span className="font-100">We are</span> Scoda Agency
          </h2>
          <p className="mt-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
            Donec in risus eget purus mattis varius. Nulla dapibus quis orci et
            tincidunt. Phasellus in rhoncus quam. Fusce a est lacinia, ultricies
            mi nec, rutrum dolor.
          </p>
          <p>
            Donec vehicula cursus metus viverra aliquet Aliquam tincidunt dolor
            a auctor finibus. Sed in sodales magna. Etiam eget velit nec urna
            facilisis fringilla sed eget purus. Ut pulvinar ullamcorper mauris
            non tristique.
          </p>
          <Tabs className="light-tabs mt-50">
            <TabList className="nav nav-tabs text-left">
              {dataTabs
                .filter((v, i) => i < 3)
                .map((tab) => (
                  <Tab key={tab.id} className="nav-item react-tabs__tab">
                    <span>{tab.title}</span>
                  </Tab>
                ))}
            </TabList>
            <div className="tab-content text-left">
              {dataTabs
                .filter((v, i) => i < 3)
                .map((tab) => (
                  <TabPanel key={tab.id} className="tab-pane show in active">
                    <p
                      data-aos-delay={100}
                      data-aos={"fade-in"}
                    >
                      {tab.text}
                    </p>
                  </TabPanel>
                ))}
            </div>
          </Tabs>
          {/* <div className="light-tabs mt-50">
            <ul className="nav nav-tabs text-left" role="tablist">
              <li role="presentation" className="active">
                <a href="#mission" role="tab" data-toggle="tab">
                  Mission
                </a>
              </li>
              <li role="presentation">
                <a href="#history" role="tab" data-toggle="tab">
                  History
                </a>
              </li>
              <li role="presentation">
                <a href="#vision" role="tab" data-toggle="tab">
                  Vision
                </a>
              </li>
            </ul>
            <div className="tab-content text-left">
              <div
                role="tabpanel"
                className="tab-pane fade in active"
                id="mission"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  tincidunt consequat nunc, ultrices vehicula mauris mollis et.
                  Sed pharetra ultrices quam in laoreet. Donec laoreet eu mi nec
                  sagittis. Curabitur nunc velit, egestas vel aliquet ac, tempus
                  quis dolor.
                </p>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="history">
                <p>
                  Duis pulvinar mattis turpis in mollis. Suspendisse eu eros id
                  dolor efficitur tincidunt quis id tellus. In lacinia laoreet
                  auctor. Mauris a consequat magna, in tempus urna laoreet eu mi
                  nec sagittis. Curabitur nunc velit, egestas vel aliquet ac,
                  tempus quis dolor.
                </p>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="vision">
                <p>
                  Nam nisi sapien, varius non aliquet vel, vestibulum at lacus.
                  Nulla leo neque, mattis id risus id, imperdiet finibus risus.
                  Curabitur laoreet sit amet lacus vel semper. Vivamus in risus
                  magna. Nulla eu metus congue, condimentum mi et, tristique
                  arcu.
                </p>
              </div>
            </div>
          </div> */}
          <a href="!#" className="btn btn-color btn-circle btn-animate mt-20">
            <span>
              Read more <Icofont icon="simple-right" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
));

export default AboutArchitecture;
