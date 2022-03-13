import React from "react";
import Masonry from "react-masonry-css";

const breakpointColsObj = {
  default: 3,
  991: 2,
  576: 1,
};

const ShopWrapper = ({ layout, children }) => {
  if (layout === "standard") {
    return <div className="col-md-8">{children}</div>;
  } else if (layout === "masonry") {
    return (
      <Masonry
        id="shopMasonry"
        breakpointCols={breakpointColsObj}
        className="shop-masonry"
        columnClassName="shop-masonry-column"
      >
        {children}
      </Masonry>
    );
  } else {
    return children;
  }
};

export default ShopWrapper;
