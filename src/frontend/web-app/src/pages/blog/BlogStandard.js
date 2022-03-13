import React from "react";
import dataBlog from "../../data/Blog/blog-data.json";
import dataSocial from "../../data/Social/social-data.json";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import SidebarForBlog from "../../components/Sidebar/SidebarForBlog";
import Icofont from "react-icofont";
import CommentsRespond from "../../components/Blog/CommentsRespond";

const BlogStandard = ({ sidebar }) => {
  const postId = new URLSearchParams(window.location.search).get("id");
  const post = dataBlog.find((post) => post.id === parseInt(postId));
  const featuredPost = dataBlog.find((post) => post.id === 1);

  return (
    <Loader>
      <HeaderOne />
      <PageTitleBlog title={post.title} tagline={post.published} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="post">
                <div className="post-img">
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/" + featuredPost.image)}
                    alt=""
                  />
                </div>
                <div className="post-info">
                  <h3>
                    <a href={process.env.PUBLIC_URL}>{featuredPost.title}</a>
                  </h3>
                  <h6>{featuredPost.published}</h6>
                  <p>{featuredPost.excerpt}</p>
                  <a className="readmore white-color" href="!#">
                    <span>Read More</span>
                    <i className="icofont icofont-simple-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog-standard">
                <p>{post.text}</p>
                <blockquote>
                  <p>{post.block}</p>
                </blockquote>
              </div>
              <div className="post-tags">
                {post.tags.map((tag, i) => (
                  <a key={i} href="!#">
                    {tag}
                  </a>
                ))}
              </div>
              <div className="post-controls">
                <div className="post-share">
                  <ul>
                    <li> Share: </li>
                    {dataSocial.map((social, i) => (
                      <li key={i}>
                        <a href={social.link}>
                          <Icofont icon={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="comments-info">
                  <a href="!#">
                    <i className="icofont icofont-comment"></i> 0
                  </a>
                </div>
              </div>
              <CommentsRespond />
            </div>
            <div className="col-md-3 offset-md-1 right-col-rv">
              <SidebarForBlog />
            </div>
          </div>
        </div>
      </section>
    </Loader>
  );
};

export default BlogStandard;
