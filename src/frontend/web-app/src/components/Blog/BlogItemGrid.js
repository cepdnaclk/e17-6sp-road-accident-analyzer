import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";
import Swiper from "react-id-swiper";

const BlogItemGrid = ({
  id,
  firstPost,
  index,
  image,
  title,
  link,
  slides,
  published,
  excerpt,
  type,
}) => {
  const blogURL = `/blog/${title
    .replace(/\//g, "-")
    .replace(/\s/g, "-")
    .toLocaleLowerCase()}?id=${id}`;

  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".blog-slider-next",
      prevEl: ".blog-slider-prev",
    },
  };

  return (
    <div
      className={
        "col-md-4 mt-50 " + (type === "video" ? "blog-grid-video" : "")
      }
    >
      <div className={"post " + (type === "video" ? "video-alpha" : "")}>
        {type === "slider" ? (
          <div className="blog-grid-slider">
            <Swiper {...params}>
              {slides.map((slide, i) => (
                <img
                  key={i}
                  className="img-fluid"
                  src={require("../../assets/images/" + slide)}
                  alt=""
                />
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="post-img">
            <img
              className="img-fluid"
              src={require("../../assets/images/" + image)}
              alt=""
            />
            {type === "video" ? (
              <a className="video-play popup-youtube" href={process.env.PUBLIC_URL + blogURL}>
                <Icofont icon="ui-play" />
              </a>
            ) : null}
          </div>
        )}

        <div className="post-info">
          <h3>
            <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{title}</Link>
          </h3>
          <h6>{published}</h6>
          <p>{excerpt}</p>
          <Link
            className="readmore dark-color"
            to={`${process.env.PUBLIC_URL + blogURL}`}
          >
            <span>Read More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItemGrid;
