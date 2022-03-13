import React, { forwardRef } from "react";
import PriceItemOne from "./PriceItemOne";
import pricesData from "../../data/PriceTables/price-tables-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";

const PriceTablesTwo = forwardRef(({ title, tagline, btnType, tableType, classes }, ref) => (
    <section id="pricing" ref={ref} className={classes || ""} >
    <div className="container">
      <div className="row">
        <HeadingSection
          title={title}
          tagline={tagline}
        />
      </div>
      <div className="row mt-50">
        {pricesData.map((table) => (
          <PriceItemOne
            key={table.id}
            icon={table.icon}
            title={table.title}
            currency={table.currency}
            price={table.price}
            features={table.features}
            textButton={table.textButton}
            btnType={btnType}
            tableType={tableType}
            featured={table.featured}
          />
        ))}
      </div>
    </div>
  </section>
));

export default PriceTablesTwo;