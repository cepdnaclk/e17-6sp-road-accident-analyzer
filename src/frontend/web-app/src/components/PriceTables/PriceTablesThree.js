import React from "react";
import PriceItemTwo from "./PriceItemTwo";
import pricesData from "../../data/PriceTables/price-tables-data.json";
import HeadingFour from "../HeadingSection/HeadingFour";

const PriceTablesThree = () => (
  <section className="dark-bg">
    <div className="container">
      <div className="row">
        <HeadingFour title="Our Pricing" tagline="Choose your plan" />
      </div>
      <div className="row mt-50">
        {pricesData.map((table, i) => (
          <PriceItemTwo
            key={table.id}
            icon={table.icon}
            title={table.title}
            currency={table.currency}
            price={table.price}
            features={table.features}
            textButton={table.textButton}
            featured={table.featured}
            index={i}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PriceTablesThree;
