import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../../data/TabsIconSection/tabs-default-data.json";

const AboutTravel = () => (
  <div className="white-bg clearfix pt-100 pb-100 relative">
    <div className="travel-bg-right bg-flex-right col-md-6"></div>
    <div className="col-about-left col-md-5 offset-md-1 text-left">
      <h2 className="text-uppercase font-700">About Company</h2>
      <Tabs className="light-tabs mt-50">
        <TabList className="nav nav-tabs text-left" role="tablist">
          {dataTabs
            .filter((v, i) => i < 3)
            .map((tab) => (
              <Tab key={tab.id}>
                <span>{tab.title}</span>
              </Tab>
            ))}
        </TabList>
        <div className="tab-content text-left">
          {dataTabs
            .filter((v, i) => i < 3)
            .map((tab) => (
              <TabPanel key={tab.id} className="tab-pane show in active">
                <p>{tab.text}</p>
              </TabPanel>
            ))}
        </div>
      </Tabs>
    </div>
  </div>
);

export default AboutTravel;
