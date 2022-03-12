import React from "react";

const SidebarForShop = () => (
  <div className="col-md-3 offset-md-1">
    <div className="widget widget_about">
      <h4 className="widget-title">About</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui lorem,
        adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo
        eu convallis placerat.
      </p>
    </div>
    <div className="widget sidebar_widget">
      <form className="search-form" method="get">
        <input
          type="text"
          name="name"
          className="form-control search-field"
          id="search"
          placeholder="Type what it's your mind..."
        />
        <button
          type="submit"
          className="icofont icofont-search-1 search-submit"
        ></button>
      </form>
    </div>
    <div className="widget sidebar_widget widget_categories">
      <h4 className="widget-title">Categories</h4>
      <ul>
        <li>
          <a href="!#">Men</a>
        </li>
        <li>
          <a href="!#">Women</a>
        </li>
        <li>
          <a href="!#">Accessories</a>
        </li>
        <li>
          <a href="!#">Clothing</a>
        </li>
        <li>
          <a href="!#">T-shirts</a>
        </li>
      </ul>
    </div>
    <div className="widget sidebar_widget widget_tag_cloud">
      <h4 className="widget-title">Tags</h4>
      <div className="post-tags">
        <a href="!#">Dress</a> <a href="!#">Fashion</a> <a href="!#">T-Shirts</a>
        <a href="!#">Pants</a> <a href="!#">Suits</a> <a href="!#">Casual</a>
      </div>
    </div>
  </div>
);

export default SidebarForShop;
