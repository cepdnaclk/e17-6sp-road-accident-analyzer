import React from "react";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";

const AccordionsComponent = ({ type, data, classAppend, items }) => (
  <>
    <Collapse
      accordion={true}
      defaultActiveKey="1"
      className={`panel-group accordion-${type ? type : "color"} ${
        classAppend ? classAppend : ""
      }`}
    >
      {items
        ? data.filter((v, i) => i < items).map((panel) => (
            <Collapse.Panel
              key={panel.id}
              header={panel.title}
              headerClass="panel-heading"
              className="panel panel-default"
            >
              {panel.text}
            </Collapse.Panel>
          ))
        : data.map((panel) => (
            <Collapse.Panel
              key={panel.id}
              header={panel.title}
              headerClass="panel-heading"
              className="panel panel-default"
            >
              {panel.text}
            </Collapse.Panel>
          ))}
    </Collapse>
  </>
);

export default AccordionsComponent;
