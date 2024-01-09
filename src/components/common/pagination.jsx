import React, { Component } from "react";
import _ from "lodash"; //using javascript library lodash version 4.17.10 to create array of pagecount

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);
  // [1, 2, 3..].map() to map list of movies, using lodash to create that array
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}                              
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
