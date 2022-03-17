import React from "react";
import dataCounter from "../../data/Counters/counter-data2.json";
import Icofont from "react-icofont";

const CounterFour = () =>
  dataCounter.map(
    ((item, i) => (
      <div key={item.id} className={"col-md-6 counter text-center col-sm-6 " + (i > 1 ? "mt-30" : "")}>
        <Icofont className="default-icon font-30px" icon={item.icon} />
        <h2 className="count font-700">{item.value}</h2>
        <h3 className="dark-color">{item.title}</h3>
      </div>
    ))
  );
export default CounterFour;
