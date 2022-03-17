import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import BlogContent from "../../components/Blog/BlogContent";
import FooterOne from "../../components/Footer/FooterOne";

const BlogSidebarLeft = () => (
  <Loader>
    <HeaderOne />
    <PageTitleBlog
      title="Blog Sidebar Left"
      tagline="Checkout Our Latest Posts"
    />
    <BlogContent type="sidebar-left" />
    <FooterOne />
  </Loader>
);

export default BlogSidebarLeft;
