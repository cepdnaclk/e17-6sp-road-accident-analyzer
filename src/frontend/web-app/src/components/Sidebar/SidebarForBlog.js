import React from "react";

const SidebarForBlog = () => (
  <>
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
    <div className="widget widget_about">
      <h4 className="widget-title">About</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui lorem,
        adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo
        eu convallis placerat.
      </p>
    </div>
    <div className="widget sidebar_widget widget_archive">
      <h4 className="widget-title">Archive</h4>
      <ul>
        <li>
          <a href={process.env.PUBLIC_URL}>January 2017</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL}>May 2016</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL}>June 2015</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL}>Febuary 2017</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL}>April 2015</a>
        </li>
      </ul>
    </div>
    <div className="widget sidebar_widget widget_categories">
      <h4 className="widget-title">Categories</h4>
      <ul>
        <li>
          <a href={process.env.PUBLIC_URL}>Business</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL}>Health</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL}>Motion Graphic</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL}>Conecpt Design</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL}>Lifestyle</a>
        </li>
      </ul>
    </div>
    <div className="widget sidebar_widget widget_tag_cloud">
      <h4 className="widget-title">Tags</h4>
      <div className="post-tags">
        <a href={process.env.PUBLIC_URL}>Design</a>
        <a href={process.env.PUBLIC_URL}>Envato</a>
        <a href={process.env.PUBLIC_URL}>Photography</a>
        <a href={process.env.PUBLIC_URL}>Videos</a>
        <a href={process.env.PUBLIC_URL}>Creative</a>
        <a href={process.env.PUBLIC_URL}>Apps</a>
      </div>
    </div>
  </>
);

export default SidebarForBlog;
