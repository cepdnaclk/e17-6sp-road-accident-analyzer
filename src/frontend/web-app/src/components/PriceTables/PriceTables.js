import React from "react";
import PriceItemOne from "./PriceItemOne";
import pricesData from "../../data/PriceTables/price-tables-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";

const PriceTables = () => (
  <section className="dark-bg">
    <div className="container">
      <div className="row">
        <HeadingSection
          title="Our Pricing"
          tagline="Choose your plan"
          classAppend="white-color"
        />
      </div>
      <div className="row mt-50">
        {pricesData.map((table, i) => (
          <PriceItemOne
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

export default PriceTables;
