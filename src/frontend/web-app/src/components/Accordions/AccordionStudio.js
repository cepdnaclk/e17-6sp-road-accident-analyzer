import React from "react";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";

const AccordionStudio = ({ data }) => (
  <Collapse
    accordion={true}
    defaultActiveKey="1"
    className="panel-group accordion-style-01"
    id="accordion-style"
  >
    {data.map((panel) => (
      <Collapse.Panel
        key={panel.id}
        header={panel.title}
        headerClass="panel-heading"
        className="panel"
      >
        {panel.text}
      </Collapse.Panel>
    ))}
  </Collapse>
);

export default AccordionStudio;
