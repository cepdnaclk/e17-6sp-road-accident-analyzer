import React, { useState, useEffect } from "react";

const AccordionPanel = ({ title, children }) => {
    
    const [active, setActive] = useState("");

    const toggleOpen = () => {
        setActive(!active);
      }

    return (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">
        <a
          className={active === true ? "" : "collapsed"}
          data-toggle="collapse"
          data-parent="#accordion-color"
          href="#collapseFour"
          onClick={toggleOpen}
        >
          {title}
        </a>
      </h3>
    </div>
    <div id="collapseFour" className={"panel-collapse collapse " + (active === true ? "in":"")}>
      <div className="panel-body">
        {children}
      </div>
    </div>
  </div>
)};

export default AccordionPanel;
