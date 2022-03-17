import React from "react";
import Masonry from "react-masonry-css";

const BlogWrapper = ({ type, children }) => {
  const breakpointColsObj = {
    default: 3,
    991: 2,
    576: 1
  }
  return {
    grid: children,
    sidebar: (
      <div className="col-md-8">
        <div className="row">{children}</div>
      </div>
    ),
    "sidebar-right": <div className="col-md-8">{children}</div>,
    "sidebar-left": (
      <div className="col-md-8 offset-md-1 right-col-rv">{children}</div>
    ),
    masonry: (
      <Masonry id="blogMasonry" breakpointCols={breakpointColsObj} className="blog-masonry" columnClassName="blog-masonry-column" >
        {children}
      </Masonry>
    ),
  }[type];
};

export default BlogWrapper;
