import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import BlogContent from "../../components/Blog/BlogContent";
import FooterOne from "../../components/Footer/FooterOne";

const BlogGrid = () => (
  <Loader>
    <HeaderOne />
    <PageTitleBlog title="Blog Grid" tagline="Checkout Our Latest Posts" />
    <BlogContent type="grid" sidebar />
    <FooterOne />
  </Loader>
);

export default BlogGrid;
