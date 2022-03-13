import React from "react";
import Icofont from "react-icofont";

const Pagination = ({ postsPerPage, totalPosts, page, currentPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const positionTop = () => {
    window.scrollTo(0, 380);
  };

  const prevPage = (e) => {
    page(e, currentPage - 1);
    positionTop();
  };

  const nextPage = (e) => {
    page(e, currentPage + 1);
    positionTop();
  };

  return (
    <div className="clearfix">
      <ul className="pagination">
        <li>
          <a
            href="!#"
            className={currentPage === 1 ? "isDisabled" : null}
            onClick={(e) => prevPage(e)}
          >
            <Icofont icon="simple-left" />
          </a>
        </li>
        {pages.map((number) => (
          <li key={number}>
            <a
              href="!#"
              onClick={(e) => {
                page(e, number);
                positionTop();
              }}
              className={number === currentPage ? "active" : null}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            href="!#"
            className={currentPage === pages.length ? "isDisabled" : null}
            onClick={(e) => nextPage(e)}
          >
            <Icofont icon="simple-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
