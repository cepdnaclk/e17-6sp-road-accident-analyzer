import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import BlogSlider from "../../components/Blog/BlogSlider";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const BlogCarousel = () => (
  <Loader>
    <HeaderOne />
    <PageTitleBlog title="Blog Carousel" tagline="Checkout Our Latest Posts" />
    <BlogSlider />
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default BlogCarousel;
