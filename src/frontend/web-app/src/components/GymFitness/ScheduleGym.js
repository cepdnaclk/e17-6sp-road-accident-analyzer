import React, { forwardRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataSchedule from "../../data/Services/schedule-gym-data.json";

const ScheduleGym = forwardRef((props, ref) => (
  <section className="dark-bg" id="schedule" ref={ref}>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading white-color">
          <h2 className="font-400 cardo-font">Our Schedule</h2>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-10 offset-md-1">
          <Tabs className="schedule-wrap">
            <TabList id="myTab" className="nav nav-tabs">
              {dataSchedule.map((day) => (
                <Tab key={day.id}>
                  <a href="#monday" data-toggle="tab" aria-expanded="true">
                    {day.title}
                  </a>
                </Tab>
              ))}
            </TabList>
            <div id="myTabContent" className="tab-content schedule-tab">
              {dataSchedule.map((item) => (
                <TabPanel
                  className="tab-pane show in active"
                  id="monday"
                  key={item.id}
                >
                  {item.services.map((service) => (
                    <ul
                      key={service.id}
                      data-aos={"fade-in"}
                      data-aos-delay={100}
                      data-aos-duration={300}
                    >
                      <li>{service.title}</li>
                      <li>{service.hours}</li>
                      <li>{service.trainer}</li>
                      <li>
                        <a href="!#" onClick={(e) => e.preventDefault()}>
                          Join Now
                        </a>
                      </li>
                    </ul>
                  ))}
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </section>
));

export default ScheduleGym;
