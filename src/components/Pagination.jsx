import { useState } from "react";
import React from "react";
import { CardResidents } from "./CardResidents";

const Pagination = ({ totalResidents, location }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const residentsPerPage = 9;

  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidents = location?.residents?.slice(
    indexOfFirstResident,
    indexOfLastResident
  );

  const paginate = (numberOfPage) => setCurrentPage(numberOfPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResidents / residentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <article className="container__cards">
        {currentResidents?.map((url) => (
          <CardResidents key={url} url={url} />
        ))}
      </article>
      <div className="container__pagination">
        {pageNumbers.map((number) => (
          <button
            className="pagination-button"
            key={number}
            onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
