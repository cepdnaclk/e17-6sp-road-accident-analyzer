import React, { useState, useEffect } from "react";
import BlogItemGrid from "./BlogItemGrid";
import Pagination from "../Pagination/Pagination";
import BlogWrapper from "./BlogWrapper";
import dataPosts from "../../data/Blog/blog-data.json";
import dataPostsMasonry from "../../data/Blog/blog-masonry-data.json";
import BlogItemMasonry from "./BlogItemMasonry";
import BlogItemSidebar from "./BlogItemSidebar";
import SidebarForBlog from "../Sidebar/SidebarForBlog";

const BlogContent = ({ type, sidebar }) => {
  const [posts, setPosts] = useState([]);
  const [masonryPosts, setMasonryPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const currentMasonryPosts = masonryPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const page = (e, currentPage) => {
    e.preventDefault();
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    setPosts(dataPosts);
    setMasonryPosts(dataPostsMasonry);
  }, []);

  return (
    <section
      className={type === "grid" || type === "masonry" ? "pt-100 pb-100" : null}
    >
      <div className="container">
        <div className="row">
          {type === "sidebar-left" ? (
            <div className="col-md-3">
              <SidebarForBlog />
            </div>
          ) : null}
          <BlogWrapper type={type}>
            {type === "masonry"
              ? currentMasonryPosts.map((post, index) => (
                  <BlogItemMasonry
                    key={post.id}
                    id={post.id}
                    image={post.image}
                    title={post.title}
                    link={post.link ? post.link : null}
                    slides={post.slides ? post.slides : null}
                    published={post.published}
                    excerpt={post.excerpt}
                    type={post.type}
                  />
                ))
              : currentPosts.map(
                  (post, index) =>
                    ({
                      grid: (
                        <BlogItemGrid
                          key={post.id}
                          id={post.id}
                          index={index}
                          firstPost={indexOfFirstPost}
                          image={post.image}
                          title={post.title}
                          link={post.link ? post.link : null}
                          slides={post.slides ? post.slides : null}
                          published={post.published}
                          excerpt={post.excerpt}
                          type={post.type}
                        />
                      ),
                      sidebar: (
                        <div className="col-md-6" key={post.id}>
                          <BlogItemSidebar
                            blogType="sidebar"
                            id={post.id}
                            index={index}
                            firstPost={indexOfFirstPost}
                            image={post.image}
                            title={post.title}
                            link={post.link ? post.link : null}
                            slides={post.slides ? post.slides : null}
                            published={post.published}
                            excerpt={post.excerpt}
                            type={post.type}
                          />
                        </div>
                      ),
                      "sidebar-left": (
                        <BlogItemSidebar
                          key={post.id}
                          id={post.id}
                          index={index}
                          firstPost={indexOfFirstPost}
                          image={post.image}
                          title={post.title}
                          link={post.link ? post.link : null}
                          slides={post.slides ? post.slides : null}
                          published={post.published}
                          excerpt={post.excerpt}
                          type={post.type}
                        />
                      ),
                      "sidebar-right": (
                        <BlogItemSidebar
                          key={post.id}
                          id={post.id}
                          index={index}
                          firstPost={indexOfFirstPost}
                          image={post.image}
                          title={post.title}
                          link={post.link ? post.link : null}
                          slides={post.slides ? post.slides : null}
                          published={post.published}
                          excerpt={post.excerpt}
                          type={post.type}
                        />
                      ),
                    }[type])
                )}
          </BlogWrapper>
          {type === "sidebar-right" || type === "sidebar" ? (
            <div className="col-md-3 offset-md-1 right-col-rv">
              <SidebarForBlog />
            </div>
          ) : null}
        </div>
        {type === "masonry" ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={masonryPosts.length}
            page={page}
            currentPage={currentPage}
          />
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            page={page}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  );
};

export default BlogContent;
