import React from "react";
import dataAccordion from "../../data/Accordion/accordions-data.json";

const Accordion = () => (
  <div className="panel-group accordion-color mt-50" id="accordion-color">
    {dataAccordion.map((item, i) => (
      <div className="panel panel-default" key={item.id}>
        <div className="panel-heading">
          <h3 className="panel-title">
            <a
              data-toggle="collapse"
              data-parent="#accordion-color"
              href="#collapseOne"
              className={i===0 ? "collapse": "collapsed"}
            >
              {item.title}
            </a>
          </h3>
        </div>
        <div id="collapseOne" className={"panel-collapse collapse " + (i===0 ? "in": "")}>
          <div className="panel-body">{item.text}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Accordion;
