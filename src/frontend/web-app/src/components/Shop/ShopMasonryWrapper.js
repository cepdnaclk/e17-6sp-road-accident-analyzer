import React from "react";

const ShopMasonryWrapper = ({ layout, children }) =>
  layout === "masonry" ? <div id="portfolioMasonry">{children}</div> : children;

export default ShopMasonryWrapper;
