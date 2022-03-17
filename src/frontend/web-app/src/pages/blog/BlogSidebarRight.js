import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import BlogContent from "../../components/Blog/BlogContent";
import FooterOne from "../../components/Footer/FooterOne";

const BlogSidebarRight = () => (
  <Loader>
    <HeaderOne />
    <PageTitleBlog
      title="Blog Sidebar Right"
      tagline="Checkout Our Latest Posts"
    />
    <BlogContent type="sidebar-right" />
    <FooterOne />
  </Loader>
);

export default BlogSidebarRight;
